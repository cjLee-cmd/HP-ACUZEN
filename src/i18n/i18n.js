import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      // Navigation
      "navigation.home": "홈",
      "navigation.company": "회사소개",
      "navigation.companyIntro": "회사개요",
      "navigation.vision": "비전",
      "navigation.team": "팀",
      "navigation.services": "서비스",
      "navigation.literatureSearch": "문헌검색",
      "navigation.documentGeneration": "문서생성",
      "navigation.regulationCrawling": "규정크롤링",
      "navigation.dataTransformation": "데이터변환",
      "navigation.contact": "연락처",
      "navigation.toggleMenu": "메뉴 토글",
      
      // Hero Section
      "hero.badge": "AI 기반 약물감시 플랫폼",
      "hero.title.main": "제약회사를 위한",
      "hero.title.highlight": "AI 약물감시 플랫폼",
      "hero.subtitle": "혁신적인 약물감시 솔루션을 통해 제약회사의 규제 준수와 환자 안전을 보장합니다. AI 기술로 효율성과 정확성을 동시에 실현하세요.",
      "hero.cta.contact": "문의하기",
      "hero.cta.about": "문서 읽기",

      // Hero Stats
      "hero.stats.accuracy": "정확도",
      "hero.stats.report_time": "보고서 작성시간 단축",
      "hero.stats.monitoring": "모니터링",

      // Hero Features
      "hero.feature.literature": "문헌 리뷰",
      "hero.feature.literature.sub": "AI 기반 문헌 심사 및 관련성 평가",
      "hero.feature.literature.metric": "99%+ 정확도",
      "hero.feature.document": "문서 생성",
      "hero.feature.document.sub": "규제 보고서 자동 생성",
      "hero.feature.document.metric": "70% 속도 향상",
      "hero.feature.regulation": "규제 크롤링",
      "hero.feature.regulation.sub": "실시간 규제 변경 모니터링",
      "hero.feature.regulation.metric": "24/7 모니터링",
      "hero.feature.data": "데이터 변환",
      "hero.feature.data.sub": "표준화된 데이터 처리 및 분석",
      "hero.feature.data.metric": "완전 자동화",
      
      // About Section
      "about.title": "우리에 대해",
      "about.description": "Acuzenic은 최신 기술과 창의적 디자인을 통해 고객의 성공을 이끌어내는 웹 개발 전문 기업입니다.",
      "about.vision": "비전",
      "about.vision_text": "디지털 혁신을 통한 더 나은 세상 구현",
      "about.mission": "미션", 
      "about.mission_text": "고객의 성공을 위한 최적의 웹 솔루션 제공",

  // Services Section
  "services.title": "핵심 서비스",
  "services.subtitle": "최첨단 기술과 글로벌 제약 시장에서의 탁월한 전문성을 바탕으로 선도적인 규제 솔루션을 제공합니다",
  "services.literature_search": "규제 문헌 감시",
  "services.literature_search_desc": "신호 탐지 워크플로를 개선하고 국제 규제 표준을 충족하는 규제 분류 알고리즘을 갖춘 고급 AI 기반 문헌 감시 시스템입니다.",
  "services.document_generation": "자동화된 규제 문서화",
  "services.document_generation_desc": "글로벌 규제 표준을 충족하는 컴플라이언스 준비 템플릿과 자동화된 품질 보증 워크플로를 갖춘 포괄적인 규제 문서 자동화 시스템입니다.",
  "services.regulation_crawling": "글로벌 규제 인텔리전스",
  "services.regulation_crawling_desc": "지능형 분류, 자동화된 알림 및 여러 관할권에 걸친 포괄적인 규제 인텔리전스를 통한 글로벌 규제 변경 모니터링 시스템입니다.",
  "services.key_features": "주요 기능",
  "services.feature.ai_relevance": "AI 관련성 스코어링",
  "services.feature.multilingual": "다국어 지원",
  "services.feature.auto_classification": "자동 분류/태깅",
  "services.feature.template_based": "템플릿 기반 생성",
  "services.feature.regulatory_check": "규제 준수 검증",
  "services.feature.change_alert": "변경사항 실시간 알림",
  "services.feature.history_tracking": "히스토리 추적",
  "services.feature.quality_validation": "데이터 품질 검증",
  "services.feature.api_integration": "API 연동",
  "services.cta.contact": "문의하기",
  "services.custom_solution": "맞춤형 솔루션이 필요하신가요?",
  "services.custom_solution_desc": "고객사의 업무 프로세스와 규제 요구사항에 최적화된 PV 솔루션을 설계/구축해드립니다.",
      
      // Portfolio Section  
      "portfolio.title": "포트폴리오",
      "portfolio.view_project": "프로젝트 보기",
      
      // Contact Section
      "contact.title": "연락하기",
      "contact.subtitle": "프로젝트에 대해 논의하고 싶으시나요?",
      "contact.name": "이름",
      "contact.email": "이메일",
      "contact.message": "메시지",
      "contact.send": "메시지 보내기",
      "contact.phone": "전화번호",
      "contact.address": "주소",
      
      // Footer
      "footer.copyright": "© 2024 Acuzenic. All rights reserved.",
      "footer.follow": "팔로우하기"
    }
  },
  en: {
    translation: {
      // Navigation
      "navigation.home": "Home",
      "navigation.company": "Company",
      "navigation.companyIntro": "About Us",
      "navigation.vision": "Vision",
      "navigation.team": "Team",
      "navigation.services": "Services",
      "navigation.literatureSearch": "Literature Search",
      "navigation.documentGeneration": "Document Generation",
      "navigation.regulationCrawling": "Regulation Crawling",
      "navigation.dataTransformation": "Data Transformation",
      "navigation.contact": "Contact",
      "navigation.toggleMenu": "Toggle Menu",
      
      // Hero Section
      "hero.badge": "AI-Powered Pharmacovigilance Platform",
      "hero.title.main": "AI-Powered Pharmacovigilance",
      "hero.title.highlight": "Platform for Pharmaceutical Companies",
      "hero.subtitle": "Leading-edge solutions for PV professionals that streamline regulatory compliance, enhance patient safety, and deliver unparalleled efficiency through AI technology.",
      "hero.cta.contact": "Contact Us",
      "hero.cta.about": "Read Documentation",

      // Hero Stats
      "hero.stats.accuracy": "Accuracy",
      "hero.stats.report_time": "Report Time Reduction",
      "hero.stats.monitoring": "Monitoring",

      // Hero Features
      "hero.feature.literature": "Literature Review",
      "hero.feature.literature.sub": "AI-powered literature screening and relevance assessment",
      "hero.feature.literature.metric": "99%+ Accuracy",
      "hero.feature.document": "Document Generation",
      "hero.feature.document.sub": "Automated regulatory report generation",
      "hero.feature.document.metric": "70% Faster",
      "hero.feature.regulation": "Regulatory Crawling",
      "hero.feature.regulation.sub": "Real-time regulatory change monitoring",
      "hero.feature.regulation.metric": "24/7 Monitoring",
      "hero.feature.data": "Data Transformation",
      "hero.feature.data.sub": "Standardized data processing and analysis",
      "hero.feature.data.metric": "Fully Automated",
      
      // About Section
      "about.title": "About Us",
      "about.description": "Acuzenic is a web development company that drives customer success through cutting-edge technology and creative design.",
      "about.vision": "Vision",
      "about.vision_text": "Creating a better world through digital innovation",
      "about.mission": "Mission",
      "about.mission_text": "Providing optimal web solutions for customer success",
      
  // Services Section
  "services.title": "Core Services",
  "services.subtitle": "Leading regulatory solutions with cutting-edge technology and unmatched expertise across global pharmaceutical markets",
  "services.literature_search": "Regulatory Literature Surveillance",
  "services.literature_search_desc": "Advanced AI-powered literature surveillance with regulatory classification algorithms that enhance signal detection workflows and meet international regulatory standards.",
  "services.document_generation": "Automated Regulatory Documentation",
  "services.document_generation_desc": "Comprehensive regulatory document automation with compliance-ready templates and automated quality assurance workflows that meet global regulatory standards.",
  "services.regulation_crawling": "Global Regulatory Intelligence",
  "services.regulation_crawling_desc": "Global regulatory change monitoring with intelligent classification, automated alerts and comprehensive regulatory intelligence across multiple jurisdictions.",
  "services.key_features": "Key Features",
  "services.feature.ai_relevance": "AI relevance scoring",
  "services.feature.multilingual": "Multilingual support",
  "services.feature.auto_classification": "Auto classification & tagging",
  "services.feature.template_based": "Template-based generation",
  "services.feature.regulatory_check": "Regulatory compliance checks",
  "services.feature.change_alert": "Real-time change alerts",
  "services.feature.history_tracking": "Version & history tracking",
  "services.feature.quality_validation": "Data quality validation",
  "services.feature.api_integration": "API integration",
  "services.cta.contact": "Contact Us",
  "services.custom_solution": "Need a custom solution?",
  "services.custom_solution_desc": "We design and implement PV solutions tailored to your workflow and regulatory requirements.",
      
      // Portfolio Section
      "portfolio.title": "Portfolio",
      "portfolio.view_project": "View Project",
      
      // Contact Section
      "contact.title": "Contact Us",
      "contact.subtitle": "Want to discuss your project?",
      "contact.name": "Name",
      "contact.email": "Email", 
      "contact.message": "Message",
      "contact.send": "Send Message",
      "contact.phone": "Phone",
      "contact.address": "Address",
      
      // Footer
      "footer.copyright": "© 2024 Acuzenic. All rights reserved.",
      "footer.follow": "Follow Us"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // react already does escaping
    },
    
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    }
  });

export default i18n;