import React from 'react';
import styles from './ConfirmModal.module.scss';

export function ConfirmModal({ title, message, onConfirm, onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttons}>
          <button onClick={onConfirm}>Открыть</button>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}
