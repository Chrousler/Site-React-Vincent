import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound404.module.scss';

export default function NotFound404() {
  const nav = useNavigate();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ой! Страница не найдена <span>😿</span></h1>
      <p className={styles.text}>
        Кажется, вы забрели не туда. Но не волнуйтесь — всё под контролем!
      </p>
      <button
        className={styles.button}
        onClick={() => nav('/')}
      >
        Вернуться на главную
      </button>
    </div>
  );
}
