import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icons } from './Icons';

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      icon: Icons.Globe,
      key: 'literature_search',
      color: 'var(--color-primary)',
      link: { external: true, href: 'http://acuzenic.com/' },
    },
    {
      icon: Icons.Lightbulb,
      key: 'document_generation',
      color: 'var(--color-secondary)',
      link: { external: true, href: 'https://cjlee-cmd.github.io/acuzen_ICBM/' },
    },
    {
      icon: Icons.Palette,
      key: 'regulation_crawling',
      color: 'var(--color-accent)',
      link: { route: '/document-crawling' },
    },
    {
      icon: Icons.Smartphone,
      key: 'data_transformation',
      color: 'var(--color-success)',
      link: { route: '/data-transformation' },
    },
  ];

  const handleServiceClick = (service) => {
    console.log('Service clicked:', service);
    if (service.link.external && service.link.href) {
      console.log('Opening external link:', service.link.href);
      window.open(service.link.href, '_blank', 'noopener,noreferrer');
    } else if (service.link.route) {
      console.log('Navigating to:', service.link.route);
      navigate(service.link.route);
    }
  };

  return (
    <section id="services" className="section-padding" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} onServiceClick={handleServiceClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, onServiceClick }) => {
  const { t } = useTranslation();
  const IconComponent = service.icon;

  const featureKeys = [
    `services.feature.${service.key}_1`,
    `services.feature.${service.key}_2`,
    `services.feature.${service.key}_3`,
  ];

  return (
    <div
      className="service-card card-interactive"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Card clicked directly');
        onServiceClick(service);
      }}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onServiceClick(service);
        }
      }}
      aria-label={t(`services.${service.key}`) + ' - ' + t(`services.${service.key}_desc`)}
      style={{ cursor: 'pointer' }}
    >
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
    link: PropTypes.shape({
      external: PropTypes.bool,
      href: PropTypes.string,
      route: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onServiceClick: PropTypes.func.isRequired,
};

export default Services;
