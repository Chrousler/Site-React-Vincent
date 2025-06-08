import React from 'react';
import styles from './DataNotice.module.scss';

export function DataNotice({ text }) {
  return (
    <div className={styles.notice}>
      {text}
    </div>
  );
}
