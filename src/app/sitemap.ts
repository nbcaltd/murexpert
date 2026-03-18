import type { MetadataRoute } from 'next';
import * as fs from 'fs';
import * as path from 'path';

export const dynamic = 'force-static';

function getGeneratedSeoSlugs(): string[] {
  try {
    const dir = path.join(process.cwd(), 'src/data/seo-pages/content');
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => f.replace('.json', ''));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://murexpert.fr';

  const pillarPages = [
    'moisissure-mur',
    'salpetre',
    'humidite-maison',
    'diagnostic-humidite',
    'traitement-humidite',
    'remontee-capillaire',
  ];

  const newPages = [
    'moisissure-chambre',
    'moisissure-noire',
    'merule',
    'salpetre-cave',
    'odeur-humidite',
    'infiltration-eau-mur',
    'cave-humide',
    'moisissure-plafond',
    'a-propos',
    'contact',
  ];

  const pillarUrls = pillarPages.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const newPageUrls = newPages.map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Auto-generated SEO pages
  const seoPageUrls = getGeneratedSeoSlugs().map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/diagnostic-gratuit/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...pillarUrls,
    ...newPageUrls,
    ...seoPageUrls,
    { url: `${baseUrl}/mentions-legales/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/politique-de-confidentialite/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
