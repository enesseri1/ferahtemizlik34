"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./BeforeAfterGallery.module.css";

interface GalleryItem {
  image: string;
  title: string;
  desc: string;
  alt: string;
}

interface Props {
  items: GalleryItem[];
}

export default function BeforeAfterGallery({ items }: Props) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.image} className={`card ${styles.card}`}>
            <button
              type="button"
              className={styles.imgBtn}
              onClick={() => setActive(item)}
              aria-label={`${item.title} görselini büyüt`}
            >
              <div className={styles.imgWrap}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 280px"
                  className={styles.img}
                />
                <span className={styles.zoomHint} aria-hidden="true">
                  <ZoomIcon />
                </span>
              </div>
            </button>
            <div className={styles.body}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className={styles.backdrop}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div
            className={styles.lightbox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={close}
              aria-label="Kapat"
            >
              <span aria-hidden="true">✕</span>
            </button>
            <div className={styles.lightboxImg}>
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="90vw"
                className={styles.lightboxImgInner}
                priority
              />
            </div>
            <p className={styles.lightboxCaption}>
              <strong>{active.title}</strong> — {active.desc}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function ZoomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}
