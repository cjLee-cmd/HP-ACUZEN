import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ size = 'medium', message = null }) => {
  const { t } = useTranslation();
  
  const defaultMessage = message || t('common.loading', 'Loading...');
  
  return (
    <div className={styles.container} role="status" aria-live="polite">
      <div className={`${styles.spinner} ${styles[size]}`} aria-hidden="true">
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      <span className={styles.message}>{defaultMessage}</span>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  message: PropTypes.string,
};

export default LoadingSpinner;