// SEO utility funkcije za optimizaciju sajta

/**
 * Generiše strukturirane podatke za lokalni biznis
 * @param businessInfo Informacije o biznisu
 * @returns JSON-LD string za lokalni biznis
 */
export function generateLocalBusinessSchema(businessInfo: any) {
  return {
    "@context": "https://schema.org",
    "@type": "ArchitecturalService",
    "name": businessInfo.name || "Macura Projekt",
    "description": businessInfo.description,
    "url": businessInfo.url || "https://arhitektamacura.rs",
    "telephone": businessInfo.telephone,
    "email": businessInfo.email || "info@arhitektamacura.rs",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.street,
      "addressLocality": businessInfo.address.locality,
      "addressRegion": businessInfo.address.region,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": businessInfo.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geo.latitude,
      "longitude": businessInfo.geo.longitude
    },
    "areaServed": businessInfo.areasServed,
    "openingHoursSpecification": businessInfo.openingHours
  };
}

/**
 * Generiše strukturirane podatke za FAQ sekciju
 * @param questions Niz pitanja i odgovora
 * @returns JSON-LD string za FAQ sekciju
 */
export function generateFAQSchema(questions: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
}

/**
 * Generiše strukturirane podatke za usluge
 * @param services Niz usluga
 * @returns JSON-LD string za usluge
 */
export function generateServicesSchema(services: Array<{name: string, description: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description
      }
    }))
  };
}

/**
 * Generiše optimizovane meta tagove za stranice
 * @param pageInfo Informacije o stranici
 * @returns Objekat sa meta tagovima
 */
export function generateMetaTags(pageInfo: {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image?: string;
}) {
  return {
    title: pageInfo.title,
    description: pageInfo.description,
    keywords: pageInfo.keywords,
    openGraph: {
      title: pageInfo.title,
      description: pageInfo.description,
      url: pageInfo.url,
      images: pageInfo.image ? [{ url: pageInfo.image }] : undefined,
      locale: 'sr_RS',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageInfo.title,
      description: pageInfo.description,
      images: pageInfo.image ? [pageInfo.image] : undefined,
    },
    alternates: {
      canonical: pageInfo.url,
    },
  };
}

/**
 * Generiše lokalizovane meta tagove za ciljne lokacije
 * @param location Lokacija
 * @returns Objekat sa lokalizovanim meta tagovima
 */
export function generateLocalizedMetaTags(location: string) {
  const locations: Record<string, {title: string, description: string, keywords: string}> = {
    'surcin': {
      title: 'Macura Projekt | Arhitektonski Studio Surčin - Projektovanje i Dizajn',
      description: 'Vodeći arhitektonski studio u Surčinu specijalizovan za projektovanje kuća, stanova i poslovnih prostora. Idejni projekti, glavni projekti i dizajn enterijera.',
      keywords: 'arhitekta Surčin, projektovanje kuća Surčin, dizajn enterijera Surčin, arhitektonski biro Surčin'
    },
    'novi-beograd': {
      title: 'Macura Projekt | Arhitektonski Studio Novi Beograd - Projektovanje i Dizajn',
      description: 'Vodeći arhitektonski studio na Novom Beogradu specijalizovan za projektovanje stambenih i poslovnih objekata. Luksuzni dizajn enterijera i energetska efikasnost.',
      keywords: 'arhitekta Novi Beograd, projektovanje stanova Novi Beograd, dizajn enterijera Novi Beograd, arhitektonski biro Novi Beograd'
    },
    'beograd': {
      title: 'Macura Projekt | Arhitektonski Studio Beograd - Projektovanje i Dizajn',
      description: 'Vodeći arhitektonski studio u Beogradu specijalizovan za projektovanje stambenih i poslovnih objekata. Idejni projekti, glavni projekti i dizajn enterijera.',
      keywords: 'arhitekta Beograd, projektovanje kuća Beograd, dizajn enterijera Beograd, arhitektonski biro Beograd'
    },
    'sumadija': {
      title: 'Macura Projekt | Arhitektonski Studio za Šumadiju - Projektovanje i Dizajn',
      description: 'Vodeći arhitektonski studio za Šumadiju specijalizovan za projektovanje kuća, vikendica i poslovnih prostora. Idejni projekti, glavni projekti i dizajn enterijera.',
      keywords: 'arhitekta Šumadija, projektovanje kuća Šumadija, dizajn enterijera Šumadija, arhitektonski biro Šumadija'
    }
  };
  
  return locations[location] || locations['beograd'];
}