export interface SeoPageContent {
  slug: string;
  keyword: string;
  cluster: string;
  metadata: {
    title: string;
    description: string;
  };
  breadcrumbLabel: string;
  hero: {
    badge: string;
    h1: string;
    description: string;
    ctaText: string;
  };
  heroImage: {
    src: string;
    alt: string;
  };
  sections: SeoSection[];
  pricing?: { item: string; price: string }[];
  faq: { question: string; answer: string }[];
  howTo: {
    title: string;
    steps: { name: string; text: string }[];
    totalTime: string;
  };
  relatedLinks: { title: string; href: string }[];
  datePublished: string;
  dateModified: string;
}

export interface SeoSection {
  h2: string;
  intro?: string;
  paragraphs?: string[];
  subsections?: { h3: string; text: string }[];
  list?: string[];
  alert?: string;
}
