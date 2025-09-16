import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Portfolio = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: t('caseStudies.cases.pharmaA.company'),
      category: t('portfolio.filter.innovation'),
      filterKey: 'innovation',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=350&fit=crop&crop=center',
      description: t('caseStudies.cases.pharmaA.title'),
      achievements: [
        t('caseStudies.cases.pharmaA.achievements.achievement1'),
        t('caseStudies.cases.pharmaA.achievements.achievement2'),
        t('caseStudies.cases.pharmaA.achievements.achievement3')
      ],
      status: t('caseStudies.cases.pharmaA.status'),
      link: '#'
    },
    {
      id: 2,
      title: t('caseStudies.cases.biotechB.company'),
      category: t('portfolio.filter.automation'),
      filterKey: 'automation',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=350&fit=crop&crop=center',
      description: t('caseStudies.cases.biotechB.title'),
      achievements: [
        t('caseStudies.cases.biotechB.achievements.achievement1'),
        t('caseStudies.cases.biotechB.achievements.achievement2'),
        t('caseStudies.cases.biotechB.achievements.achievement3')
      ],
      status: t('caseStudies.cases.biotechB.status'),
      link: '#'
    },
    {
      id: 3,
      title: t('caseStudies.cases.consultingC.company'),
      category: t('portfolio.filter.monitoring'),
      filterKey: 'monitoring',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=350&fit=crop&crop=center',
      description: t('caseStudies.cases.consultingC.title'),
      achievements: [
        t('caseStudies.cases.consultingC.achievements.achievement1'),
        t('caseStudies.cases.consultingC.achievements.achievement2'),
        t('caseStudies.cases.consultingC.achievements.achievement3')
      ],
      status: t('caseStudies.cases.consultingC.status'),
      link: '#'
    },
    {
      id: 4,
      title: t('caseStudies.cases.pharmaD.company'),
      category: t('portfolio.filter.data'),
      filterKey: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&crop=center',
      description: t('caseStudies.cases.pharmaD.title'),
      achievements: [
        t('caseStudies.cases.pharmaD.achievements.achievement1'),
        t('caseStudies.cases.pharmaD.achievements.achievement2'),
        t('caseStudies.cases.pharmaD.achievements.achievement3')
      ],
      status: t('caseStudies.cases.pharmaD.status'),
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
