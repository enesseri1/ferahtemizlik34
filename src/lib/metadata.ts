import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMetaOptions): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const fullTitle =
    path === "/" ? `${siteConfig.name} | ${siteConfig.tagline}` : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.domain),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
