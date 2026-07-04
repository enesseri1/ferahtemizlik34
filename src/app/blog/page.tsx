import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/data/blog-posts";
import styles from "./blog.module.css";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Ferah Temizlik blog - Halı yıkama, koltuk yıkama, yerinde temizlik ve hijyen hakkında faydalı bilgiler. İstanbul Anadolu Yakası temizlik rehberi.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", url: siteConfig.domain },
          { name: "Blog", url: `${siteConfig.domain}/blog` },
        ])}
      />

      <header className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "Blog" }]} />
          <h1>Blog</h1>
          <p>Halı yıkama, koltuk yıkama ve temizlik hakkında faydalı bilgiler</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={`card ${styles.card}`}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("tr-TR")}</time>
                </div>
                <h2 className={styles.title}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.footer}>
                  <span>{post.readTime} okuma</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Devamını Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
