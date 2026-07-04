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
    "Ferah Temizlik hakkında bilgi. İstanbul Anadolu Yakası'nda profesyonel halı yıkama, yerinde koltuk yıkama, araç koltuk yıkama, perde yıkama ve kuru temizleme hizmeti veren güvenilir temizlik firması.",
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
          <p>İstanbul Anadolu Yakası&apos;nın güvenilir profesyonel temizlik firması</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <article className={styles.content}>

            <p className={styles.lead}>
              <strong>Ferah Temizlik</strong>, İstanbul Anadolu Yakası&apos;nda profesyonel
              temizlik hizmetleri sunan, kaliteyi ve müşteri memnuniyetini ön planda tutan
              kurumsal bir temizlik firmasıdır. Kurulduğumuz günden bu yana binlerce halı,
              koltuk ve araç döşemesini hijyenik yöntemlerle temizleyerek müşterilerimize
              güvenilir hizmet sunuyoruz.
            </p>
            <p>
              Faaliyet alanlarımız arasında <strong>halı yıkama</strong>,{" "}
              <strong>yerinde koltuk yıkama</strong>, <strong>araç koltuğu yıkama</strong>,{" "}
              <strong>perde yıkama</strong> ve <strong>kuru temizleme</strong> hizmetleri yer
              almaktadır. Her hizmetimizde son teknoloji ekipmanlar, profesyonel yıkama
              sistemleri ve insan sağlığına zarar vermeyen, çevre dostu temizlik ürünleri
              kullanıyoruz.
            </p>

            <h2>Halı Yıkamada Güvenilir ve Tercih Edilen İsim</h2>
            <p>
              Ferah Temizlik olarak en güçlü olduğumuz alanların başında{" "}
              <strong>profesyonel halı yıkama hizmeti</strong> gelmektedir. Yılların
              kazandırdığı tecrübe, yüksek kapasitemiz ve titiz çalışma anlayışımız sayesinde
              yalnızca bireysel müşterilere değil, birçok işletmeye ve sektörün farklı
              noktalarında faaliyet gösteren iş ortaklarımıza da hizmet vermekteyiz. Kaliteli
              hizmet anlayışımız sayesinde çeşitli şubeler ve kurumsal işletmeler tarafından
              tercih edilen güvenilir çözüm ortaklarından biri olmanın gururunu yaşıyoruz.
            </p>
            <p>
              Halılarınız, türüne ve dokusuna uygun özel yıkama programları ile temizlenir;
              derinlemesine hijyen sağlandıktan sonra kontrollü kurutma sürecinden geçirilerek
              ilk günkü temizliğine en yakın hale getirilir. Ücretsiz alım ve teslimat
              hizmetimiz sayesinde tüm süreç müşterilerimiz için zahmetsiz ve güvenli şekilde
              tamamlanır.
            </p>

            <h2>Profesyonel Yerinde Koltuk Yıkama</h2>
            <p>
              Koltuklar, ev ve iş yerlerinde en yoğun kullanılan eşyalardan biridir. Bu
              nedenle yalnızca yüzey temizliği değil, kumaşın derinliklerine kadar ulaşan
              profesyonel bir temizlik büyük önem taşır.
            </p>
            <p>
              Ferah Temizlik olarak yerinde koltuk yıkama hizmetimizde güçlü vakum sistemlerine
              sahip profesyonel makineler ve kumaşa zarar vermeyen özel temizlik solüsyonları
              kullanıyoruz. Kumaşın dokusunu korurken kir, leke, toz akarları ve kötü kokuları
              etkili şekilde gideriyor; koltuklarınızı daha hijyenik, ferah ve kullanıma hazır
              hale getiriyoruz.
            </p>

            <h2>Araç Koltuğu Yıkama ve Detaylı İç Temizlik</h2>
            <p>
              Araç koltukları zamanla toz, leke, ter ve kötü kokular nedeniyle hijyenini
              kaybedebilir. Profesyonel araç koltuğu yıkama hizmetimiz sayesinde kumaşa zarar
              vermeden derinlemesine temizlik sağlıyor, araç iç mekanında daha sağlıklı ve
              ferah bir kullanım sunuyoruz. Kumaş ve döşeme tipine uygun yöntemler kullanarak
              hem bireysel hem de ticari araçlara kaliteli temizlik hizmeti veriyoruz.
            </p>

            <h2>Perde Yıkama ve Kuru Temizleme Hizmetleri</h2>
            <p>
              Perdeler ve kuru temizleme gerektiren tekstil ürünleri, özel bakım isteyen
              ürünlerdir. Deneyimli ekibimiz ve uygun temizlik yöntemlerimiz sayesinde
              ürünlerin dokusunu koruyarak hijyenik ve özenli bir temizlik sağlıyoruz. Her
              ürün, kumaş yapısına uygun işlemlerden geçirilerek güvenle müşterilerimize
              teslim edilmektedir.
            </p>

            <h2>Hizmet Bölgelerimiz</h2>
            <p>
              Başta <strong>Sancaktepe, Sultanbeyli, Pendik, Kartal ve Çekmeköy</strong>{" "}
              olmak üzere <strong>Ataşehir, Maltepe, Tuzla</strong> ve İstanbul Anadolu
              Yakası&apos;nın birçok ilçesinde profesyonel temizlik hizmeti sunuyoruz. Geniş
              servis ağımız ve planlı çalışma sistemimiz sayesinde müşterilerimize zamanında,
              güvenilir ve kaliteli hizmet ulaştırıyoruz.
            </p>
            <div className={styles.regionTags}>
              {siteConfig.serviceRegions.map((region) => (
                <span key={region}>{region}</span>
              ))}
            </div>

            <h2>Misyonumuz</h2>
            <p>
              Misyonumuz; ev ve iş yerlerinde hijyen standartlarını yükselten, kaliteli hizmet
              anlayışını uygun fiyat politikasıyla birleştiren, güvenilir ve profesyonel bir
              temizlik markası olmaktır. Her müşterimize aynı özenle yaklaşarak, yalnızca
              temizlik değil, güven ve memnuniyet sunmayı hedefliyoruz.
            </p>

            <h2>Neden Ferah Temizlik?</h2>
            <ul className={styles.list}>
              <li>Alanında deneyimli ve eğitimli profesyonel ekip</li>
              <li>Son teknoloji yıkama makineleri ve ekipmanlar</li>
              <li>Çevre dostu, insan sağlığına duyarlı temizlik ürünleri</li>
              <li>Halı yıkamada uzmanlık ve yüksek hijyen standartları</li>
              <li>Yerinde koltuk yıkama ile taşıma zahmeti olmadan hizmet</li>
              <li>Profesyonel araç koltuğu yıkama çözümleri</li>
              <li>Perde yıkama ve kuru temizleme hizmetleri</li>
              <li>Ücretsiz halı alım ve teslimat hizmeti</li>
              <li>Şeffaf fiyat politikası</li>
              <li>Esnek randevu sistemi</li>
              <li>Hızlı, güvenilir ve müşteri odaklı hizmet anlayışı</li>
              <li>Müşteri memnuniyetini esas alan çalışma prensibi</li>
            </ul>

            <p className={styles.closing}>
              Ferah Temizlik olarak amacımız; kaliteli hizmet anlayışımız, profesyonel ekibimiz
              ve modern temizlik teknolojilerimizle müşterilerimizin ilk tercihi olmaya devam
              etmektir. Temizliğin yalnızca görünüm değil, aynı zamanda sağlık ve yaşam
              kalitesi olduğuna inanıyor; her hizmetimizde bu anlayışla çalışıyoruz.
            </p>

          </article>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
