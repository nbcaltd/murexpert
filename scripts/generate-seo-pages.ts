import Anthropic from "@anthropic-ai/sdk";
import * as fs from "fs";
import * as path from "path";

// ── Config ──
const PLANNING_PATH = path.join(process.cwd(), "src/data/seo-pages/planning.json");
const CONTENT_DIR = path.join(process.cwd(), "src/data/seo-pages/content");
const EXISTING_PAGES_DIR = path.join(process.cwd(), "src/app");

interface PlanningEntry {
  id: string;
  keyword: string;
  cluster: string;
  volume: number;
  kd: number;
  status: string;
  priority: string;
  targetUrl: string;
  type: string;
  notes: string;
  targetDate: string;
  createdAt: string;
  updatedAt: string;
}

// ── Existing static pages to skip ──
function getExistingStaticSlugs(): Set<string> {
  const slugs = new Set<string>();
  try {
    const entries = fs.readdirSync(EXISTING_PAGES_DIR, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith("[") && !entry.name.startsWith("api")) {
        const pagePath = path.join(EXISTING_PAGES_DIR, entry.name, "page.tsx");
        if (fs.existsSync(pagePath)) {
          slugs.add(entry.name);
        }
      }
    }
  } catch {
    // ignore
  }
  return slugs;
}

// ── Existing generated content to skip ──
function getExistingContentSlugs(): Set<string> {
  const slugs = new Set<string>();
  try {
    const files = fs.readdirSync(CONTENT_DIR);
    for (const file of files) {
      if (file.endsWith(".json")) {
        slugs.add(file.replace(".json", ""));
      }
    }
  } catch {
    // ignore
  }
  return slugs;
}

// ── Related links based on cluster ──
const CLUSTER_LINKS: Record<string, { title: string; href: string }[]> = {
  moisissure: [
    { title: "Moisissure sur les murs", href: "/moisissure-mur/" },
    { title: "Moisissure chambre", href: "/moisissure-chambre/" },
    { title: "Moisissure noire", href: "/moisissure-noire/" },
    { title: "Moisissure plafond", href: "/moisissure-plafond/" },
  ],
  salpetre: [
    { title: "Salpetre sur les murs", href: "/salpetre/" },
    { title: "Salpetre en cave", href: "/salpetre-cave/" },
  ],
  remontee_capillaire: [
    { title: "Remontee capillaire", href: "/remontee-capillaire/" },
  ],
  infiltration: [
    { title: "Infiltration d'eau dans les murs", href: "/infiltration-eau-mur/" },
  ],
  cave_sous_sol: [
    { title: "Cave humide", href: "/cave-humide/" },
    { title: "Salpetre en cave", href: "/salpetre-cave/" },
  ],
  merule: [
    { title: "Merule", href: "/merule/" },
  ],
  odeur: [
    { title: "Odeur d'humidite", href: "/odeur-humidite/" },
  ],
};

const DEFAULT_LINKS = [
  { title: "Traitement humidite", href: "/traitement-humidite/" },
  { title: "Diagnostic humidite", href: "/diagnostic-humidite/" },
  { title: "Humidite maison", href: "/humidite-maison/" },
  { title: "Diagnostic gratuit", href: "/diagnostic-gratuit/" },
];

