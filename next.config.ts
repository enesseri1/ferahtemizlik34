import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/hizmetlerimiz.html", destination: "/hizmetlerimiz", permanent: true },
      { source: "/fiyat-listesi.html", destination: "/fiyat-listesi", permanent: true },
      { source: "/hakkimizda.html", destination: "/hakkimizda", permanent: true },
      { source: "/iletisim.html", destination: "/iletisim", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
