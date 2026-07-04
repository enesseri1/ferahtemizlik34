import Breadcrumbs from "@/components/Breadcrumbs";
import CTABlock from "@/components/CTABlock";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import pricesData from "@/data/prices.json";
import styles from "./fiyat-listesi.module.css";

export const metadata = createPageMetadata({
  title: "Fiyat Listesi",
  description:
    "Ferah Temizlik güncel fiyat listesi. Halı yıkama, koltuk yıkama, perde yıkama ve yorgan battaniye yıkama fiyatları. Ücretsiz alım-teslim dahil.",
  path: "/fiyat-listesi",
});

function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export default function FiyatListesiPage() {
  const offerItems = pricesData.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      name: item.name,
      price: item.price,
      unit: cat.unit,
      category: cat.title,
    }))
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: siteConfig.domain },
            { name: "Fiyat Listesi", url: `${siteConfig.domain}/fiyat-listesi` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Ferah Temizlik Fiyat Listesi",
            description: "Halı yıkama, koltuk yıkama ve temizlik hizmetleri fiyat listesi",
            numberOfItems: offerItems.length,
            itemListElement: offerItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Offer",
                name: item.name,
                price: item.price,
                priceCurrency: "TRY",
                description: `${item.category} - ${item.unit} başına`,
              },
            })),
          },
        ]}
      />

      <header className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "Fiyat Listesi" }]} />
          <h1>Fiyat Listesi</h1>
          <p>Ferah Temizlik güncel hizmet fiyatları — Son güncelleme: {pricesData.lastUpdated}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.notice}>
            <strong>Önemli Not:</strong> Aşağıdaki fiyatlar genel bilgilendirme amaçlıdır. Kesin
            fiyatlandırma için ücretsiz keşif hizmetimizden yararlanabilirsiniz. Halı yıkama
            hizmetlerinde ücretsiz alım-teslim tüm fiyatlara dahildir.
          </div>

          {pricesData.categories.map((category) => (
            <div key={category.id} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <p className={styles.categoryMeta}>
                {category.items.length} hizmet — Birim: {category.unit}
              </p>
              <div className={styles.priceGrid}>
                {category.items.map((item) => (
                  <article key={item.name} className={`card ${styles.priceCard}`}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>{formatPrice(item.price)} ₺</p>
                    <span className={styles.itemUnit}>{category.unit}</span>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.extras}>
            <h2>Ek Hizmetler</h2>
            <div className="grid-4">
              {pricesData.extras.map((extra) => (
                <article key={extra.title} className={`card ${styles.extraCard}`}>
                  <h3>{extra.title}</h3>
                  <p>{extra.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Ücretsiz Fiyat Teklifi Alın"
        description="Kesin fiyatlandırma için bizi arayın veya WhatsApp üzerinden iletişime geçin."
      />
    </>
  );
}
