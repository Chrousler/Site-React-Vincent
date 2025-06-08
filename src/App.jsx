import React, { useState, useEffect } from 'react'
import CookieBanner from './components/CookieBanner'
import DataNotice from './components/DataNotice'
import Preloader from './components/Preloader'
import ThemeToggle from './components/ThemeToggle'
import { HelmetProvider } from 'react-helmet-async'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <HelmetProvider>
      <ThemeToggle />
      {loading ? <Preloader /> : <>
        <DataNotice text="Этот сайт не собирает ваши данные. Всё создано для людей." />
        <CookieBanner />
        {/* <Routes>…</Routes> */}
      </>}
    </HelmetProvider>
  )
}