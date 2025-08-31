import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      key: 'literature_search',
      title: t('services.literature_search'),
      description: t('services.literature_search_desc'),
      status: 'active',
      featureKeys: [
        'services.feature.ai_relevance',
        'services.feature.multilingual',
        'services.feature.auto_classification'
      ]
    },
    {
      id: 2,
      key: 'document_generation',
      title: t('services.document_generation'),
      description: t('services.document_generation_desc'),
      status: 'development',
      featureKeys: [
        'services.feature.template_based',
        'services.feature.regulatory_check',
        'services.feature.history_tracking'
      ]
    },
    {
      id: 3,
      key: 'regulation_crawling',
      title: t('services.regulation_crawling'),
      description: t('services.regulation_crawling_desc'),
      status: 'development',
      featureKeys: [
        'services.feature.change_alert',
        'services.feature.multilingual',
        'services.feature.history_tracking'
      ]
    },
    {
      id: 4,
      key: 'data_transformation',
      title: t('services.data_transformation'),
      description: t('services.data_transformation_desc'),
      status: 'development',
      featureKeys: [
        'services.feature.quality_validation',
        'services.feature.api_integration',
        'services.feature.template_based'
      ]
    }
  ];

  const pageStyle = {
    minHeight: '100vh',
    paddingTop: '100px',
    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
  };

  const sectionStyle = {
    padding: '4rem 0',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: 'var(--text-primary)',
    marginBottom: '1rem',
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center',
    background: 'var(--gradient-primary)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: 'var(--text-muted)',
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '800px',
    margin: '0 auto 4rem auto',
    lineHeight: '1.6',
    fontFamily: 'Inter, sans-serif'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem'
  };

  const getCardStyle = () => ({
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  });

  const getCardHoverStyle = () => ({
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 24px 48px rgba(59, 130, 246, 0.15)',
    borderColor: 'rgba(59, 130, 246, 0.4)'
  });

  const getStatusBadgeStyle = (status) => ({
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    fontFamily: 'Inter, sans-serif',
    background: status === 'active' 
      ? 'rgba(34, 197, 94, 0.1)' 
      : 'rgba(245, 158, 11, 0.1)',
    color: status === 'active' 
      ? '#059669' 
      : '#D97706',
    border: `1px solid ${status === 'active' 
      ? 'rgba(34, 197, 94, 0.2)' 
      : 'rgba(245, 158, 11, 0.2)'}`
  });

  const serviceTitleStyle = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '1rem',
    fontFamily: 'Inter, sans-serif'
  };

  const descriptionStyle = {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    lineHeight: '1.7',
    marginBottom: '2rem',
    fontFamily: 'Inter, sans-serif'
  };

  const featuresStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 0',
    fontSize: '1rem',
    color: '#4B5563',
    fontFamily: 'Inter, sans-serif'
  };

  const bulletStyle = {
    width: '8px',
    height: '8px',
    background: 'var(--gradient-primary)',
    borderRadius: '50%',
    marginRight: '1rem',
    flexShrink: 0
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        <section style={sectionStyle}>
          <h1 style={titleStyle}>{t('services.title')}</h1>
          <p style={subtitleStyle}>{t('hero.subtitle')}</p>
          
          <div style={gridStyle}>
            {services.map((service) => (
              <div 
                key={service.id} 
                style={getCardStyle()}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, getCardHoverStyle());
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, getCardStyle());
                }}
              >
                <div style={getStatusBadgeStyle(service.status)}>
                  {service.status === 'active' ? '서비스 중' : '구현 중'}
                </div>
                
                <h3 style={serviceTitleStyle}>{service.title}</h3>
                <p style={descriptionStyle}>{service.description}</p>
                
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#3B82F6',
                    marginBottom: '1rem',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {t('services.key_features')}
                  </h4>
                  <ul style={featuresStyle}>
                    {service.featureKeys.map((fk, index) => (
                      <li key={index} style={featureItemStyle}>
                        <div style={bulletStyle}></div>
                        {t(fk)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            borderRadius: '20px',
            padding: '3rem',
            marginTop: '4rem',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              {t('services.custom_solution')}
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              {t('services.custom_solution_desc')}
            </p>
            <button
              style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
              }}
            >
              {t('services.cta.contact')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;