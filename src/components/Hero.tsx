import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import styles from "./Hero.module.css";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section className={styles.hero} aria-label="Ana banner">
      <div className={styles.bg}>
        <Image
          src="/images/hero/koltuk-hero.jpg"
          alt="Ferah Temizlik profesyonel koltuk yıkama hizmeti — İstanbul Anadolu Yakası"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>EVİNİZDEKİ HİJYEN, BİZİM İŞİMİZ</p>
        <h1 className={styles.title}>
          Halı ve Koltuk Yıkama<br className={styles.br} /> Hizmetleri
        </h1>
        <p className={styles.subtitle}>
          İstanbul Anadolu Yakası&apos;nda <strong>yerinde koltuk yıkama</strong>, halı yıkama
          ve araç koltuk temizliği. Sancaktepe, Sultanbeyli, Pendik, Kartal ve
          Çekmeköy&apos;de profesyonel ekibimiz kapınıza geliyor.
        </p>
        <div className={styles.actions}>
          <a href={siteConfig.phoneHref} className={`btn btn-primary ${styles.cta}`}>
            <PhoneIcon />
            Hemen Ara
          </a>
          <a
            href={whatsappUrl}
            className={`btn ${styles.ctaWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a href="/hizmetlerimiz" className={`btn ${styles.ctaOutline}`}>
            Hizmetleri İncele
          </a>
        </div>

        <div className={styles.badges}>
          <span className={styles.badge}>✓ Ücretsiz Keşif</span>
          <span className={styles.badge}>✓ Aynı Gün Hizmet</span>
          <span className={styles.badge}>✓ %100 Memnuniyet</span>
        </div>
      </div>

      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.816 11.816 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
