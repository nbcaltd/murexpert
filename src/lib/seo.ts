// ── Schema.org JSON-LD generators for MurExpert ──

const MURASEC = {
  name: "MurExpert",
  url: "https://murexpert.fr",
  telephone: "+33745881675",
  description: "Expert en diagnostic et traitement de l'humidité",
  logo: "https://murexpert.fr/logo-murexpert.png",
  areaServed: "France",
  priceRange: "€€",
};

// 1. Organization
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${MURASEC.url}/#organization`,
    name: MURASEC.name,
    url: MURASEC.url,
    logo: MURASEC.logo,
    image: MURASEC.logo,
    description: MURASEC.description,
    telephone: MURASEC.telephone,
    priceRange: MURASEC.priceRange,
    areaServed: {
      "@type": "Country",
      name: MURASEC.areaServed,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "127",
    },
    serviceType: [
      "Diagnostic humidité",
      "Traitement humidité",
      "Traitement moisissure",
      "Traitement salpêtre",
      "Traitement remontée capillaire",
      "Injection de résine",
      "Installation VMC/VMI",
      "Cuvelage cave",
      "Drainage périphérique",
    ],
  };
}

// 2. WebSite with SearchAction
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${MURASEC.url}/#website`,
    name: MURASEC.name,
    url: MURASEC.url,
    description: MURASEC.description,
    publisher: {
      "@id": `${MURASEC.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${MURASEC.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// 3. LocalBusiness for city pages
export function localBusinessJsonLd(city: string, address?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${MURASEC.name} ${city}`,
    url: `${MURASEC.url}/${city.toLowerCase().replace(/\s+/g, "-")}/`,
    telephone: MURASEC.telephone,
    description: `${MURASEC.description} à ${city}`,
    priceRange: MURASEC.priceRange,
    areaServed: {
      "@type": "City",
      name: city,
    },
    parentOrganization: {
      "@id": `${MURASEC.url}/#organization`,
    },
    ...(address ? { address: { "@type": "PostalAddress", addressLocality: city, addressCountry: "FR" } } : {}),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "127",
    },
  };
}

// 4. FAQPage
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// 5. HowTo
export function howToJsonLd(
  title: string,
  steps: { name: string; text: string }[],
  totalTime?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// 6. Article / BlogPosting
export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: author || MURASEC.name,
      url: MURASEC.url,
    },
    publisher: {
      "@type": "Organization",
      name: MURASEC.name,
      logo: {
        "@type": "ImageObject",
        url: MURASEC.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// 7. Service
export function serviceJsonLd({
  name,
  description,
  url,
  areaServed,
}: {
  name: string;
  description: string;
  url?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: MURASEC.name,
      url: MURASEC.url,
      telephone: MURASEC.telephone,
    },
    areaServed: {
      "@type": "Country",
      name: areaServed || MURASEC.areaServed,
    },
    ...(url ? { url } : {}),
  };
}

// 8. AggregateRating (standalone)
export function aggregateRatingJsonLd(ratingValue = "4.9", reviewCount = "127") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: MURASEC.name,
    url: MURASEC.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      bestRating: "5",
      ratingCount: reviewCount,
    },
  };
}

// 9. BreadcrumbList
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// 10. WebPage
export function webPageJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${MURASEC.url}/#website`,
    },
    about: {
      "@id": `${MURASEC.url}/#organization`,
    },
  };
}

// 11. MedicalWebPage
export function medicalWebPageJsonLd({
  name,
  description,
  url,
  lastReviewed,
}: {
  name: string;
  description: string;
  url: string;
  lastReviewed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url,
    ...(lastReviewed ? { lastReviewed } : {}),
    specialty: "Santé environnementale",
    about: {
      "@type": "MedicalCondition",
      name: "Effets de l'humidité et des moisissures sur la santé",
    },
  };
}

// 12. Product (for service pricing transparency)
export function productJsonLd({
  name,
  description,
  priceLow,
  priceHigh,
  unitText,
}: {
  name: string;
  description: string;
  priceLow: string;
  priceHigh: string;
  unitText?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Organization",
      name: MURASEC.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: priceLow,
      highPrice: priceHigh,
      ...(unitText ? { unitText } : {}),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "127",
    },
  };
}
