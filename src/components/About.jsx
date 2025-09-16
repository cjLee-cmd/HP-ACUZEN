import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Icons } from './Icons';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '100+', label: t('about.stats.projects') },
    { number: '50+', label: t('about.stats.clients') },
    { number: '5Y+', label: t('about.stats.experience') },
    { number: '24/7', label: t('about.stats.support') },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid-layout">
          <div>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">{t('about.subtitle')}</p>
            <p className="section-description">{t('about.description')}</p>
          </div>

          <div className="values-grid">
            <ValueCard
              icon={<Icons.Target size={40} />}
              title={t('about.vision')}
              text={t('about.vision_text')}
            />
            <ValueCard
              icon={<Icons.Rocket size={40} />}
              title={t('about.mission')}
              text={t('about.mission_text')}
            />
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, text }) => (
  <div className="value-card">
    <div className="icon-container">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{text}</p>
  </div>
);

ValueCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default About;
