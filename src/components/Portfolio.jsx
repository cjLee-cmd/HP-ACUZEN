import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '대형 제약회사 A사',
      category: t('portfolio.filter.innovation'),
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
      category: t('portfolio.filter.automation'),
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
      category: t('portfolio.filter.monitoring'),
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
      category: t('portfolio.filter.data'),
      filterKey: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&crop=center',
      description: '식약처 원시자료 표준화로 데이터 분석 역량 강화',
      achievements: ['데이터 처리 속도 500% 향상', '표준 포맷 일원화', 'API 연동 자동화 완성'],
      status: '구현 중',
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: t('portfolio.filter.all') },
    { key: 'innovation', label: t('portfolio.filter.innovation') },
    { key: 'automation', label: t('portfolio.filter.automation') },
    { key: 'monitoring', label: t('portfolio.filter.monitoring') },
    { key: 'data', label: t('portfolio.filter.data') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.filterKey === activeFilter);

  return (
    <section id="portfolio" className="section-padding" aria-labelledby="portfolio-title">
      <div className="container">
        <h2 id="portfolio-title" className="section-title">{t('portfolio.title')}</h2>
        <p className="section-subtitle">{t('portfolio.subtitle')}</p>
        
        <div className="filter-container">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  return (
    <div className="project-card">
      <div className="image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
          className="project-image"
        />
        <div className="image-overlay">
          <button className="view-button">{t('portfolio.view_case')}</button>
        </div>
      </div>
      
      <div className="card-content">
        <span className="status-badge">{project.status}</span>
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="tech-stack">
          {project.achievements.map((achievement, index) => (
            <span key={index} className="tech-tag">✓ {achievement}</span>
          ))}
        </div>
        
        <div className="card-footer">
          <a href={project.link} className="details-link">
            {t('view_details')} →
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
    status: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Portfolio;
