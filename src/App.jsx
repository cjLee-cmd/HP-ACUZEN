import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial language from localStorage or browser
    const savedLanguage = localStorage.getItem('preferred-language');
    const browserLanguage = navigator.language.startsWith('ko') ? 'ko' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    
    i18n.changeLanguage(initialLanguage);
    document.documentElement.lang = initialLanguage;
  }, [i18n]);

  useEffect(() => {
    // Smooth scrolling is handled by CSS scroll-behavior: smooth
    // Modern browsers support this natively
  }, []);

  return (
    <div className="App">
      <div className="gradient-bg"></div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;