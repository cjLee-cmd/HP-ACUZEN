import { useEffect, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document language and dir attribute for i18n
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir?.() || 'ltr';
  }, [i18n.language]);

  useEffect(() => {
    // Performance optimization: preload critical resources
    const preloadCriticalFonts = () => {
      const fonts = [
        { family: 'Inter', weight: '400' },
        { family: 'Inter', weight: '600' },
        { family: 'Poppins', weight: '600' },
      ];
      
      fonts.forEach(({ family, weight }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        link.href = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
        document.head.appendChild(link);
      });
    };

    preloadCriticalFonts();
  }, []);

  return (
    <div className="App" role="application">
      <div className="gradient-bg" aria-hidden="true"></div>
      <Header />
      <main role="main" id="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;