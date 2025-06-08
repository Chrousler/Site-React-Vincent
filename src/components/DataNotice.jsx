import React, { useState, useEffect } from 'react'
import styles from './DataNotice.module.scss'

export default function DataNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent === 'yes') {
      setVisible(true)
      setTimeout(() => setVisible(false), 4000)
    }
  }, [])

  if (!visible) return null
  return (
    <div className={styles.notice}>
      Этот сайт не собирает ваши данные. Всё создано для людей.
    </div>
  )
}
