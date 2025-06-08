import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './PostloaderWarning.module.scss'

/**
 * @param {{ show: boolean }} props
 */
export default function PostloaderWarning({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Этот сайт не собирает ваши данные. Всё создано для людей,
          которые хотят узнать больше о Vincent Velasco.
        </motion.div>
      )}
    </AnimatePresence>
  )
}
