import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.langButton} ${i18n.language === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        🇺🇸 EN
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.langButton} ${i18n.language === 'ko' ? styles.active : ''}`}
        onClick={() => changeLanguage('ko')}
        aria-label="한국어로 전환"
      >
        🇰🇷 KR
      </button>
    </div>
  );
};

export default LanguageSwitcher;