import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABlock from "@/components/CTABlock";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import styles from "./hizmetlerimiz.module.css";

export const metadata = createPageMetadata({
  title: "Hizmetlerimiz",
  description:
    "Ferah Temizlik hizmetleri: yerinde koltuk yıkama, halı yıkama, araç koltuk yıkama, kuru temizleme ve perde yıkama. İstanbul Anadolu Yakası'nda profesyonel temizlik.",
  path: "/hizmetlerimiz",
});

const services = [
  {
    id: "koltuk",
    title: "Yerinde Koltuk Yıkama",
    image: "/images/hizmetler/showcase-koltuk.jpg",
    alt: "Yerinde koltuk yıkama hizmeti İstanbul Anadolu Yakası — Ferah Temizlik",
    waMessage: "Merhaba, Yerinde Koltuk Yıkama hizmetiniz hakkında bilgi almak istiyorum.",
    content: [
      "Ferah Temizlik olarak İstanbul Anadolu Yakası'nda yerinde koltuk yıkama hizmeti sunuyoruz. Koltuklarınızı evinizden veya iş yerinizden çıkarmadan, profesyonel ekipmanlarımızla kapınıza kadar gelerek temizliyoruz.",
      "Chester koltuk, L koltuk, nubuk koltuk, süet koltuk, keten koltuk, tay tüyü koltuk, berjer, çekyat ve puf gibi tüm koltuk türlerinde uzman ekibimizle hizmet veriyoruz. Sıcak su ekstraksiyonu teknolojisi ile koltuklarınızdaki bakteri, toz akarı ve lekeleri %99 oranında elimine ediyoruz.",
      "Sancaktepe koltuk yıkama, Sultanbeyli koltuk yıkama, Pendik koltuk yıkama, Kartal koltuk yıkama ve Çekmeköy koltuk yıkama hizmetlerimizle bölgenizde hızlı ve güvenilir temizlik sağlıyoruz.",
    ],
    items: ["Chester Koltuk Takımı", "L Koltuk Takımı", "Nubuk Koltuk", "Süet Koltuk", "Berjer", "Çekyat", "Yatak", "Puf"],
  },
  {
    id: "hali",
    title: "Halı Yıkama",
    image: "/images/hizmetler/showcase-hali.jpg",
    alt: "Profesyonel halı yıkama hizmeti ücretsiz alım teslim — Ferah Temizlik",
    waMessage: "Merhaba, Halı Yıkama hizmetiniz hakkında bilgi almak istiyorum.",
    content: [
      "Halı yıkama hizmetimizde halılarınızı adresinizden ücretsiz olarak alıyor, modern yıkama tesislerimizde derinlemesine temizliyor ve kuruttuktan sonra kapınıza teslim ediyoruz.",
      "Makine halısı, yün halı, el dokuma halı, shaggy halı, akrilik halı, viskon halı, bambu halı, Anadolu kilimi ve İran halısı gibi tüm halı türlerinde profesyonel temizlik yapılmaktadır.",
      "Halı yıkama sürecimiz: toz alma, leke ön işlemi, özel halı yıkama makinelerinde yıkama, santrifüj kurutma ve kalite kontrol adımlarından oluşur.",
    ],
    items: ["Makine Halıları", "Yün Halı (El Dokuma)", "Shaggy Halı", "Akrilik Halı", "Anadolu Kilimi", "Viskon Halı", "Bambu Halı"],
  },
  {
    id: "arac",
    title: "Araç Koltuk Yıkama",
    image: "/images/hizmetler/showcase-clio-koltuk.jpg",
    alt: "Araç koltuk yıkama yerinde temizlik hizmeti — Ferah Temizlik",
    waMessage: "Merhaba, Araç Koltuk Yıkama hizmetiniz hakkında bilgi almak istiyorum.",
    content: [
      "Araç koltuk yıkama hizmetimiz ile otomobilinizin koltuklarını bulunduğu yerde profesyonel olarak temizliyoruz. Deri ve kumaş araç koltukları için özel temizlik ürünleri kullanılmaktadır.",
      "Araç iç mekanında biriken yiyecek lekeleri, sigara dumanı, ter ve bakteriler derinlemesine temizlenir. Özellikle çocuklu aileler ve evcil hayvan sahipleri için düzenli araç koltuk temizliği büyük önem taşır.",
      "İstanbul Anadolu Yakası'nın tüm ilçelerinde mobil araç koltuk yıkama ekibimizle hizmet vermekteyiz.",
    ],
    items: ["Deri Koltuk Temizliği", "Kumaş Koltuk Temizliği", "Alcantara Bakımı", "Buharlı Derin Temizlik", "Leke Çıkarma"],
  },
  {
    id: "kuru",
    title: "Kuru Temizleme",
    image: "/images/hizmetler/showcase-kuru-temizleme.jpg",
    alt: "Kuru temizleme hizmeti hassas kumaşlar — Ferah Temizlik",
    waMessage: "Merhaba, Kuru Temizleme hizmetiniz hakkında bilgi almak istiyorum.",
    content: [
      "Kuru temizleme hizmetimiz ile süet, nubuk gibi hassas kumaşlı koltuklar ile mont, kaban, elbise ve ev tekstiline kadar geniş bir yelpazede profesyonel temizlik sunuyoruz.",
      "Her kumaş türü için uygun solvent ve temizlik yöntemi kullanılarak eşyalarınızın formu ve rengi korunur. Ücretsiz alım-teslim seçeneği mevcuttur.",
    ],
    items: ["Süet Koltuk", "Nubuk Koltuk", "Mont ve Kaban", "Takım Elbise", "Ev Tekstili"],
  },
  {
    id: "perde",
    title: "Perde Yıkama",
    image: "/images/hizmetler/showcase-perde.jpg",
    alt: "Stor perde yıkama ve temizlik hizmeti — Ferah Temizlik",
    waMessage: "Merhaba, Perde Yıkama hizmetiniz hakkında bilgi almak istiyorum.",
    content: [
      "Perde yıkama hizmetimiz kapsamında düz stor perde, zebra perde, güneşlik stor perde ve tül stor perdeleriniz profesyonel olarak temizlenmektedir.",
      "Perdeleriniz adresinizden alınır, özel perde yıkama makinelerinde temizlenir ve ütülenerek kapınıza teslim edilir.",
    ],
    items: ["Düz Stor Perde", "Zebra Perde", "Güneşlik Stor", "Tül Stor"],
  },
];

