"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} Ana Sayfa`}>
          <Image src="/assets/logo.svg" alt="" width={40} height={40} priority />
          <span className={styles.logoText}>
            <strong>Ferah Temizlik</strong>
            <small>Halı &amp; Koltuk Yıkama</small>
          </span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Ana menü">
          <ul className={styles.navList}>
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={siteConfig.phoneHref} className={`btn btn-primary ${styles.callBtn}`}>
            <PhoneIcon />
            Hemen Ara
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className={styles.overlay}
          aria-label="Menüyü kapat"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
    </svg>
  );
}
