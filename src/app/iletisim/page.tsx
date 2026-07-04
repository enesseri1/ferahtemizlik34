import Breadcrumbs from "@/components/Breadcrumbs";
import CTABlock from "@/components/CTABlock";
import MapWrapper from "@/components/MapWrapper";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import styles from "./iletisim.module.css";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Ferah Temizlik iletişim bilgileri. Sancaktepe, Sultanbeyli, Pendik, Kartal, Çekmeköy halı ve koltuk yıkama hizmeti için bize ulaşın.",
  path: "/iletisim",
});

export default function IletisimPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", url: siteConfig.domain },
          { name: "İletişim", url: `${siteConfig.domain}/iletisim` },
        ])}
      />

      <header className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]} />
          <h1>İletişim</h1>
          <p>Halı yıkama ve koltuk yıkama hizmeti için bize ulaşın</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2>İletişim Bilgileri</h2>
              <ul className={styles.contactList}>
                <li>
                  <strong>Telefon</strong>
                  <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
                </li>
                <li>
                  <strong>E-posta</strong>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <strong>Çalışma Saatleri</strong>
                  <span>{siteConfig.workingHours}</span>
                </li>
                <li>
                  <strong>Hizmet Bölgesi</strong>
                  <span>İstanbul Anadolu Yakası</span>
                </li>
              </ul>

              <div className={styles.buttons}>
                <a href={siteConfig.phoneHref} className="btn btn-primary">
                  Hemen Ara
                </a>
                <a href={whatsappUrl} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>

            <div className={styles.mapSection}>
              <h2>Hizmet Bölgelerimiz</h2>
              <p className={styles.mapDesc}>
                Aşağıdaki haritada kırmızı çizgilerle işaretli bölgelerde aktif olarak hizmet
                vermekteyiz. Haritayı sayfa içinde hareket ettirebilir ve yakınlaştırabilirsiniz.
              </p>
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
