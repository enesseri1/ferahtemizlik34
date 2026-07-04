"use client";

import dynamic from "next/dynamic";
import styles from "./MapWrapper.module.css";

const ServiceAreaMap = dynamic(() => import("@/components/ServiceAreaMap"), {
  ssr: false,
  loading: () => <div className={styles.loading}>Harita yükleniyor...</div>,
});

export default function MapWrapper() {
  return <ServiceAreaMap />;
}
