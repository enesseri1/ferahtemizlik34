"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./ServiceAreaMap.module.css";

interface DistrictFeatureCollection {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    properties: { name?: string };
    geometry: GeoJSON.Geometry;
  }>;
}

const DISTRICT_COLORS: Record<string, string> = {
  Sancaktepe: "#ef4444",
  Sultanbeyli: "#ef4444",
  Pendik: "#ef4444",
  Kartal: "#ef4444",
  Cekmekoy: "#ef4444",
};

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    let cancelled = false;

    const initMap = async () => {
      const res = await fetch("/data/districts.geojson");
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

    districtsData.features.forEach((feature) => {
      const name = feature.properties.name || "";
      const color = DISTRICT_COLORS[name] || "#ef4444";

      L.geoJSON(feature as GeoJSON.GeoJsonObject, {
        style: {
          color,
          weight: 3,
          opacity: 0.9,
          fillColor: color,
          fillOpacity: 0.15,
        },
      })
        .bindPopup(`<strong>${name}</strong><br/>Hizmet bölgesi`)
        .addTo(map);

      const layer = L.geoJSON(feature as GeoJSON.GeoJsonObject);
      bounds.extend(layer.getBounds());
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [30, 30] });
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
      <p className={styles.legend}>
        Kırmızı çizgilerle işaretli bölgeler: Sancaktepe, Sultanbeyli, Pendik, Kartal ve Çekmeköy
      </p>
    </div>
  );
}
