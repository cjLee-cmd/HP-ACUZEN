import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  const pageStyle = {
    minHeight: '100vh',
    paddingTop: '100px',
    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
  };

  const sectionStyle = {
    padding: '4rem 0',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: '2rem',
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const contentStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
    marginBottom: '3rem'
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#4B5563',
    marginBottom: '2rem',
    fontFamily: 'Inter, sans-serif'
  };

  const highlightStyle = {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    marginTop: '2rem'
  };

  const valuesStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const valueCardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  };

  const valueCardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#3B82F6',
    marginBottom: '1rem',
    fontFamily: 'Inter, sans-serif'
  };

  const valueCardTextStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#6B7280',
    fontFamily: 'Inter, sans-serif'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        <section style={sectionStyle}>
          <h1 style={titleStyle}>회사 소개</h1>
          
          <div style={contentStyle}>
            <p style={paragraphStyle}>
              <strong>Acuzenic</strong>은 인공지능(AI)과 데이터 기반 혁신을 통해 제약·바이오 산업의 약물감시(PV) 업무를
              고도화하는 전문 기업입니다. 최고 수준의 AI/DX 전문가와 PV 실무진이 협업하여 규제 준수와 품질을 동시에
              만족시키는 차세대 통합 PV 플랫폼을 제공합니다.
            </p>

            <p style={paragraphStyle}>
              복잡한 글로벌 규제 환경과 방대한 안전성 데이터 처리 문제를 AI 자동화, 지능형 분류, 규정 모니터링,
              데이터 표준화 기술로 해결하며 고객 맞춤형 워크플로 최적화를 통해 운영 효율성과 데이터 신뢰성을 극대화합니다.
            </p>

            <div style={highlightStyle}>
              <p style={{...paragraphStyle, marginBottom: 0, fontWeight: '600', color: '#1F2937'}}>
                신뢰 · 혁신 · 전문성을 기반으로 글로벌 규제 대응력과 환자 안전 중심의 가치 실현을 지원합니다.
              </p>
            </div>
          </div>

          <div style={valuesStyle}>
            <div 
              style={valueCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
              }}
            >
              <h3 style={valueCardTitleStyle}>신뢰</h3>
              <p style={valueCardTextStyle}>
                고객과의 신뢰를 바탕으로 투명하고 책임감 있는 서비스를 제공합니다.
              </p>
            </div>

            <div 
              style={valueCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
              }}
            >
              <h3 style={valueCardTitleStyle}>혁신</h3>
              <p style={valueCardTextStyle}>
                최신 AI 기술과 데이터 과학을 활용하여 지속적인 혁신을 추구합니다.
              </p>
            </div>

            <div 
              style={valueCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.06)';
              }}
            >
              <h3 style={valueCardTitleStyle}>전문성</h3>
              <p style={valueCardTextStyle}>
                약물감시 분야의 깊은 전문 지식과 풍부한 경험을 바탕으로 최고의 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;