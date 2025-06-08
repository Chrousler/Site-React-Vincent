import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Preloader from './components/Preloader'
import CookieBanner from './components/CookieBanner'
import ThemeToggle from './components/ThemeToggle'
import Logo from './components/Logo'                // <-- обязательно!
import PostloaderWarning from './components/PostloaderWarning'
import Background from './components/Background'

import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import NotFound404 from './pages/NotFound404'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <HelmetProvider>
      <ThemeToggle />
      <Background/>
      <Logo />

      {loading && (
        <Preloader
          duration={2500}
          onFinish={() => setLoading(false)}
        />
      )}

      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      )}

      <CookieBanner />
    </HelmetProvider>
  )
}