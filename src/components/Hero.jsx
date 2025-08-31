import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { Icons } from './Icons';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">AI Pharmacovigilance Platform</span>
          </div>

          <h1 className="hero-title">
            <span className="title-main">차세대 약물감시</span>
            <span className="title-highlight">AI 자동화 & 규제준수</span>
          </h1>

          <p className="hero-subtitle">
            문헌검색 · 문서생성 · 규정크롤링 · 식약처 원시자료 변환까지 하나의 지능형 워크플로로 통합하여
            PV 운영 효율성과 규제 대응 속도를 비약적으로 향상시킵니다.
          </p>
          
          <div className="hero-actions">
            <button onClick={scrollToContact} className="btn btn-primary">
              문의하기
            </button>
            <button onClick={goToAbout} className="btn btn-secondary">
              회사 소개
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">99%+</div>
              <div className="stat-label">정확도(문헌 스크리닝)</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">70%↓</div>
              <div className="stat-label">보고서 작성시간</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">규정 모니터링</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual pv-grid-visual">
          <div className="pv-feature-grid">
            <div className="pv-feature-card">
              <div className="pv-feature-icon lit"><Icons.Literature size={34} /></div>
              <div className="pv-feature-head">문헌검색</div>
              <div className="pv-feature-sub">실시간 스크리닝</div>
              <div className="pv-meter"><span style={{width:'92%'}} /></div>
              <div className="pv-metric">처리속도 4.5x</div>
            </div>
            <div className="pv-feature-card">
              <div className="pv-feature-icon doc"><Icons.DocumentAI size={34} /></div>
              <div className="pv-feature-head">문서생성</div>
              <div className="pv-feature-sub">규제 템플릿</div>
              <div className="pv-meter alt"><span style={{width:'68%'}} /></div>
              <div className="pv-metric">작성시간 -70%</div>
            </div>
            <div className="pv-feature-card">
              <div className="pv-feature-icon reg"><Icons.Regulation size={34} /></div>
              <div className="pv-feature-head">규정크롤링</div>
              <div className="pv-feature-sub">24/7 변경 추적</div>
              <div className="pv-meter"><span style={{width:'100%'}} /></div>
              <div className="pv-metric">지연 0분 알림</div>
            </div>
            <div className="pv-feature-card">
              <div className="pv-feature-icon data"><Icons.DataTransform size={34} /></div>
              <div className="pv-feature-head">데이터 변환</div>
              <div className="pv-feature-sub">표준 포맷 정규화</div>
              <div className="pv-meter alt"><span style={{width:'83%'}} /></div>
              <div className="pv-metric">검증 정확도 99%</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-grid"></div>
      </div>
    </section>
  );
};

export default Hero;