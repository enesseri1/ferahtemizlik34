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
    image: "/images/sliders/koltuk.webp",
    alt: "Yerinde koltuk yıkama hizmeti İstanbul Anadolu Yakası",
    content: [
      "Ferah Temizlik olarak İstanbul Anadolu Yakası'nda yerinde koltuk yıkama hizmeti sunuyoruz. Koltuklarınızı evinizden veya iş yerinizden çıkarmadan, profesyonel ekipmanlarımızla kapınıza kadar gelerek temizliyoruz.",
      "Chester koltuk, L koltuk, nubuk koltuk, süet koltuk, keten koltuk, tay tüyü koltuk, berjer, çekyat ve puf gibi tüm koltuk türlerinde uzman ekibimizle hizmet veriyoruz. Buharlı derin temizlik teknolojisi ile koltuklarınızdaki bakteri, toz akarı ve lekeleri %99 oranında elimine ediyoruz.",
      "Sancaktepe koltuk yıkama, Sultanbeyli koltuk yıkama, Pendik koltuk yıkama, Kartal koltuk yıkama ve Çekmeköy koltuk yıkama hizmetlerimizle bölgenizde hızlı ve güvenilir temizlik sağlıyoruz.",
    ],
    items: ["Chester Koltuk Takımı", "L Koltuk Takımı", "Nubuk Koltuk", "Süet Koltuk", "Berjer", "Çekyat", "Yatak"],
  },
  {
    id: "hali",
    title: "Halı Yıkama",
    image: "/images/sliders/hali.webp",
    alt: "Profesyonel halı yıkama hizmeti ücretsiz alım teslim",
    content: [
      "Halı yıkama hizmetimizde halılarınızı adresinizden ücretsiz olarak alıyor, modern yıkama tesislerimizde derinlemesine temizliyor ve kuruttuktan sonra kapınıza teslim ediyoruz.",
      "Makine halısı, yün halı, el dokuma halı, shaggy halı, akrilik halı, viskon halı, bambu halı, Anadolu kilimi ve İran halısı gibi tüm halı türlerinde profesyonel temizlik yapılmaktadır.",
      "Halı yıkama sürecimiz: toz alma, leke ön işlemi, özel halı yıkama makinelerinde yıkama, santrifüj kurutma ve kalite kontrol adımlarından oluşur.",
    ],
    items: ["Makine Halıları", "Yün Halı", "Shaggy Halı", "El Dokuma Halı", "Anadolu Kilimi", "Viskon Halı"],
  },
  {
    id: "arac",
    title: "Araç Koltuk Yıkama",
    image: "/images/services/koltuk/22.webp",
    alt: "Araç koltuk yıkama yerinde temizlik hizmeti",
    content: [
      "Araç koltuk yıkama hizmetimiz ile otomobilinizin koltuklarını bulunduğu yerde profesyonel olarak temizliyoruz. Deri ve kumaş araç koltukları için özel temizlik ürünleri kullanılmaktadır.",
      "Araç iç mekanında biriken yiyecek lekeleri, sigara dumanı, ter ve bakteriler derinlemesine temizlenir. Özellikle çocuklu aileler ve evcil hayvan sahipleri için düzenli araç koltuk temizliği büyük önem taşır.",
      "Pendik, Kartal, Sancaktepe, Sultanbeyli ve Çekmeköy'de mobil araç koltuk yıkama ekibimizle hizmet vermekteyiz.",
    ],
    items: ["Deri Koltuk Temizliği", "Kumaş Koltuk Temizliği", "Buharlı Derin Temizlik", "Leke Çıkarma"],
  },
  {
    id: "kuru",
    title: "Kuru Temizleme",
    image: "/images/services/yorgan/1.webp",
    alt: "Kuru temizleme hizmeti Ferah Temizlik",
    content: [
      "Kuru temizleme hizmetimiz ile hassas kumaşlardan mont ve kabanlara, elbise ve takım elbiselerden ev tekstiline kadar geniş bir yelpazede profesyonel temizlik sunuyoruz.",
      "Her kumaş türü için uygun solvent ve temizlik yöntemi kullanılarak giysilerinizin formu ve rengi korunur. Ücretsiz alım-teslim seçeneği mevcuttur.",
    ],
    items: ["Mont ve Kaban", "Takım Elbise", "Elbise", "Ev Tekstili"],
  },
  {
    id: "perde",
    title: "Perde Yıkama",
    image: "/images/sliders/perde.webp",
    alt: "Stor perde yıkama ve temizlik hizmeti",
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
            İstanbul Anadolu Yakası&apos;nda halı yıkama, yerinde koltuk yıkama, araç koltuk yıkama,
            kuru temizleme ve perde yıkama hizmetleri
          </p>
        </div>
      </header>

      <div className="section">
        <div className="container">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`${styles.serviceBlock} ${index % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 500px"
                  className={styles.image}
                />
              </div>
              <div className={styles.serviceContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                {service.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <ul className={styles.serviceList}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CTABlock
        title="Hizmetlerimiz Hakkında Bilgi Alın"
        description="Yerinde koltuk yıkama, halı yıkama ve diğer temizlik hizmetlerimiz için ücretsiz keşif randevusu alın."
      />
    </>
  );
}
