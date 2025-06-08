import React, { useState, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'

import ThemeToggle from './components/ThemeToggle.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import DataNotice from './components/DataNotice.jsx'
import ConfirmModal from './components/ConfirmModal.jsx'

import HomePage from './pages/HomePage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import NotFound404 from './pages/NotFound404.jsx'

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalLink, setModalLink] = useState('')

  // запускаем прелоадер
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(t)
  }, [])

  // обработчик клика по ссылке
  const handleLinkClick = url => {
    setModalLink(url)
    setModalOpen(true)
  }

  const handleConfirm = () => {
    window.open(modalLink, '_blank')
    setModalOpen(false)
    setModalLink('')
  }

  if (loading) return <ConfirmModal isOpen={false} /> /* или Preloader */

  return (
    <HelmetProvider>
      <ThemeToggle />
      <CookieBanner />
      <DataNotice />

      <ConfirmModal
        isOpen={isModalOpen}
        message={`Вы уверены, что хотите перейти на: ${modalLink}?`}
        onConfirm={handleConfirm}
        onClose={() => setModalOpen(false)}
      />

      <Routes>
        <Route path="/" element={<HomePage onLinkClick={handleLinkClick} />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </HelmetProvider>
  )
}
