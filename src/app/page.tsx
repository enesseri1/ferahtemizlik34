import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";
import { createPageMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Ana Sayfa",
  description:
    "Ferah Temizlik - İstanbul Anadolu Yakası'nda profesyonel halı yıkama, yerinde koltuk yıkama ve araç koltuk temizliği. Sancaktepe, Sultanbeyli, Pendik, Kartal, Çekmeköy'de güvenilir temizlik hizmeti.",
  path: "/",
});

const features = [
  {
    icon: "✨",
    title: "Profesyonel Temizlik",
    desc: "Anti-alerjik, çevre dostu ürünlerle derinlemesine hijyenik temizlik.",
  },
  {
    icon: "🚚",
    title: "Ücretsiz Servis",
    desc: "Halı yıkama hizmetlerinde ücretsiz alım-teslim kapınıza kadar.",
  },
  {
    icon: "📅",
    title: "Kolay Rezervasyon",
    desc: "Esnek randevu sistemi ve %100 müşteri memnuniyeti garantisi.",
  },
];

const services = [
  {
    title: "Yerinde Koltuk Yıkama",
    description: "Ev ve iş yerinize gelerek koltuklarınızı profesyonel ekipmanlarla yıkıyoruz.",
    image: "/images/services/koltuk/19.webp",
    href: "/hizmetlerimiz#koltuk",
    alt: "Yerinde koltuk yıkama hizmeti - Ferah Temizlik",
  },
  {
    title: "Halı Yıkama",
    description: "Tüm halı türlerinde ücretsiz alım-teslim ile profesyonel halı yıkama.",
    image: "/images/services/hali/1.webp",
    href: "/hizmetlerimiz#hali",
    alt: "Profesyonel halı yıkama hizmeti - Ferah Temizlik",
  },
  {
    title: "Araç Koltuk Yıkama",
    description: "Otomobil koltuklarınızı bulunduğu yerde derinlemesine temizliyoruz.",
    image: "/images/services/koltuk/22.webp",
    href: "/hizmetlerimiz#arac",
    alt: "Araç koltuk yıkama hizmeti - Ferah Temizlik",
  },
  {
    title: "Perde Yıkama",
    description: "Stor, zebra ve tül perdeleriniz için profesyonel temizlik hizmeti.",
    image: "/images/services/perde/1.webp",
    href: "/hizmetlerimiz#perde",
    alt: "Perde yıkama hizmeti - Ferah Temizlik",
  },
];

const steps = [
  { num: "1", title: "Randevu Al", desc: "Telefon veya WhatsApp ile kolayca randevu oluşturun." },
  { num: "2", title: "Temizlik", desc: "Uzman ekibimiz adresinize gelerek temizliği gerçekleştirir." },
  { num: "3", title: "Hijyenin Keyfini Çıkar", desc: "Temiz ve hijyenik ortamınızın tadını çıkarın." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(
            "Yerinde Koltuk Yıkama",
            "İstanbul Anadolu Yakası'nda yerinde profesyonel koltuk yıkama hizmeti"
          ),
          serviceJsonLd(
            "Halı Yıkama",
            "Ücretsiz alım-teslim ile profesyonel halı yıkama hizmeti"
          ),
        ]}
      />

      <Hero />

      <section className="section" aria-label="Öne çıkan özellikler">
        <div className="container">
          <div className={styles.features}>
            {features.map((f) => (
              <article key={f.title} className={`card ${styles.featureCard}`}>
                <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
                <h2 className={styles.featureTitle}>{f.title}</h2>
                <p className={styles.featureDesc}>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-label="Hakkımızda">
        <div className="container">
          <h2 className="section-title">Ferah Temizlik ile Profesyonel Temizlik Hizmeti</h2>
          <p className="section-subtitle">
            İstanbul Anadolu Yakası&apos;nın güvenilir temizlik firması
          </p>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                <strong>Ferah Temizlik</strong> olarak İstanbul Anadolu Yakası&apos;nda halı yıkama,
                yerinde koltuk yıkama, araç koltuk yıkama ve kuru temizleme hizmetleri sunuyoruz.
                Özellikle <strong>Sancaktepe, Sultanbeyli, Pendik, Kartal ve Çekmeköy</strong>{" "}
                bölgelerinde yoğun olarak hizmet vermekteyiz.
              </p>
              <p>
                Koltuk yıkama, ev hijyeninin en kritik unsurlarından biridir. Koltuklar günlük
                kullanımda toz akarı, bakteri ve alerjen maddeler biriktirir. Profesyonel koltuk
                yıkama hizmetimiz ile koltuklarınızı evinizden çıkarmadan, kapınıza kadar gelerek
                derinlemesine temizliyoruz.
              </p>
              <p>
                Halı yıkama hizmetimizde halılarınızı adresinizden ücretsiz alıyor, modern
                tesislerimizde yıkıyor ve temiz halılarınızı kapınıza teslim ediyoruz. Tüm
                hizmetlerimizde çevre dostu deterjanlar ve ileri teknoloji makineler kullanılmaktadır.
              </p>
              <Link href="/hakkimizda" className="btn btn-primary">
                Daha Fazla Bilgi
              </Link>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <strong>5+</strong>
                <span>İlçede Hizmet</span>
              </div>
              <div className={styles.stat}>
                <strong>45+</strong>
                <span>Hizmet Çeşidi</span>
              </div>
              <div className={styles.stat}>
                <strong>%100</strong>
                <span>Memnuniyet</span>
              </div>
              <div className={styles.stat}>
                <strong>7/24</strong>
                <span>Randevu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Hizmetlerimiz">
        <div className="container">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Halı, koltuk, araç koltuk ve perde temizliğinde profesyonel çözümler
          </p>
          <div className="grid-4">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className={styles.centerLink}>
            <Link href="/hizmetlerimiz" className="btn btn-outline">
              Tüm Hizmetleri Gör
            </Link>
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.process}`} aria-label="Nasıl çalışıyoruz">
        <div className="container">
          <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
          <p className="section-subtitle">3 kolay adımda profesyonel temizlik hizmeti</p>
          <div className={styles.steps}>
            {steps.map((step) => (
              <article key={step.num} className={styles.step}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
