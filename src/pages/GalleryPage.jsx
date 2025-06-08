import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./GalleryPage.module.scss";

export default function GalleryPage() {
  // 1. Берём все .jpg/.png из папки и сразу загружаем (eager: true)
  const modules = import.meta.glob(
    "../assets/screenshots/*.{jpg,png}",
    { eager: true }
  );
  // 2. Из объекта { path: module } собираем массив URL
  const images = Object.values(modules).map((mod) => mod.default);

  return (
    <>
      <Helmet>
        <title>Vincent Velasco — Галерея</title>
        <meta
          name="description"
          content="Галерея скриншотов игр от Vincent Velasco."
        />
        <meta property="og:url" content="http://localhost:5173/gallery" />
      </Helmet>

      <div className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.grid}>
          {images.map((src, i) => (
            <div key={i} className={styles.card}>
              <img src={src} alt={`Скриншот ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}