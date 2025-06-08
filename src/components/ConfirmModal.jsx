import React from 'react'
import styles from './ConfirmModal.module.scss'

export default function ConfirmModal({ text, onClose, onConfirm }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <p>{text}</p>
        <div className={styles.buttons}>
          <button className={styles.buttonClose} onClick={onClose}>Закрыть</button>
          <button className={styles.buttonOpen} onClick={onConfirm}>Открыть</button>
        </div>
      </div>
    </div>
  )
}