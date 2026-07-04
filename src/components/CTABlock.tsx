import { siteConfig } from "@/lib/site-config";
import styles from "./CTABlock.module.css";

interface CTABlockProps {
  title?: string;
  description?: string;
}

export default function CTABlock({
  title = "Hemen Randevu Alın",
  description = "İstanbul Anadolu Yakası'nda yerinde koltuk yıkama ve halı yıkama hizmeti için hemen bizi arayın. Ücretsiz keşif ve fiyat bilgisi.",
}: CTABlockProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className={styles.cta} aria-label="İletişim çağrısı">
      <div className="container">
        <div className={styles.inner}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
          </div>
          <div className={styles.buttons}>
            <a href={siteConfig.phoneHref} className="btn btn-primary">
              {siteConfig.phoneDisplay}
            </a>
            <a href={whatsappUrl} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
