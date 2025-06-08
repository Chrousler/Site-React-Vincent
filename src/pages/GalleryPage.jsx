import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './GalleryPage.module.scss';

// Эта магия Vite подтянет все JPG из public/assets/screenshots
const modules = import.meta.glob('/assets/screenshots/*.jpg', { eager: true, as: 'url' });
const images = Object.values(modules);

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Vincent Velasco — Галерея</title>
        <meta
          name="description"
          content="Галерея скриншотов игр от Vincent Velasco."
        />
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
