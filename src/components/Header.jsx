import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Memoized navigation items to prevent re-renders
  const navItems = useMemo(() => [
    { key: 'home', route: '/', label: t('navigation.home') },
    {
      key: 'company',
      label: t('navigation.company'),
      submenu: [
        { key: 'about', route: '/about', label: t('navigation.companyIntro') },
        { key: 'vision', route: '/about', label: t('navigation.vision') },
        { key: 'team', route: '/about', label: t('navigation.team') },
      ],
    },
    {
      key: 'services',
      label: t('navigation.services'),
      submenu: [
        { key: 'literature', external: true, href: 'http://acuzenic.com/', label: t('navigation.literatureSearch') },
        { key: 'document', external: true, href: 'https://cjlee-cmd.github.io/acuzen_ICBM/', label: t('navigation.documentGeneration') },
        { key: 'regulation', route: '/document-crawling', label: t('navigation.regulationCrawling') },
        { key: 'data', route: '/data-transformation', label: t('navigation.dataTransformation') },
      ],
    },
    { key: 'contact', href: '#contact', label: t('navigation.contact') },
  ], [t]);

  const handleNavigation = useCallback((item) => {
    if (item.external && item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    } else if (item.route) {
      navigate(item.route);
    } else if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [navigate]);

  const handleLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleDropdownToggle = useCallback((key) => {
    setOpenDropdown(prev => prev === key ? null : key);
  }, []);

  const handleKeyDown = (e, item, isDropdown = false) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isDropdown) {
        handleDropdownToggle(item.key);
      } else {
        handleNavigation(item);
      }
    } else if (e.key === 'Escape' && isDropdown) {
      setOpenDropdown(null);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo} onClick={handleLogoClick} role="button" tabIndex="0" aria-label={t('navigation.home')}>
            <div className={styles.logoIcon}>
              <div className={styles.logoSymbol}>A</div>
            </div>
            <span className={styles.logoText}>Acuzenic</span>
          </div>

          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.key} className={styles.navItem}>
                  {item.submenu ? (
                    <div className={styles.dropdown}>
                      <button
                        className={`${styles.navLink} ${styles.dropdownTrigger}`}
                        onClick={() => handleDropdownToggle(item.key)}
                        onKeyDown={(e) => handleKeyDown(e, item, true)}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.key}
                      >
                        {item.label}
                        <span className={`${styles.chevron} ${openDropdown === item.key ? styles.rotated : ''}`}>▼</span>
                      </button>
                      <div className={`${styles.dropdownMenu} ${openDropdown === item.key ? styles.open : ''}`}>
                        {item.submenu.map((subitem) => (
                          <button
                            key={subitem.key}
                            onClick={() => handleNavigation(subitem)}
                            onKeyDown={(e) => handleKeyDown(e, subitem)}
                            className={styles.dropdownItem}
                          >
                            {subitem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleNavigation(item)} 
                      onKeyDown={(e) => handleKeyDown(e, item)}
                      className={styles.navLink}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.headerActions}>
            <LanguageSwitcher />
            <button
              className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('navigation.toggleMenu')}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={styles.srOnly}>{t('navigation.toggleMenu')}</span>
              <span className={`${styles.hamburgerIcon} ${isMobileMenuOpen ? styles.open : ''}`}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
