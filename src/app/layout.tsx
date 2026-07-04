import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { localBusinessJsonLd } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "İstanbul Anadolu Yakası'nda profesyonel halı yıkama, yerinde koltuk yıkama ve araç koltuk temizliği. Sancaktepe, Sultanbeyli, Pendik, Kartal, Çekmeköy.",
  keywords: [
    "halı yıkama",
    "koltuk yıkama",
    "yerinde koltuk yıkama",
    "Sancaktepe halı yıkama",
    "Sultanbeyli koltuk yıkama",
    "Pendik temizlik",
    "Kartal halı yıkama",
    "Çekmeköy koltuk yıkama",
    "araç koltuk yıkama",
    "İstanbul Anadolu Yakası temizlik",
  ],
  openGraph: {
    locale: "tr_TR",
    type: "website",
    siteName: siteConfig.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <JsonLd data={localBusinessJsonLd()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
