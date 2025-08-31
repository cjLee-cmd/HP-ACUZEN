const Footer = () => {

  const socialLinks = [
    { name: '깃허브', url: '#' },
    { name: '링크드인', url: '#' },
    { name: '트위터', url: '#' },
    { name: '인스타그램', url: '#' }
  ];

  const footerStyle = {
    background: 'var(--gradient-primary)',
    backdropFilter: 'blur(20px)',
    color: 'var(--color-navy-100)',
    padding: '4rem 0 2rem',
    marginTop: '4rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const footerBgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(29, 78, 216, 0.08) 0%, transparent 60%)',
    zIndex: 1
  };

  const contentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '4rem',
    marginBottom: '3rem',
    position: 'relative',
    zIndex: 2
  };

  const brandSectionStyle = {
    maxWidth: '400px'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '2rem'
  };

  const logoIconStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'var(--gradient-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif'
  };

  const logoTextStyle = {
    color: 'var(--text-white)',
    fontSize: '2rem',
    marginBottom: '1rem',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif'
  };

  const brandTextStyle = {
    color: 'var(--color-navy-300)',
    lineHeight: '1.7',
    margin: '0 0 2rem 0',
    fontFamily: 'Inter, sans-serif'
  };

  const linksStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem'
  };

  const sectionTitleStyle = {
    color: 'var(--text-white)',
    marginBottom: '1.5rem',
    fontWeight: '700',
    fontSize: '1.2rem',
    fontFamily: 'Inter, sans-serif'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  };

  const listItemStyle = {
    marginBottom: '0.75rem'
  };

  const linkStyle = {
    color: '#94a3b8',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.95rem'
  };

  const socialSectionStyle = {
    textAlign: 'center'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  };

  const getSocialLinkStyle = () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '12px',
    color: '#3B82F6',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)'
  });

  const bottomStyle = {
    paddingTop: '2rem',
    borderTop: '1px solid rgba(148, 163, 184, 0.15)',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2
  };

  const copyrightStyle = {
    color: '#94a3b8',
    margin: '0',
    fontSize: '0.9rem',
    fontFamily: 'Inter, sans-serif'
  };

  const newsletterStyle = {
    background: 'rgba(59, 130, 246, 0.05)',
    border: '1px solid rgba(59, 130, 246, 0.15)',
    borderRadius: '16px',
    padding: '2rem',
    marginBottom: '2rem',
    backdropFilter: 'blur(10px)'
  };

  const newsletterTitleStyle = {
    color: '#f1f5f9',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    fontFamily: 'Inter, sans-serif'
  };

  const newsletterTextStyle = {
    color: '#94a3b8',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
    fontFamily: 'Inter, sans-serif'
  };

  const inputGroupStyle = {
    display: 'flex',
    gap: '0.75rem'
  };

  const emailInputStyle = {
    flex: 1,
    padding: '0.75rem 1rem',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '8px',
    color: '#f1f5f9',
    fontSize: '0.9rem',
    fontFamily: 'Inter, sans-serif'
  };

  const subscribeButtonStyle = {
    padding: '0.75rem 1.5rem',
    background: 'var(--gradient-primary)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif'
  };

  return (
    <footer style={footerStyle}>
      <div style={footerBgStyle}></div>
      
      <div className="container">
        <div style={contentStyle}>
          <div style={brandSectionStyle}>
            <div style={logoStyle}>
              <div style={logoIconStyle}>A</div>
              <span style={logoTextStyle}>Acuzenic</span>
            </div>
            <p style={brandTextStyle}>AI 기반 실시간 약물감시(PV)·신호탐지·규제준수를 통합한 플랫폼을 제공합니다. 환자 안전과 규제 대응 속도가 우리의 핵심 가치입니다.</p>
            
            <div style={newsletterStyle}>
              <h4 style={newsletterTitleStyle}>뉴스레터 구독</h4>
              <p style={newsletterTextStyle}>최신 소식과 업데이트를 받아보세요</p>
              <div style={inputGroupStyle}>
                <input
                  type="email"
                  placeholder="이메일 주소"
                  style={emailInputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3B82F6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                  }}
                />
                <button
                  style={subscribeButtonStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  구독
                </button>
              </div>
            </div>
          </div>

          <div style={linksStyle}>
            <div>
              <h4 style={sectionTitleStyle}>약물감시 서비스</h4>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <a 
                    href="#services" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    문헌/데이터 통합
                  </a>
                </li>
                <li style={listItemStyle}>
                  <a 
                    href="#services" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    이상사례 신호탐지
                  </a>
                </li>
                <li style={listItemStyle}>
                  <a 
                    href="#services" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    규제 문서 자동화
                  </a>
                </li>
                <li style={listItemStyle}>
                  <a 
                    href="#services" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    PV 컴플라이언스
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={sectionTitleStyle}>플랫폼</h4>
              <ul style={listStyle}>
                <li style={listItemStyle}>
                  <a 
                    href="#about" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    회사 소개
                  </a>
                </li>
                <li style={listItemStyle}>
                  <a 
                    href="#portfolio" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    기능 개요
                  </a>
                </li>
                <li style={listItemStyle}>
                  <a 
                    href="#contact" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    문의
                  </a>
                </li>
                <li style={listItemStyle}>
                  <a 
                    href="#" 
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                    onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                  >
                    파트너십
                  </a>
                </li>
              </ul>
            </div>

            <div style={socialSectionStyle}>
              <h4 style={sectionTitleStyle}>소셜 미디어</h4>
              <div style={socialLinksStyle}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    style={getSocialLinkStyle()}
                    aria-label={link.name}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(59, 130, 246, 0.2)';
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {link.name.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={bottomStyle}>
          <p style={copyrightStyle}>© 2024 Acuzenic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;