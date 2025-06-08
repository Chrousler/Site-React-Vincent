// src/pages/GalleryPage.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './GalleryPage.module.scss'

const images = [1, 2, 3].map(n => ({
  src: `/assets/screenshots/shot${n}.jpg`,
  alt: `Скриншот ${n}`,
}))

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Vincent Velasco — Галерея</title>
        <meta name="description" content="Галерея скриншотов игр от Vincent Velasco." />
        <meta property="og:url" content="https://your-domain.gallery" />
      </Helmet>

      <div className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.grid}>
          {images.map((img, i) => (
            <div key={i} className={styles.card}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
