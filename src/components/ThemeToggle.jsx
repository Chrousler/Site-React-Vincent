// src/components/ThemeToggle.jsx
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