function getRelatedLinks(cluster: string, currentSlug: string): { title: string; href: string }[] {
  const clusterLinks = CLUSTER_LINKS[cluster] || [];
  const allLinks = [...clusterLinks, ...DEFAULT_LINKS];
  // Remove self-referencing links and dedupe
  const seen = new Set<string>();
  return allLinks.filter((link) => {
    const slug = link.href.replace(/^\/|\/$/g, "");
    if (slug === currentSlug || seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  }).slice(0, 6);
}

// ── Image mapping by cluster ──
const CLUSTER_IMAGES: Record<string, { src: string; alt: string }> = {
  condensation: { src: "/images/condensation.jpg", alt: "Condensation sur un mur — probleme d'humidite" },
  moisissure: { src: "/images/moisissure.jpg", alt: "Moisissure sur un mur interieur" },
  salpetre: { src: "/images/salpetre.jpg", alt: "Salpetre sur un mur en pierre" },
  infiltration: { src: "/images/infiltration.jpg", alt: "Infiltration d'eau dans un mur" },
  remontee_capillaire: { src: "/images/remontee-capillaire.jpg", alt: "Remontee capillaire sur un mur" },
  injection: { src: "/images/injection-resine.jpg", alt: "Injection de resine dans un mur" },
  cave_sous_sol: { src: "/images/cave-humide.jpg", alt: "Cave humide avec traces d'humidite" },
  merule: { src: "/images/moisissure-new.jpg", alt: "Merule sur une structure en bois" },
  drainage: { src: "/images/drainage.jpg", alt: "Drainage peripherique d'une maison" },
  humidite_generale: { src: "/images/hero-murasec.jpg", alt: "Probleme d'humidite dans une maison" },
  diagnostic: { src: "/images/diagnostic.jpg", alt: "Diagnostic professionnel d'humidite" },
  odeur: { src: "/images/moisissure.jpg", alt: "Moisissure causant des odeurs d'humidite" },
  peinture: { src: "/images/maison-saine.jpg", alt: "Mur traite avec peinture anti-humidite" },
  cuvelage: { src: "/images/cave-humide.jpg", alt: "Cuvelage d'une cave humide" },
  traitement: { src: "/images/assechement.jpg", alt: "Traitement professionnel de l'humidite" },
  ville: { src: "/images/hero-murasec.jpg", alt: "Traitement humidite en France" },
};

// ── Claude API call ──
async function generatePageContent(
  client: Anthropic,
  entry: PlanningEntry
): Promise<string> {
  const slug = entry.targetUrl.replace(/^\/|\/$/g, "");
  const relatedLinks = getRelatedLinks(entry.cluster, slug);
  const image = CLUSTER_IMAGES[entry.cluster] || CLUSTER_IMAGES.humidite_generale;
  const today = new Date().toISOString().split("T")[0];

  const systemPrompt = `Tu es un expert SEO francais specialise dans le traitement de l'humidite. Tu rediges du contenu pour le site murexpert.fr.

REGLES STRICTES :
- Redige en francais. Utilise des apostrophes normales (') dans le texte, JAMAIS d'entites HTML comme &amp;apos; ou &amp;#39;.
- Ton professionnel mais accessible, format long (1500-2000 mots de contenu)
- Le contenu doit etre UNIQUE, informatif, utile — pas du contenu generique
- Integre naturellement le mot-cle "${entry.keyword}" et ses variantes
- Reponds a l'intention de recherche de l'utilisateur
- NE PAS inventer de statistiques ou chiffres sans fondement
- Les prix doivent etre realistes pour le marche francais

Tu dois retourner UNIQUEMENT du JSON valide, sans markdown, sans backticks, sans commentaires.`;

  const userPrompt = `Genere le contenu JSON pour une page SEO sur "${entry.keyword}" (cluster: ${entry.cluster}, volume: ${entry.volume}/mois).

Le JSON doit suivre EXACTEMENT cette structure :
{
  "slug": "${slug}",
  "keyword": "${entry.keyword}",
  "cluster": "${entry.cluster}",
  "metadata": {
    "title": "Titre SEO < 60 chars incluant le mot-cle",
    "description": "Meta description < 160 chars naturelle avec mot-cle"
  },
  "breadcrumbLabel": "Label court pour le breadcrumb",
  "hero": {
    "badge": "Badge court (ex: Probleme d'humidite, Solution pro, Guide expert)",
    "h1": "H1 accrocheur avec mot-cle principal, different du title",
    "description": "2-3 phrases decrivant le probleme/sujet et pourquoi c'est important",
    "ctaText": "Texte du bouton CTA (ex: Diagnostic gratuit moisissure)"
  },
  "heroImage": ${JSON.stringify(image)},
  "sections": [
    {
      "h2": "Qu'est-ce que [sujet] ?",
      "paragraphs": ["Paragraphe 1 detaille...", "Paragraphe 2...", "Paragraphe 3..."]
    },
    {
      "h2": "Les causes de [sujet]",
      "intro": "Introduction aux causes",
      "subsections": [
        { "h3": "Cause 1", "text": "Explication detaillee..." },
        { "h3": "Cause 2", "text": "Explication detaillee..." },
        { "h3": "Cause 3", "text": "Explication detaillee..." }
      ]
    },
    {
      "h2": "Les dangers / consequences",
      "alert": "Message d'alerte important (1 phrase)",
      "intro": "Paragraphe d'introduction",
      "list": ["Danger 1", "Danger 2", "Danger 3", "Danger 4", "Danger 5"]
    },
    {
      "h2": "Comment traiter / resoudre [sujet]",
      "intro": "Introduction au traitement",
      "subsections": [
        { "h3": "Etape 1 : ...", "text": "Details..." },
        { "h3": "Etape 2 : ...", "text": "Details..." },
        { "h3": "Etape 3 : ...", "text": "Details..." }
      ],
      "list": ["Avantage 1 du traitement", "Avantage 2", "Avantage 3"]
    },
    {
      "h2": "Prix du traitement / Combien ca coute",
      "intro": "Introduction aux prix"
    }
  ],
  "pricing": [
    { "item": "Type de traitement 1", "price": "XX - XX EUR/m2" },
    { "item": "Type de traitement 2", "price": "XX - XX EUR" }
  ],
  "faq": [
    { "question": "Question 1 ?", "answer": "Reponse detaillee 1..." },
    { "question": "Question 2 ?", "answer": "Reponse detaillee 2..." },
    { "question": "Question 3 ?", "answer": "Reponse detaillee 3..." },
    { "question": "Question 4 ?", "answer": "Reponse detaillee 4..." },
    { "question": "Question 5 ?", "answer": "Reponse detaillee 5..." }
  ],
  "howTo": {
    "title": "Comment traiter [sujet]",
    "steps": [
      { "name": "Etape 1", "text": "Description..." },
      { "name": "Etape 2", "text": "Description..." },
      { "name": "Etape 3", "text": "Description..." },
      { "name": "Etape 4", "text": "Description..." }
    ],
    "totalTime": "P3D"
  },
  "relatedLinks": ${JSON.stringify(relatedLinks)},
  "datePublished": "${today}",
  "dateModified": "${today}"
}

IMPORTANT : Retourne UNIQUEMENT le JSON, pas de texte autour.`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";
  return text;
}

// ── Main ──
async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY is not set");
    process.exit(1);
  }

  // Read planning
  if (!fs.existsSync(PLANNING_PATH)) {
    console.error(`Planning file not found: ${PLANNING_PATH}`);
    process.exit(1);
  }

  const planning: PlanningEntry[] = JSON.parse(fs.readFileSync(PLANNING_PATH, "utf-8"));
  const today = new Date().toISOString().split("T")[0];

  // Get existing pages to skip
  const existingStatic = getExistingStaticSlugs();
  const existingContent = getExistingContentSlugs();

  // Filter entries due today or earlier that are still planned
  const due = planning.filter((entry) => {
    if (entry.status !== "planned") return false;
    if (entry.targetDate > today) return false;
    const slug = entry.targetUrl.replace(/^\/|\/$/g, "");
    if (existingStatic.has(slug)) {
      console.log(`  skip: ${slug} (static page exists)`);
      return false;
    }
    if (existingContent.has(slug)) {
      console.log(`  skip: ${slug} (content already generated)`);
      return false;
    }
    return true;
  });

  if (due.length === 0) {
    console.log("No pages due for generation today.");
    return;
  }

  console.log(`Found ${due.length} page(s) to generate:`);
  due.forEach((e) => console.log(`  - ${e.keyword} → ${e.targetUrl} (${e.targetDate})`));

  // Ensure content dir exists
  fs.mkdirSync(CONTENT_DIR, { recursive: true });

  const client = new Anthropic({ apiKey });
  let generated = 0;

  for (const entry of due) {
    const slug = entry.targetUrl.replace(/^\/|\/$/g, "");
    console.log(`\nGenerating: ${entry.keyword} (${slug})...`);

    try {
      const rawJson = await generatePageContent(client, entry);

      // Parse and validate JSON — clean HTML entities that Claude sometimes adds
      const cleaned = rawJson
        .replace(/^```json?\s*/, "")
        .replace(/```\s*$/, "")
        .replace(/&apos;/g, "'")
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .trim();
      const content = JSON.parse(cleaned);

      // Validate required fields
      if (!content.metadata?.title || !content.hero?.h1 || !content.faq?.length) {
        console.error(`  Invalid content for ${slug}: missing required fields`);
        continue;
      }

      // Write content file
      const outputPath = path.join(CONTENT_DIR, `${slug}.json`);
      fs.writeFileSync(outputPath, JSON.stringify(content, null, 2), "utf-8");
      console.log(`  Saved: ${outputPath}`);

      // Update planning status
      const idx = planning.findIndex((p) => p.id === entry.id);
      if (idx !== -1) {
        planning[idx].status = "published";
        planning[idx].updatedAt = new Date().toISOString();
      }

      generated++;

      // Rate limit: wait 2s between API calls
      if (due.indexOf(entry) < due.length - 1) {
        await new Promise((r) => setTimeout(r, 2000));
      }
    } catch (err) {
      console.error(`  Error generating ${slug}:`, err);
    }
  }

  // Save updated planning
  fs.writeFileSync(PLANNING_PATH, JSON.stringify(planning, null, 2), "utf-8");
  console.log(`\nDone! Generated ${generated}/${due.length} pages.`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
