import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { keyword } = await request.json();

  if (!keyword) {
    return NextResponse.json({ error: "Mot-cle requis" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Cle API Anthropic manquante" }, { status: 500 });
  }

  const systemPrompt = `Tu es un expert SEO francais specialise dans le traitement de l'humidite. Tu rediges du contenu pour le site murexpert.fr, une plateforme de mise en relation entre particuliers et professionnels du traitement de l'humidite en France.

Regles :
- Redige en francais sans accents (pour compatibilite technique)
- Ton professionnel mais accessible
- Structure avec des H2 et H3 clairs
- Integre naturellement le mot-cle cible et les mots-cles secondaires
- Ajoute des CTA vers /diagnostic-gratuit/
- Longueur : 1500-2000 mots
- Format : composant JSX Next.js pret a copier-coller (avec metadata, breadcrumb, sections, FAQ)
- Suis le meme style que les pages existantes du site (bg-beige-50, font-display serif, couleur #E8952D, etc.)`;

  const userPrompt = `Genere une page SEO complete pour le mot-cle "${keyword}".

Inclus :
1. export const metadata (title optimise < 60 chars, description < 160 chars)
2. Breadcrumb
3. Hero section avec badge + H1 + description + CTA
4. 4-5 sections de contenu avec H2
5. Un bloc CTA mid-article
6. Une section FAQ avec 5 questions/reponses
7. Un CTA final

Le contenu doit etre informatif, utile, et naturellement optimise pour le mot-cle "${keyword}".`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 8000,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: `API error: ${res.status} — ${err}` }, { status: 500 });
    }

    const result = await res.json();
    const content = result.content?.[0]?.text || "Pas de contenu genere";

    return NextResponse.json({ content, keyword });
  } catch (err) {
    return NextResponse.json({ error: `Erreur: ${err}` }, { status: 500 });
  }
}
