import React, { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import ThemeToggle from './components/ThemeToggle.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import DataNotice from './components/DataNotice.jsx'
import ConfirmModal from './components/ConfirmModal.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFound404 from './pages/NotFound404.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

export default function App() {
  const [modal, setModal] = useState({ open: false, link: '' })
  const location = useLocation()

  const handleLink = url => {
    setModal({ open: true, link: url })
  }
  const confirm = () => {
    window.open(modal.link, '_blank')
    setModal({ open: false, link: '' })
  }

  return (
    <HelmetProvider>
      <ThemeToggle />
      <CookieBanner />
      <DataNotice />

      <ConfirmModal
        isOpen={modal.open}
        message={`Вы уверены, что хотите перейти на: ${modal.link}?`}
        onConfirm={confirm}
        onClose={() => setModal({ open: false, link: '' })}
      />

      <Routes>
        <Route path="/" element={<HomePage onLinkClick={handleLink} />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </HelmetProvider>
  )
}
