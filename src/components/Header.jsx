import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      key: 'home', 
      route: '/',
      label: '홈'
    },
    {
      key: 'company',
      label: '회사',
      submenu: [
        { key: 'about', route: '/about', label: '회사 소개' },
        { key: 'vision', route: '/about', label: '비전 & 미션' },
        { key: 'team', route: '/about', label: '팀 소개' }
      ]
    },
    {
      key: 'services',
      label: '서비스',
      submenu: [
  { key: 'literature', external: true, href: 'https://acuzenic.com/', label: '문헌검색' },
        { key: 'document', route: '/services', label: '문서생성(구현중)' },
        { key: 'regulation', route: '/services', label: '규정크롤링(구현중)' },
        { key: 'data', route: '/services', label: '식약처 원시자료 변환(구현중)' }
      ]
    },
    { 
      key: 'contact', 
      href: '#contact',
      label: '연락처'
    }
  ];

  const handleNavigation = (item) => {
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
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDropdownToggle = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={handleLogoClick}>
            <div className="logo-icon">
              <div className="logo-symbol">A</div>
            </div>
            <span className="logo-text">Acuzenic</span>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.key} className="nav-item">
                  {item.submenu ? (
                    <div className="dropdown">
                      <button
                        className="nav-link dropdown-trigger"
                        onClick={() => handleDropdownToggle(item.key)}
                      >
                        {item.label}
                        <span className={`chevron ${openDropdown === item.key ? 'rotated' : ''}`}>▼</span>
                      </button>
                      <div className={`dropdown-menu ${openDropdown === item.key ? 'open' : ''}`}>
                        {item.submenu.map((subitem) => (
                          <button
                            key={subitem.key}
                            onClick={() => handleNavigation(subitem)}
                            className="dropdown-item"
                          >
                            {subitem.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className="nav-link"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <LanguageToggle />
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;