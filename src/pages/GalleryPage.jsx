import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './GalleryPage.module.scss'

const images = [
  { src: '/assets/screenshots/shot1.jpg', alt: 'Скриншот 1' },
  { src: '/assets/screenshots/shot2.jpg', alt: 'Скриншот 2' },
  { src: '/assets/screenshots/shot3.jpg', alt: 'Скриншот 3' },
]

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Vincent Velasco — Галерея</title>
        <meta name="description" content="Галерея скриншотов игр." />
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
