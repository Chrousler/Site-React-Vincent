import React, { useState, useEffect } from 'react'
import styles from './CookieBanner.module.scss'

export default function CookieBanner() {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setShown(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookieConsent', 'yes')
    setShown(false)
  }
  const decline = () => {
    localStorage.setItem('cookieConsent', 'no')
    setShown(false)
  }

  if (!shown) return null
  return (
    <div className={styles.banner}>
      <p>Этот сайт не собирает ваши данные. Всё создано для людей.</p>
      <div>
        <button onClick={accept}>Принять</button>
        <button onClick={decline}>Отклонить</button>
      </div>
    </div>
  )
}
