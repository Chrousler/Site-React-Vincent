// src/components/Logo.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Logo.module.scss'

export default function Logo() {
  const [clicks, setClicks] = useState(0)
  const [showEgg, setShowEgg] = useState(false)

  // Сброс кликов через 3 секунды бездействия
  useEffect(() => {
    if (clicks === 0) return
    const timer = setTimeout(() => setClicks(0), 3000)
    return () => clearTimeout(timer)
  }, [clicks])

  const handleClick = () => {
    const next = clicks + 1
    setClicks(next)
    if (next >= 5) {
      setShowEgg(true)
      setClicks(0)
    }
  }

  const closeEgg = () => setShowEgg(false)

  return (
    <>
      <motion.div
        className={styles.logo}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Здесь можно вставить ваш SVG или картинку логотипа */}
        <img src="/assets/logo.svg" alt="Logo" className={styles.img} />
      </motion.div>

      <AnimatePresence>
        {showEgg && (
          <motion.div
            className={styles.eggBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEgg}
          >
            <motion.div
              className={styles.eggModal}
              initial={{ scale: 0.5, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 45 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <h2>🎉 Вы нашли Пасхалку! 🎉</h2>
              <p>Поздравляем, вы кликнули по логотипу 5 раз!</p>
              <button onClick={closeEgg}>Закрыть</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
