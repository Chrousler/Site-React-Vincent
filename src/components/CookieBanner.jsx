import React, { useState } from 'react';
import styles from './CookieBanner.module.scss';

export function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  return (
    <div className={styles.banner}>
      <span>Мы используем cookie для базовой работы сайта.</span>
      <button onClick={() => setVisible(false)}>Принять</button>
    </div>
  );
}
