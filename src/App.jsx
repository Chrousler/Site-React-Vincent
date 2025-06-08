import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { CookieBanner } from './components/CookieBanner';
import { DataNotice } from './components/DataNotice';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import NotFound404 from './pages/NotFound404';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ThemeToggle />
        <CookieBanner />
        <DataNotice text="Этот сайт не собирает ваши данные. Всё создано для людей!" />
        <Preloader />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