export default function HizmetlerimizPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: siteConfig.domain },
            { name: "Hizmetlerimiz", url: `${siteConfig.domain}/hizmetlerimiz` },
          ]),
          ...services.map((s) => serviceJsonLd(s.title, s.content[0])),
        ]}
      />

      <header className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "Hizmetlerimiz" }]} />
          <h1>Hizmetlerimiz</h1>
          <p>
            İstanbul Anadolu Yakası&apos;nda halı yıkama, yerinde koltuk yıkama, araç koltuk
            yıkama, kuru temizleme ve perde yıkama hizmetleri
          </p>
        </div>
      </header>

      <div className="section">
        <div className="container">
          {services.map((service, index) => {
            const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(service.waMessage)}`;
            return (
              <article
                key={service.id}
                id={service.id}
                className={`${styles.serviceBlock} ${index % 2 === 1 ? styles.reverse : ""}`}
              >
                {/* Tıklanabilir görsel */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceImageLink}
                  aria-label={`${service.title} için WhatsApp'tan bilgi al`}
                >
                  <div className={styles.serviceImage}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width:768px) 100vw, 500px"
                      className={styles.image}
                    />
                    <span className={styles.waOverlay} aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.816 11.816 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp&apos;tan Bilgi Al
                    </span>
                  </div>
                </a>

                <div className={styles.serviceContent}>
                  {/* Tıklanabilir başlık */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.serviceTitleLink}
                    aria-label={`${service.title} için WhatsApp'tan bilgi al`}
                  >
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                  </a>

                  {service.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <ul className={styles.serviceList}>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waBtn}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.816 11.816 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {service.title} için Bilgi Al
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <CTABlock
        title="Hizmetlerimiz Hakkında Bilgi Alın"
        description="Yerinde koltuk yıkama, halı yıkama ve diğer temizlik hizmetlerimiz için ücretsiz keşif randevusu alın."
      />
    </>
  );
}
