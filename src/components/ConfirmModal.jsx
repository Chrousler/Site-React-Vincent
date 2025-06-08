import React from 'react'
import ReactDOM from 'react-dom'
import styles from './ConfirmModal.module.scss'

export default function ConfirmModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <p>{message}</p>
        <div className={styles.buttons}>
          <button onClick={onConfirm}>Открыть</button>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>,
    document.body
  )
}
