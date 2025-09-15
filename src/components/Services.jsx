import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Icons } from './Icons';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Icons.Globe,
      key: 'literature_search',
      color: 'var(--color-primary)',
    },
    {
      icon: Icons.Lightbulb,
      key: 'document_generation',
      color: 'var(--color-secondary)',
    },
    {
      icon: Icons.Palette,
      key: 'regulation_crawling',
      color: 'var(--color-accent)',
    },
    {
      icon: Icons.Smartphone,
      key: 'data_transformation',
      color: 'var(--color-success)',
    },
  ];

  return (
    <section id="services" className="section-padding" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();
  const IconComponent = service.icon;

  const featureKeys = [
    `services.feature.${service.key}_1`,
    `services.feature.${service.key}_2`,
    `services.feature.${service.key}_3`,
  ];

  return (
    <div className="service-card">
      <div className="icon-container" style={{ backgroundColor: `${service.color}20`, color: service.color }}>
        <IconComponent size={40} />
      </div>
      <h3 className="card-title">{t(`services.${service.key}`)}</h3>
      <p className="card-description">{t(`services.${service.key}_desc`)}</p>
      <div className="features-list">
        {featureKeys.map((fk, index) => (
          <span key={index} className="feature-tag">{t(fk)}</span>
        ))}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    key: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Services;
