import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABlock from "@/components/CTABlock";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/data/blog-posts";
import styles from "./post.module.css";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: siteConfig.domain },
            { name: "Blog", url: `${siteConfig.domain}/blog` },
            { name: post.title, url: `${siteConfig.domain}/blog/${slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: siteConfig.name },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.domain,
            },
          },
        ]}
      />

      <header className="page-header">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <h1>{post.title}</h1>
          <p>
            {post.category} · {new Date(post.date).toLocaleDateString("tr-TR")} · {post.readTime}{" "}
            okuma
          </p>
        </div>
      </header>

      <article className="section">
        <div className={`container ${styles.article}`}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className={styles.nav}>
            <Link href="/blog" className="btn btn-outline">
              ← Tüm Yazılar
            </Link>
          </div>
        </div>
      </article>

      <CTABlock
        title="Temizlik Hizmeti mi Arıyorsunuz?"
        description="Ferah Temizlik ile İstanbul Anadolu Yakası'nda profesyonel halı ve koltuk yıkama hizmeti alın."
      />
    </>
  );
}
