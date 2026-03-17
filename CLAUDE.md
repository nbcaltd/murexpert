# Murasec — Site Lead Gen Traitement Humidité

## Projet
Site de génération de leads pour le traitement de l'humidité en France (murasec.fr).
Cloné depuis le template CAEs (caes.es) puis entièrement rebrandé.

## Stack
- Next.js 16 + TypeScript + Tailwind CSS 4
- Static export pour Cloudflare Pages
- Instrument Serif (headings) + Inter (body)

## Couleurs
- Bleu Murasec : #2B5EA7 (bannière header, bouton tel, stats)
- Orange CTA : #E8952D (tous les boutons CTA)
- Beige chaud : #F7F4EF (beige-50), #F0EDE8 (beige-100)
- Texte : #1A1A1A (dark), #6B6B6B (muted)

## Pages (23 routes)
- / — Homepage
- /moisissure-mur/, /salpetre/, /humidite-maison/, /traitement-humidite/, /diagnostic-humidite/, /remontee-capillaire/ — Pages piliers
- /moisissure-chambre/, /moisissure-noire/, /merule/, /salpetre-cave/, /odeur-humidite/, /infiltration-eau-mur/, /cave-humide/, /moisissure-plafond/ — Pages problèmes spécifiques
- /diagnostic-gratuit/ — Formulaire de lead
- /mentions-legales/, /politique-de-confidentialite/ — Legal
- API: /api/contact (webhook Discord)

## Schema.org
Toutes les pages ont du JSON-LD : FAQPage, HowTo, Article, Service, LocalBusiness, Organization, AggregateRating, BreadcrumbList.

## Commandes
```bash
npm run dev -- -p 3001   # Dev server
npm run build            # Build static
```

## TODO
1. Déployer sur Cloudflare Pages + connecter murasec.fr
2. Créer pages villes (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes, Strasbourg...)
3. Affiner design (vérifier rendu visuel avec l'utilisateur)
4. Connecter Google Search Console
5. Backlinks : annuaires, PagesJaunes, Houzz, partenaires artisans

## Concurrents
- Actimur (DR 17, 8.7K trafic) — cible principale à dépasser
- MurHumide (DR 11, 2K trafic) — facilement dépassable
- Murprotec (DR 42, 9.2K trafic) — boss final

## Ne pas faire
- Ne JAMAIS modifier /Users/julien/Desktop/CAEs/ (site en production)
- Quand on duplique un template, reprendre le style visuel (layout, sections, animations)
