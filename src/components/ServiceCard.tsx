import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  alt: string;
}

export default function ServiceCard({ title, description, image, href, alt }: ServiceCardProps) {
  const content = (
    <>
      <div className={styles.imageWrap}>
        <Image src={image} alt={alt} fill sizes="(max-width:768px) 100vw, 280px" className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`card ${styles.card}`}>
        {content}
      </Link>
    );
  }

  return <article className={`card ${styles.card}`}>{content}</article>;
}
