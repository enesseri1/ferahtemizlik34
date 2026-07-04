import { siteConfig } from "./site-config";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.domain}/assets/logo.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceRegions.map((region) => ({
      "@type": "City",
      name: region,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
    sameAs: [siteConfig.instagram],
    priceRange: "₺₺",
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceJsonLd(
  name: string,
  description: string,
  areaServed: readonly string[] = siteConfig.primaryRegions
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: areaServed.map((region) => ({
      "@type": "City",
      name: region,
    })),
  };
}
