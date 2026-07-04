import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Ana banner">
      <div className={styles.bg}>
        <Image
          src="/images/sliders/koltuk.webp"
          alt="Ferah Temizlik profesyonel koltuk yıkama hizmeti - temiz ve hijyenik ev ortamı"
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
          Halı ve Koltuk Yıkama Hizmetleri
        </h1>
        <p className={styles.subtitle}>
          {siteConfig.name} olarak İstanbul Anadolu Yakası&apos;nda yerinde koltuk yıkama, halı
          yıkama ve araç koltuk temizliği hizmeti sunuyoruz. Sancaktepe, Sultanbeyli, Pendik,
          Kartal ve Çekmeköy&apos;de profesyonel ekibimizle kapınıza kadar geliyoruz.
        </p>
        <div className={styles.actions}>
          <a href={siteConfig.phoneHref} className={`btn btn-primary ${styles.cta}`}>
            HEMEN RANDEVU AL
          </a>
          <a href="/hizmetlerimiz" className={`btn btn-outline ${styles.ctaOutline}`}>
            Hizmetlerimizi İncele
          </a>
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
