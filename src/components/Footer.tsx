import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import styles from "./Footer.module.css";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h2 className={styles.brandName}>{siteConfig.name}</h2>
            <p className={styles.brandDesc}>
              İstanbul Anadolu Yakası&apos;nda profesyonel halı yıkama, yerinde koltuk yıkama ve
              araç koltuk temizliği hizmetleri. Sancaktepe, Sultanbeyli, Pendik, Kartal ve
              Çekmeköy&apos;de güvenilir temizlik çözümleri.
            </p>
          </div>

          <div>
            <h3 className={styles.colTitle}>Hızlı Bağlantılar</h3>
            <ul className={styles.links}>
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Hizmet Bölgeleri</h3>
            <ul className={styles.regions}>
              {siteConfig.primaryRegions.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>İletişim</h3>
            <ul className={styles.contact}>
              <li>
                <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                  @{siteConfig.instagramHandle}
                </a>
              </li>
              <li>{siteConfig.workingHours}</li>
            </ul>
            <div className={styles.ctaRow}>
              <a href={siteConfig.phoneHref} className="btn btn-primary">
                Hemen Ara
              </a>
              <a href={whatsappUrl} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <p>{siteConfig.address.region}, {siteConfig.address.city}</p>
        </div>
      </div>
    </footer>
  );
}
