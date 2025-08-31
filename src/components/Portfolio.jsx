import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '대형 제약회사 A사',
      category: 'PV 디지털 혁신',
      filterKey: 'innovation',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=350&fit=crop&crop=center',
      description: 'AI 기반 문헌검색으로 약물감시 업무 효율성 300% 향상',
      achievements: ['문헌검색 시간 90% 단축', '데이터 정확도 98% 달성', '규제 준수율 100% 유지'],
      status: '운영 중',
      link: '#'
    },
    {
      id: 2,
      title: '중견 바이오기업 B사',
      category: 'PV 자동화',
      filterKey: 'automation',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=350&fit=crop&crop=center',
      description: 'PV 보고서 자동 생성으로 업무 부담 70% 경감',
      achievements: ['보고서 작성시간 70% 절약', '인적 오류 99% 감소', '품질 관리 체계 강화'],
      status: '구현 중',
      link: '#'
    },
    {
      id: 3,
      title: 'PV 컨설팅 C사',
      category: '규제 모니터링',
      filterKey: 'monitoring',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=350&fit=crop&crop=center',
      description: '국내외 규정 변경사항 실시간 추적 시스템 구축',
      achievements: ['규정 변경사항 즉시 알림', '멀티 국가 규정 통합 관리', '히스토리 데이터 완벽 보존'],
      status: '운영 중',
      link: '#'
    },
    {
      id: 4,
      title: '글로벌 제약그룹 D사',
      category: '데이터 혁신',
      filterKey: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&crop=center',
      description: '식약처 원시자료 표준화로 데이터 분석 역량 강화',
      achievements: ['데이터 처리 속도 500% 향상', '표준 포맷 일원화', 'API 연동 자동화 완성'],
      status: '구현 중',
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: '전체 사례' },
    { key: 'innovation', label: 'PV 디지털 혁신' },
    { key: 'automation', label: 'PV 자동화' },
    { key: 'monitoring', label: '규제 모니터링' },
    { key: 'data', label: '데이터 혁신' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.filterKey === activeFilter);

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
    marginBottom: '3rem',
    color: '#6B7280',
    fontSize: '1.25rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    lineHeight: '1.6',
    fontFamily: 'Inter, sans-serif'
  };

  const filterContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '3rem'
  };

  const getFilterButtonStyle = (isActive) => ({
    padding: '0.75rem 1.5rem',
    background: isActive 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(255, 255, 255, 0.9)',
    color: isActive ? 'white' : '#6B7280',
    border: isActive ? 'none' : '2px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'Inter, sans-serif',
    backdropFilter: 'blur(10px)',
    boxShadow: isActive 
      ? '0 8px 24px rgba(59, 130, 246, 0.3)' 
      : '0 4px 16px rgba(0, 0, 0, 0.05)'
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const getCardStyle = () => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer'
  });

  const getCardHoverStyle = () => ({
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 24px 48px rgba(59, 130, 246, 0.15)',
    borderColor: 'rgba(59, 130, 246, 0.4)'
  });

  const imageContainerStyle = {
    position: 'relative',
    height: '240px',
    overflow: 'hidden'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.4s ease'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(30, 64, 175, 0.7) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'all 0.3s ease'
  };

  const viewButtonStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#3B82F6',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Inter, sans-serif'
  };

  const contentStyle = {
    padding: '2rem'
  };

  const statusBadgeStyle = {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    background: 'rgba(34, 197, 94, 0.1)',
    color: '#059669',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginBottom: '1rem',
    fontFamily: 'Inter, sans-serif'
  };

  const categoryStyle = {
    color: '#3B82F6',
    fontSize: '0.875rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.75rem',
    fontFamily: 'Inter, sans-serif'
  };

  const projectTitleStyle = {
    color: '#1F2937',
    marginBottom: '0.75rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '1.3',
    fontFamily: 'Inter, sans-serif'
  };

  const descriptionStyle = {
    color: '#6B7280',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontFamily: 'Inter, sans-serif'
  };

  const techStackStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const techTagStyle = {
    background: 'rgba(59, 130, 246, 0.08)',
    color: '#4B5563',
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500',
    fontFamily: 'Inter, sans-serif'
  };

  const cardFooterStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(229, 231, 235, 0.5)'
  };

  const linkStyle = {
    color: '#3B82F6',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    fontFamily: 'Inter, sans-serif'
  };

  return (
    <section id="portfolio" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>성공 사례</h2>
        <p style={subtitleStyle}>제약·바이오 기업과 함께한 약물감시 업무 혁신의 실제 성과를 확인해보세요</p>
        
        <div style={filterContainerStyle}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              style={getFilterButtonStyle(activeFilter === filter.key)}
              onClick={() => setActiveFilter(filter.key)}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.key) {
                  e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.key) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div style={gridStyle}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              style={getCardStyle()}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, getCardHoverStyle());
                const img = e.currentTarget.querySelector('img');
                const overlay = e.currentTarget.querySelector('[data-overlay]');
                if (img) img.style.transform = 'scale(1.1)';
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, getCardStyle());
                const img = e.currentTarget.querySelector('img');
                const overlay = e.currentTarget.querySelector('[data-overlay]');
                if (img) img.style.transform = 'scale(1)';
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <div style={imageContainerStyle}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy" 
                  style={imgStyle} 
                />
                <div data-overlay style={overlayStyle}>
                  <button style={viewButtonStyle}>
                    사례 상세보기
                  </button>
                </div>
              </div>
              
              <div style={contentStyle}>
                <span style={statusBadgeStyle}>{project.status}</span>
                <div style={categoryStyle}>{project.category}</div>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={descriptionStyle}>{project.description}</p>
                
                <div style={techStackStyle}>
                  {project.achievements.map((achievement, index) => (
                    <span key={index} style={techTagStyle}>✓ {achievement}</span>
                  ))}
                </div>
                
                <div style={cardFooterStyle}>
                  <a 
                    href={project.link} 
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#2563EB';
                      e.target.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#3B82F6';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    자세히 보기 →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;