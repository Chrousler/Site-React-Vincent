// src/components/ConfirmModal.jsx
import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ConfirmModal.module.scss'

/**
 * @typedef {Object} ConfirmModalProps
 * @property {boolean} isOpen
 * @property {string} [title]
 * @property {string} message
 * @property {string} [confirmText]
 * @property {string} [cancelText]
 * @property {() => void} onConfirm
 * @property {() => void} onCancel
 */

/**
 * @param {ConfirmModalProps} props
 */
export default function ConfirmModal({
  isOpen,
  title = '',
  message,
  confirmText = 'Открыть',
  cancelText = 'Закрыть',
  onConfirm,
  onCancel,
}) {
  const backdropRef = useRef(null)
  const confirmRef = useRef(null)
  const cancelRef = useRef(null)

  // Закрываем по нажатию Esc
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (e.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, onCancel])

  // Трап фокуса: когда открыто, ограничиваем табуляцию кнопками
  useEffect(() => {
    if (!isOpen) return
    const focusable = [confirmRef.current, cancelRef.current]
    let idx = 0
    focusable[0].focus()

    const trap = (e) => {
      if (e.key !== 'Tab') return
      e.preventDefault()
      idx = e.shiftKey ? (idx + focusable.length - 1) % focusable.length : (idx + 1) % focusable.length
      focusable[idx].focus()
    }
    window.addEventListener('keydown', trap)
    return () => window.removeEventListener('keydown', trap)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          ref={backdropRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {title && <h2 className={styles.title}>{title}</h2>}
            <p className={styles.message}>{message}</p>
            <div className={styles.buttons}>
              <button
                ref={confirmRef}
                className={styles.confirm}
                onClick={onConfirm}
              >
                {confirmText}
              </button>
              <button
                ref={cancelRef}
                className={styles.cancel}
                onClick={onCancel}
              >
                {cancelText}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
