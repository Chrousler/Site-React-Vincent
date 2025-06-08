import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button className={styles.toggle} onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}