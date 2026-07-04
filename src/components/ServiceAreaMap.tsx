"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./ServiceAreaMap.module.css";

interface DistrictFeatureCollection {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    properties: { name?: string; [key: string]: unknown };
    geometry: GeoJSON.Geometry;
  }>;
}

/* Yoğun hizmet bölgeleri → koyu kırmızı */
const PRIMARY_DISTRICTS = new Set([
  "Sancaktepe", "Sultanbeyli", "Pendik", "Kartal", "Çekmeköy",
]);

function getStyle(name: string): L.PathOptions {
  if (PRIMARY_DISTRICTS.has(name)) {
    return {
      color: "#b91c1c",
      weight: 3,
      opacity: 1,
      fillColor: "#ef4444",
      fillOpacity: 0.38,
    };
  }
  return {
    color: "#f87171",
    weight: 1.5,
    opacity: 0.7,
    fillColor: "#fca5a5",
    fillOpacity: 0.12,
  };
}

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    let cancelled = false;

    const initMap = async () => {
      const res = await fetch("/data/all-districts.geojson");
      const districtsData: DistrictFeatureCollection = await res.json();

      if (cancelled || !mapRef.current) return;

      const map = L.map(mapRef.current, {
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const bounds = L.latLngBounds([]);

      /* Primary ilçeleri en üste çizmek için önce secondary'leri ekle */
      const secondaryFeatures = districtsData.features.filter(
        (f) => !PRIMARY_DISTRICTS.has(f.properties.name || "")
      );
      const primaryFeatures = districtsData.features.filter(
        (f) => PRIMARY_DISTRICTS.has(f.properties.name || "")
      );

      [...secondaryFeatures, ...primaryFeatures].forEach((feature) => {
        const name = feature.properties.name || "";
        const isPrimary = PRIMARY_DISTRICTS.has(name);
        const popupText = isPrimary
          ? `<strong>${name}</strong><br/>Yoğun hizmet bölgesi`
          : `<strong>${name}</strong><br/>Hizmet bölgesi`;

        L.geoJSON(feature as GeoJSON.GeoJsonObject, {
          style: getStyle(name),
        })
          .bindPopup(popupText)
          .addTo(map);

        const layer = L.geoJSON(feature as GeoJSON.GeoJsonObject);
        bounds.extend(layer.getBounds());
      });

      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [20, 20] });
      } else {
        map.setView([40.98, 29.22], 11);
      }

      mapInstance.current = map;
    };

    initMap();

    return () => {
      cancelled = true;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={mapRef} className={styles.map} aria-label="Hizmet bölgeleri haritası" role="application" />
      <div className={styles.legend}>
        <span className={styles.legendPrimary} />
        <span>Yoğun hizmet: Sancaktepe, Sultanbeyli, Pendik, Kartal, Çekmeköy</span>
        <span className={styles.legendSecondary} />
        <span>Tüm Anadolu Yakası&apos;na hizmet verilmektedir</span>
      </div>
    </div>
  );
}
