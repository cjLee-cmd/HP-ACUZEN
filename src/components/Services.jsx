import { useTranslation } from 'react-i18next';
import { Icons } from './Icons';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Icons.Globe,
      key: 'literature_search',
      title: t('services.literature_search'),
      description: t('services.literature_search_desc'),
      color: 'var(--color-primary)',
      featureKeys: [
        'services.feature.ai_relevance',
        'services.feature.multilingual',
        'services.feature.auto_classification'
      ]
    },
    {
      icon: Icons.Lightbulb,
      key: 'document_generation',
      title: t('services.document_generation'),
      description: t('services.document_generation_desc'),
      color: 'var(--color-secondary)',
      featureKeys: [
        'services.feature.template_based',
        'services.feature.regulatory_check',
        'services.feature.history_tracking'
      ]
    },
    {
      icon: Icons.Palette,
      key: 'regulation_crawling',
      title: t('services.regulation_crawling'),
      description: t('services.regulation_crawling_desc'),
      color: 'var(--color-accent)',
      featureKeys: [
        'services.feature.change_alert',
        'services.feature.multilingual',
        'services.feature.history_tracking'
      ]
    },
  ];

  const sectionStyle = {
    padding: '6rem 0',
    background: 'rgba(249, 250, 251, 0.8)'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
    color: 'var(--text-primary)',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif'
  };

  const subtitleStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
    color: 'var(--text-muted)',
    fontSize: '1.25rem',
    maxWidth: '600px',
    margin: '0 auto 4rem auto',
    lineHeight: '1.6',
    fontFamily: 'Inter, sans-serif'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const getCardStyle = () => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.4)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    overflow: 'hidden'
  });

  const getCardHoverStyle = (color) => ({
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: `0 24px 48px ${color}20, 0 1px 0 rgba(255, 255, 255, 0.6)`,
    borderColor: `${color}40`
  });

  const getIconContainerStyle = (color) => ({
    width: '80px',
    height: '80px',
    margin: '0 auto 2rem auto',
    background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`,
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color,
    position: 'relative',
    boxShadow: `0 8px 24px ${color}20`
  });

  const serviceTitleStyle = {
    color: 'var(--text-primary)',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif'
  };

  const descStyle = {
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    margin: '0 0 2rem 0',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif'
  };

  const featuresStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center'
  };

  const featureStyle = {
    background: 'rgba(59, 130, 246, 0.08)',
    color: 'var(--text-secondary)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '500',
    fontFamily: 'Inter, sans-serif',
    lineHeight: 1.2,
    textAlign: 'center'
  };

  return (
    <section id="services" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>{t('services.title')}</h2>
        <p style={subtitleStyle}>{t('services.subtitle')}</p>
        <div style={gridStyle}>
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.key} 
                style={getCardStyle()}
                onMouseEnter={(e) => {
                  Object.assign(e.target.style, getCardHoverStyle(service.color));
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.target.style, getCardStyle());
                }}
              >
                <div style={getIconContainerStyle(service.color)}>
                  <IconComponent size={40} />
                </div>
                <h3 style={serviceTitleStyle}>{service.title}</h3>
                <p style={descStyle}>{service.description}</p>
                <div style={featuresStyle}>
                  {service.featureKeys.map((fk, index) => (
                    <span key={index} style={featureStyle}>{t(fk)}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;