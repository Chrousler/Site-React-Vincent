import React, { useState, useEffect } from 'react'
import styles from './CookieBanner.module.scss'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const handleChoice = (choice) => {
    localStorage.setItem('cookie-consent', choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner}>
      <span>Мы используем cookie для улучшения вашего опыта на сайте.</span>
      <div className={styles.buttons}>
        <button onClick={() => handleChoice('accepted')}>Принять</button>
        <button onClick={() => handleChoice('rejected')}>Отклонить</button>
      </div>
    </div>
  )
}
