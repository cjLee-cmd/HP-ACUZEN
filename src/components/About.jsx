import { useTranslation } from 'react-i18next';
import { Icons } from './Icons';

const About = () => {
  const { t } = useTranslation();

  const sectionStyle = {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#1F2937',
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif'
  };

  const subtitleStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
    color: '#6B7280',
    fontSize: '1.25rem',
    fontWeight: '400',
    maxWidth: '600px',
    margin: '0 auto 4rem auto',
    lineHeight: '1.6'
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '4rem',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    color: '#4B5563',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto 3rem auto',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif'
  };

  const valuesStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '3rem 2rem',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.08), 0 1px 0 rgba(255, 255, 255, 0.4)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const cardHoverStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 48px rgba(59, 130, 246, 0.15), 0 1px 0 rgba(255, 255, 255, 0.6)'
  };

  const iconContainerStyle = {
    width: '80px',
    height: '80px',
    margin: '0 auto 2rem auto',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.25)',
    color: 'white'
  };

  const cardTitleStyle = {
    color: '#1F2937',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif'
  };

  const cardTextStyle = {
    color: '#6B7280',
    lineHeight: '1.7',
    margin: '0',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif'
  };

  const stats = [
    { number: '100+', label: '성공한 프로젝트' },
    { number: '50+', label: '만족한 고객사' },
    { number: '5년+', label: '업계 경험' },
    { number: '24/7', label: '고객 지원' }
  ];

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '4rem',
    padding: '3rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '24px',
    color: 'white'
  };

  const statItemStyle = {
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    fontFamily: 'Inter, sans-serif'
  };

  const statLabelStyle = {
    fontSize: '1rem',
    opacity: '0.9',
    fontFamily: 'Inter, sans-serif'
  };

  return (
    <section id="about" style={sectionStyle}>
      <div className="container">
        <div style={contentStyle}>
          <div>
            <h2 style={titleStyle}>{t('about.title')}</h2>
            <p style={subtitleStyle}>혁신과 창의성으로 디지털 미래를 만들어갑니다</p>
            <p style={descriptionStyle}>{t('about.description')}</p>
          </div>
          
          <div style={valuesStyle}>
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, cardHoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, cardStyle);
              }}
            >
              <div style={iconContainerStyle}>
                <Icons.Target size={40} />
              </div>
              <h3 style={cardTitleStyle}>{t('about.vision')}</h3>
              <p style={cardTextStyle}>{t('about.vision_text')}</p>
            </div>
            <div 
              style={cardStyle}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, cardHoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, cardStyle);
              }}
            >
              <div style={iconContainerStyle}>
                <Icons.Rocket size={40} />
              </div>
              <h3 style={cardTitleStyle}>{t('about.mission')}</h3>
              <p style={cardTextStyle}>{t('about.mission_text')}</p>
            </div>
          </div>

          <div style={statsStyle}>
            {stats.map((stat, index) => (
              <div key={index} style={statItemStyle}>
                <div style={statNumberStyle}>{stat.number}</div>
                <div style={statLabelStyle}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;