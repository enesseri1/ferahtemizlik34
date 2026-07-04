export const siteConfig = {
  name: "Ferah Temizlik",
  tagline: "İstanbul Anadolu Yakası Halı ve Koltuk Yıkama",
  domain: "https://ferahtemizlik34.com",
  phone: "+905427632861",
  phoneDisplay: "+90 542 763 28 61",
  phoneHref: "tel:+905427632861",
  email: "Ferahtemizlik1@gmail.com",
  whatsapp: "905427632861",
  whatsappMessage:
    "Merhaba, Ferah Temizlik hizmetleriniz hakkında bilgi almak istiyorum.",
  instagram: "https://www.instagram.com/ferahtemizlik34?igsh=MW96dW5iZ2VnOHA0NA==",
  instagramHandle: "ferahtemizlik34",
  address: {
    street: "Sancaktepe, İstanbul",
    city: "İstanbul",
    region: "Anadolu Yakası",
    country: "TR",
  },
  serviceRegions: [
    "Kadıköy", "Üsküdar", "Beykoz", "Ümraniye", "Ataşehir",
    "Maltepe", "Kartal", "Pendik", "Tuzla", "Sultanbeyli",
    "Sancaktepe", "Çekmeköy", "Şile", "Adalar",
  ],
  primaryRegions: [
    "Sancaktepe", "Sultanbeyli", "Pendik", "Kartal", "Çekmeköy",
    "Ataşehir", "Maltepe", "Tuzla", "Ümraniye",
  ],
  workingHours: "Pazartesi - Cumartesi: 08:00 - 20:00",
  navLinks: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { href: "/fiyat-listesi", label: "Fiyat Listesi" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
