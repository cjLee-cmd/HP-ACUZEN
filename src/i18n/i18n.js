import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      // Navigation
      "nav.home": "홈",
      "nav.about": "소개",
      "nav.services": "서비스",
      "nav.portfolio": "포트폴리오", 
      "nav.contact": "연락처",
      
      // Hero Section
      "hero.title": "혁신적인 웹 솔루션",
      "hero.subtitle": "당신의 비즈니스를 위한 맞춤형 디지털 경험을 제공합니다",
      "hero.cta": "지금 시작하기",
      "hero.learn_more": "자세히 알아보기",
      
      // About Section
      "about.title": "우리에 대해",
      "about.description": "Acuzenic은 최신 기술과 창의적 디자인을 통해 고객의 성공을 이끌어내는 웹 개발 전문 기업입니다.",
      "about.vision": "비전",
      "about.vision_text": "디지털 혁신을 통한 더 나은 세상 구현",
      "about.mission": "미션", 
      "about.mission_text": "고객의 성공을 위한 최적의 웹 솔루션 제공",
      
  // Services Section (PV 전용)
  "services.title": "서비스",
  "services.literature_search": "문헌검색",
  "services.literature_search_desc": "AI 기반 약물감시 관련 최신 의학·과학 문헌의 자동 수집·선별 및 관련성 평가",
  "services.document_generation": "문서생성",
  "services.document_generation_desc": "규제 기준을 충족하는 표준 PV 보고서 및 문서를 자동 생성",
  "services.regulation_crawling": "규정크롤링",
  "services.regulation_crawling_desc": "국내외 규제/가이드라인 변경 사항의 실시간 크롤링 및 알림",
  "services.data_transformation": "식약처 원시자료 변환",
  "services.data_transformation_desc": "식약처 등 공공기관 원시 데이터를 표준 분석 포맷으로 자동 정규화",
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
      "nav.home": "Home",
      "nav.about": "About", 
      "nav.services": "Services",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      
      // Hero Section
      "hero.title": "Innovative Web Solutions",
      "hero.subtitle": "We provide customized digital experiences for your business",
      "hero.cta": "Get Started",
      "hero.learn_more": "Learn More",
      
      // About Section
      "about.title": "About Us",
      "about.description": "Acuzenic is a web development company that drives customer success through cutting-edge technology and creative design.",
      "about.vision": "Vision",
      "about.vision_text": "Creating a better world through digital innovation",
      "about.mission": "Mission",
      "about.mission_text": "Providing optimal web solutions for customer success",
      
  // Services Section (PV specific)
  "services.title": "Services",
  "services.literature_search": "Literature Search",
  "services.literature_search_desc": "AI-driven automated collection, screening and relevance scoring of PV-related medical & scientific literature",
  "services.document_generation": "Document Generation",
  "services.document_generation_desc": "Automated creation of standardized PV reports and regulatory compliant documents",
  "services.regulation_crawling": "Regulation Crawling",
  "services.regulation_crawling_desc": "Real-time tracking & alerts for global pharmacovigilance regulations and guidance changes",
  "services.data_transformation": "MFDS Raw Data Transformation",
  "services.data_transformation_desc": "Automated normalization of MFDS & public authority raw data into analysis-ready standard formats",
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