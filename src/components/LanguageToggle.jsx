import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
    
    // Update document language attribute for proper font loading
    document.documentElement.lang = newLang;
    
    // Store language preference
    localStorage.setItem('preferred-language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label={`Switch to ${i18n.language === 'ko' ? 'English' : 'Korean'}`}
    >
      {i18n.language === 'ko' ? 'EN' : 'KO'}
    </button>
  );
};

export default LanguageToggle;