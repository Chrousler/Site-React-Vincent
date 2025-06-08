import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <button className={styles.btn} onClick={toggle} aria-label="Toggle theme">
      {theme === 'dark' ? '🌞' : '🌜'}
    </button>
  )
}
