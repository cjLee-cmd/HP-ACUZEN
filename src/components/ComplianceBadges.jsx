import { useTranslation } from 'react-i18next';
import styles from './ComplianceBadges.module.css';

const ComplianceBadges = () => {
  const { t } = useTranslation();

  const badges = [
    {
      key: 'iso27001',
      title: 'ISO 27001',
      subtitle: t('compliance.iso27001'),
      icon: '🛡️',
      verified: true
    },
    {
      key: 'soc2',
      title: 'SOC 2 Type II',
      subtitle: t('compliance.soc2'),
      icon: '✓',
      verified: true
    },
    {
      key: 'gdpr',
      title: 'GDPR',
      subtitle: t('compliance.gdpr'),
      icon: '🔒',
      verified: true
    },
    {
      key: 'cfr21',
      title: '21 CFR Part 11',
      subtitle: t('compliance.cfr21'),
      icon: '📋',
      verified: true
    },
    {
      key: 'gvp',
      title: 'GVP Module VI',
      subtitle: t('compliance.gvp'),
      icon: '⚕️',
      verified: true
    },
    {
      key: 'ich',
      title: 'ICH E2E',
      subtitle: t('compliance.ich'),
      icon: '🌐',
      verified: true
    }
  ];

  return (
    <section className={styles.complianceBadges} aria-labelledby="compliance-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="compliance-title" className={styles.title}>{t('compliance.title')}</h2>
          <p className={styles.subtitle}>{t('compliance.subtitle')}</p>
        </div>
        <div className={styles.badgesGrid}>
          {badges.map((badge) => (
            <div key={badge.key} className={`${styles.badge} ${badge.verified ? styles.verified : ''}`}>
              <div className={styles.badgeIcon}>
                <span className={styles.icon}>{badge.icon}</span>
                {badge.verified && (
                  <span className={styles.verifiedMark} aria-label={t('compliance.verified')}>
                    ✓
                  </span>
                )}
              </div>
              <div className={styles.badgeContent}>
                <h3 className={styles.badgeTitle}>{badge.title}</h3>
                <p className={styles.badgeSubtitle}>{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <p className={styles.footerText}>
            {t('compliance.footer')}
            <a href="#contact" className={styles.contactLink}>
              {t('compliance.contact')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplianceBadges;