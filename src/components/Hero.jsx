import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import { Icons } from './Icons';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToAbout = () => {
    navigate('/about');
  };

  const handleFeatureClick = (featureType) => {
    console.log('Feature clicked:', featureType);
    switch (featureType) {
      case 'literature':
        window.open('http://acuzenic.com/', '_blank', 'noopener,noreferrer');
        break;
      case 'document':
        window.open('https://cjlee-cmd.github.io/acuzen_ICBM/', '_blank', 'noopener,noreferrer');
        break;
      case 'regulation':
        navigate('/document-crawling');
        break;
      case 'data':
        navigate('/data-transformation');
        break;
      default:
        console.warn('Unknown feature type:', featureType);
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeText}>{t('hero.badge')}</span>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.titleMain}>{t('hero.title.main')}</span>
            <span className={styles.titleHighlight}>{t('hero.title.highlight')}</span>
          </h1>

          <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>

          <div className={styles.heroActions}>
            <button onClick={scrollToContact} className={`${styles.btn} ${styles.btnPrimary}`}>
              {t('hero.cta.contact')}
            </button>
            <button onClick={goToAbout} className={`${styles.btn} ${styles.btnSecondary}`}>
              {t('hero.cta.about')}
            </button>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99%+</div>
              <div className={styles.statLabel}>{t('hero.stats.accuracy')}</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>70%↓</div>
              <div className={styles.statLabel}>{t('hero.stats.report_time')}</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>{t('hero.stats.monitoring')}</div>
            </div>
          </div>
        </div>

        <div className={`${styles.heroVisual} ${styles.pvGridVisual}`}>
          <div className={styles.pvFeatureGrid}>
            <FeatureCard
              icon={<Icons.Literature size={34} />}
              title={t('hero.feature.literature')}
              subtitle={t('hero.feature.literature.sub')}
              metric={t('hero.feature.literature.metric')}
              meterWidth="92%"
              iconClass={styles.lit}
              onClick={() => handleFeatureClick('literature')}
            />
            <FeatureCard
              icon={<Icons.DocumentAI size={34} />}
              title={t('hero.feature.document')}
              subtitle={t('hero.feature.document.sub')}
              metric={t('hero.feature.document.metric')}
              meterWidth="68%"
              iconClass={styles.doc}
              isAlt
              onClick={() => handleFeatureClick('document')}
            />
            <FeatureCard
              icon={<Icons.Regulation size={34} />}
              title={t('hero.feature.regulation')}
              subtitle={t('hero.feature.regulation.sub')}
              metric={t('hero.feature.regulation.metric')}
              meterWidth="100%"
              iconClass={styles.reg}
              onClick={() => handleFeatureClick('regulation')}
            />
            <FeatureCard
              icon={<Icons.DataTransform size={34} />}
              title={t('hero.feature.data')}
              subtitle={t('hero.feature.data.sub')}
              metric={t('hero.feature.data.metric')}
              meterWidth="83%"
              iconClass={styles.data}
              isAlt
              onClick={() => handleFeatureClick('data')}
            />
          </div>
        </div>
      </div>

      <div className={styles.heroBgElements}>
        <div className={`${styles.bgCircle} ${styles.bgCircle1}`}></div>
        <div className={`${styles.bgCircle} ${styles.bgCircle2}`}></div>
        <div className={styles.bgGrid}></div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, subtitle, metric, meterWidth, iconClass, isAlt = false, onClick }) => (
  <div
    className={styles.pvFeatureCard}
    onClick={onClick}
    role="button"
    tabIndex="0"
    style={{ cursor: 'pointer' }}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick?.();
      }
    }}
    aria-label={`${title} - ${subtitle}`}
  >
    <div className={`${styles.pvFeatureIcon} ${iconClass}`}>{icon}</div>
    <div className={styles.pvFeatureHead}>{title}</div>
    <div className={styles.pvFeatureSub}>{subtitle}</div>
    <div className={`${styles.pvMeter} ${isAlt ? styles.alt : ''}`}>
      <span style={{ width: meterWidth }} />
    </div>
    <div className={styles.pvMetric}>{metric}</div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
  meterWidth: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  isAlt: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hero;
