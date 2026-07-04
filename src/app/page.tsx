import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { createPageMetadata } from "@/lib/metadata";
import { serviceJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Ana Sayfa",
  description:
    "Ferah Temizlik — İstanbul Anadolu Yakası'nın tüm ilçelerinde profesyonel halı yıkama, yerinde koltuk yıkama ve araç koltuk temizliği. Sancaktepe, Sultanbeyli, Pendik, Kartal, Çekmeköy ve daha fazlası.",
  path: "/",
});

const features = [
  {
    icon: "✨",
    title: "Profesyonel Temizlik",
    desc: "Anti-alerjik, çevre dostu ürünlerle endüstriyel ekipman kullanarak derinlemesine hijyenik temizlik.",
  },
  {
    icon: "🚚",
    title: "Ücretsiz Servis",
    desc: "Halı yıkama hizmetlerinde ücretsiz alım-teslim. Koltuk yıkamada ekip kapınıza gelir.",
  },
  {
    icon: "📅",
    title: "Kolay Rezervasyon",
    desc: "Aynı gün randevu mümkün. WhatsApp'tan fotoğraf gönderin, 15 dakikada fiyat alın.",
  },
];

const services = [
  {
    title: "Yerinde Koltuk Yıkama",
    description: "Chester, L koltuk, süet, nubuk, keten ve tüm koltuk tiplerinde yerinde profesyonel temizlik.",
    image: "/images/hizmetler/showcase-koltuk.jpg",
    href: "/hizmetlerimiz#koltuk",
    alt: "Yerinde koltuk yıkama hizmeti İstanbul Anadolu Yakası",
  },
  {
    title: "Halı Yıkama",
    description: "Tüm halı türlerinde ücretsiz alım-teslim ile profesyonel yıkama ve kurutma.",
    image: "/images/hizmetler/showcase-hali.jpg",
    href: "/hizmetlerimiz#hali",
    alt: "Profesyonel halı yıkama ücretsiz alım teslim",
  },
  {
    title: "Araç Koltuk Yıkama",
    description: "Otomobilinizin bulunduğu yerde derin temizlik. Deri ve kumaş koltuklar için özel bakım.",
    image: "/images/hizmetler/showcase-clio-koltuk.jpg",
    href: "/hizmetlerimiz#arac",
    alt: "Araç koltuk yıkama yerinde temizlik hizmeti",
  },
  {
    title: "Kuru Temizleme",
    description: "Süet, nubuk ve hassas kumaşlar için kimyasal solvent ile özel kuru temizleme.",
    image: "/images/hizmetler/showcase-kuru-temizleme.jpg",
    href: "/hizmetlerimiz#kuru",
    alt: "Kuru temizleme hizmeti hassas kumaşlar",
  },
];

const beforeAfter = [
  {
    image: "/images/ornek-calismalar/koltuk-turkuaz.png",
    title: "Koltuk Takımı",
    desc: "Derin lekeler tek seansta giderildi",
    alt: "Turkuaz koltuk takımı yıkama öncesi ve sonrası",
  },
  {
    image: "/images/ornek-calismalar/arac-koltuk.png",
    title: "Araç Koltuk",
    desc: "Kumaş ve deri profesyonel bakım",
    alt: "Araç koltuk yıkama öncesi ve sonrası",
  },
  {
    image: "/images/ornek-calismalar/koltuk-pembe.png",
    title: "Kadife Koltuk",
    desc: "Solmuş kumaş yeniden canlandı",
    alt: "Kadife koltuk temizleme öncesi ve sonrası",
  },
  {
    image: "/images/ornek-calismalar/koltuk-siyah.png",
    title: "Koltuk Takımı",
    desc: "Yüzey lekeleri tamamen temizlendi",
    alt: "Siyah koltuk takımı yıkama öncesi ve sonrası",
  },
];

const steps = [
  { num: "1", title: "Randevu Al", desc: "Telefon veya WhatsApp ile kolayca randevu oluşturun. Aynı gün müsaitlik sorgulayın." },
  { num: "2", title: "Ekip Kapınızda", desc: "Uzman ekibimiz belirlenen saatte adresinize gelir, yerinde değerlendirme yapar." },
  { num: "3", title: "Temizlik Tamamlandı", desc: "Profesyonel ekipmanlarla temizlenen koltuk veya halınız aynı gün kullanıma hazır." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd("Yerinde Koltuk Yıkama", "İstanbul Anadolu Yakası'nda yerinde profesyonel koltuk yıkama"),
          serviceJsonLd("Halı Yıkama", "Ücretsiz alım-teslim ile profesyonel halı yıkama hizmeti"),
        ]}
      />

      <Hero />

      {/* Öne çıkan özellikler */}
      <section className={`section ${styles.featuresSection}`} aria-label="Öne çıkan özellikler">
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

      {/* Hakkımızda */}
      <section className="section section-alt" aria-label="Hakkımızda">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className="section-title">Ferah Temizlik ile Profesyonel Temizlik</h2>
            <p className="section-subtitle">
              İstanbul Anadolu Yakası&apos;nın tüm ilçelerinde güvenilir halı ve koltuk yıkama
            </p>
          </div>
          <div className={styles.aboutTextFull}>
            <p>
              <strong>Ferah Temizlik</strong> olarak <strong>2023&apos;den bu yana</strong>{" "}
              İstanbul Anadolu Yakası&apos;nın <strong>tüm ilçelerinde</strong> halı yıkama,{" "}
              <strong>yerinde koltuk yıkama</strong>, araç koltuk yıkama ve kuru temizleme
              hizmetleri sunuyoruz. Kadıköy&apos;den Şile&apos;ye, Beykoz&apos;dan
              Tuzla&apos;ya kadar tüm Anadolu Yakası&apos;na güvenilir hizmet götürüyoruz.
            </p>
            <p>
              Koltuklar günlük yaşamda toz akarı, bakteri ve alerjenler biriktirir.
              Profesyonel koltuk yıkama hizmetimiz ile koltuklarınızı evinizden
              çıkarmadan, kapınıza kadar gelerek{" "}
              <strong>sıcak su ekstraksiyonu</strong> yöntemiyle derinlemesine
              temizliyoruz. Tüm işlem 1-2 saat içinde tamamlanır, koltuklar
              aynı gün kullanıma hazır hale gelir.
            </p>
            <p>
              Halı yıkamada halılarınızı adresinizden <strong>ücretsiz</strong>{" "}
              alıyor, modern tesislerimizde yıkıyor ve temiz halılarınızı kapınıza
              teslim ediyoruz.
            </p>
            <div className={styles.aboutBtnWrap}>
              <Link href="/hakkimizda" className="btn btn-primary">
                Hakkımızda Daha Fazla
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="section" aria-label="Hizmetlerimiz">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className="section-title">Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Halı, koltuk, araç koltuk ve kuru temizlikte profesyonel çözümler
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className={styles.centerLink}>
            <Link href="/hizmetlerimiz" className="btn btn-outline">
              Tüm Hizmetleri Gör →
            </Link>
          </div>
        </div>
      </section>

      {/* Öncesi & Sonrası */}
      <section className="section section-alt" aria-label="Örnek çalışmalar">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className="section-title">Öncesi &amp; Sonrası</h2>
            <p className="section-subtitle">
              Gerçek çalışmalarımızdan örnekler — görsele tıklayarak büyütebilirsiniz
            </p>
          </div>
          <BeforeAfterGallery items={beforeAfter} />
        </div>
      </section>

      {/* Nasıl Çalışıyoruz */}
      <section className="section" aria-label="Nasıl çalışıyoruz">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
            <p className="section-subtitle">3 kolay adımda profesyonel temizlik hizmeti</p>
          </div>
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
