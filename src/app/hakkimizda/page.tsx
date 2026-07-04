import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABlock from "@/components/CTABlock";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import styles from "./hakkimizda.module.css";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description:
    "Ferah Temizlik hakkında bilgi. İstanbul Anadolu Yakası'nda profesyonel halı yıkama ve yerinde koltuk yıkama hizmeti veren güvenilir temizlik firması.",
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", url: siteConfig.domain },
          { name: "Hakkımızda", url: `${siteConfig.domain}/hakkimizda` },
        ])}
      />

      <header className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "Hakkımızda" }]} />
          <h1>Hakkımızda</h1>
          <p>İstanbul Anadolu Yakası&apos;nın güvenilir temizlik partneri</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2>Ferah Temizlik Kimdir?</h2>
              <p>
                <strong>Ferah Temizlik</strong>, İstanbul Anadolu Yakası&apos;nda halı yıkama,
                yerinde koltuk yıkama, araç koltuk yıkama, kuru temizleme ve perde yıkama
                hizmetleri sunan profesyonel bir temizlik firmasıdır. Müşteri memnuniyetini
                ön planda tutarak, modern ekipmanlar ve çevre dostu temizlik ürünleri ile
                hizmet vermekteyiz.
              </p>
              <p>
                Özellikle <strong>Sancaktepe, Sultanbeyli, Pendik, Kartal ve Çekmeköy</strong>{" "}
                ilçelerinde yoğun olarak hizmet vermekle birlikte, Ataşehir, Maltepe, Tuzla ve
                Anadolu Yakası&apos;nın tamamına hizmet götürmekteyiz.
              </p>
              <h2>Misyonumuz</h2>
              <p>
                Ev ve iş yerlerinde hijyen standartlarını en üst düzeye çıkarmak, müşterilerimize
                güvenilir, hızlı ve uygun fiyatlı temizlik hizmetleri sunmak. Koltuk yıkama ve
                halı yıkama alanında sektörün en kaliteli hizmetini sağlamak temel
                misyonumuzdur.
              </p>
              <h2>Neden Bizi Tercih Etmelisiniz?</h2>
              <ul className={styles.list}>
                <li>Profesyonel ve deneyimli ekip</li>
                <li>İleri teknoloji yıkama makineleri</li>
                <li>Çevre dostu ve anti-alerjik temizlik ürünleri</li>
                <li>Şeffaf ve uygun fiyatlandırma</li>
                <li>Halı yıkamada ücretsiz alım-teslim</li>
                <li>Yerinde koltuk yıkama ile taşıma derdi yok</li>
                <li>%100 müşteri memnuniyeti garantisi</li>
                <li>Esnek randevu sistemi</li>
              </ul>
            </div>
            <div className={styles.imageCol}>
              <div className={styles.imageWrap}>
                <Image
                  src="/images/sliders/koltuk.webp"
                  alt="Ferah Temizlik profesyonel koltuk yıkama ekibi"
                  fill
                  sizes="(max-width:768px) 100vw, 450px"
                  className={styles.image}
                />
              </div>
              <div className={styles.regions}>
                <h3>Hizmet Bölgelerimiz</h3>
                <div className={styles.regionTags}>
                  {siteConfig.serviceRegions.map((region) => (
                    <span key={region}>{region}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
