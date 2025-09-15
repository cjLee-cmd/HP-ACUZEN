import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const en = {
  common: {
    loading: "Loading...",
    error: "Error occurred",
    submit: "Submit",
    cancel: "Cancel",
    contact: "Contact",
    learnMore: "Learn More"
  },
  navigation: {
    home: "Home",
    company: "Company",
    companyIntro: "About Us",
    vision: "Vision & Mission",
    team: "Our Team",
    services: "Services",
    literatureSearch: "Literature Search",
    documentGeneration: "Document Generation (In Development)",
    regulationCrawling: "Regulation Crawling (In Development)",
    dataTransformation: "FDA Data Transformation (In Development)",
    contact: "Contact",
    toggleMenu: "Toggle mobile menu"
  },
  hero: {
    badge: "AI Pharmacovigilance Platform",
    title: {
      main: "AI-Powered Pharmacovigilance Platform for",
      highlight: "Pharmaceutical Companies"
    },
    subtitle: "Automated literature surveillance, signal detection, and regulatory reporting for ICH-compliant pharmacovigilance operations. Streamline PV workflows while ensuring regulatory compliance across global markets.",
    cta: {
      contact: "Contact Us",
      about: "About Company"
    },
    stats: {
      accuracy: "Literature Screening Accuracy (Validated against regulatory standards)",
      report_time: "Report Generation Time (FDA submission ready)",
      monitoring: "Regulatory Compliance Monitoring (Multi-jurisdictional coverage)"
    },
    feature: {
      literature: "Literature Search",
      "literature.sub": "Real-time Screening", 
      "literature.metric": "4.5x Processing Speed",
      document: "Document Generation",
      "document.sub": "Regulatory Templates",
      "document.metric": "70% Time Reduction",
      regulation: "Regulation Crawling",
      "regulation.sub": "24/7 Change Tracking",
      "regulation.metric": "0-minute Delay Alerts",
      data: "Data Transformation",
      "data.sub": "Standard Format Normalization", 
      "data.metric": "99% Validation Accuracy"
    }
  },
  features: {
    literatureSearch: {
      title: "Literature Search",
      subtitle: "Real-time Screening",
      speed: "4.5x Processing Speed"
    },
    documentGeneration: {
      title: "Document Generation",
      subtitle: "Regulatory Templates",
      efficiency: "70% Time Reduction"
    },
    regulationCrawling: {
      title: "Regulation Crawling",
      subtitle: "24/7 Change Tracking",
      alert: "0-minute Delay Alerts"
    },
    dataTransformation: {
      title: "Data Transformation",
      subtitle: "Standard Format Normalization",
      accuracy: "99% Validation Accuracy"
    }
  },
  services: {
    title: "Core Services",
    subtitle: "Leading customer success with cutting-edge technology and creative solutions",
    // Service titles for main display
    literature_search: "Regulatory Literature Surveillance",
    document_generation: "Automated Regulatory Documentation",
    regulation_crawling: "Global Regulatory Monitoring",
    data_transformation: "Regulatory Data Standardization",
    // Service descriptions
    literature_search_desc: "AI-powered surveillance of medical literature for pharmacovigilance signal detection, compliant with ICH E2E guidelines and regulatory submission requirements.",
    document_generation_desc: "Generate compliant pharmacovigilance reports and regulatory submissions using validated templates and 21 CFR Part 11 electronic workflows.",
    regulation_crawling_desc: "Real-time monitoring of domestic and international regulatory guideline changes with immediate notification systems.",
    data_transformation_desc: "Automatically normalize raw data from FDA and other regulatory agencies into standard analysis formats with CDISC compliance.",
    // Service features
    feature: {
      literature_search_1: "ICH E2E compliant literature review protocols",
      literature_search_2: "Automated signal detection algorithms",
      literature_search_3: "Regulatory-grade evidence synthesis",
      document_generation_1: "21 CFR Part 11 validated workflows",
      document_generation_2: "ICH-compliant report templates",
      document_generation_3: "Electronic signature integration",
      regulation_crawling_1: "Multi-jurisdictional regulatory tracking",
      regulation_crawling_2: "Automated compliance alerts",
      regulation_crawling_3: "Historical data preservation",
      data_transformation_1: "CDISC/FDA compliant data formats",
      data_transformation_2: "Automated data quality validation",
      data_transformation_3: "API integration capabilities"
    },
    literatureSearch: {
      title: "Regulatory Literature Surveillance",
      description: "AI-powered surveillance of medical literature for pharmacovigilance signal detection, compliant with ICH E2E guidelines and regulatory submission requirements.",
      features: {
        feature1: "ICH E2E compliant literature review protocols",
        feature2: "Automated signal detection algorithms",
        feature3: "Regulatory-grade evidence synthesis"
      }
    },
    documentGeneration: {
      title: "Automated Regulatory Documentation",
      description: "Generate compliant pharmacovigilance reports and regulatory submissions using validated templates and 21 CFR Part 11 electronic workflows.",
      features: {
        feature1: "21 CFR Part 11 validated workflows",
        feature2: "ICH-compliant report templates",
        feature3: "Electronic signature integration"
      }
    },
    regulationCrawling: {
      title: "Global Regulatory Monitoring",
      description: "Real-time monitoring of domestic and international regulatory guideline changes with immediate notification systems.",
      features: {
        feature1: "Multi-jurisdictional regulatory tracking",
        feature2: "Automated compliance alerts",
        feature3: "Historical data preservation"
      }
    },
    dataTransformation: {
      title: "Regulatory Data Standardization", 
      description: "Automatically normalize raw data from FDA and other regulatory agencies into standard analysis formats with CDISC compliance.",
      features: {
        feature1: "CDISC/FDA compliant data formats",
        feature2: "Automated data quality validation",
        feature3: "API integration capabilities"
      }
    }
  },
  caseStudies: {
    title: "Success Stories",
    subtitle: "Discover real-world pharmacovigilance transformation achievements with pharmaceutical and biotech companies",
    categories: {
      all: "All Cases",
      digital: "PV Digital Transformation",
      automation: "PV Automation", 
      monitoring: "Regulatory Monitoring",
      innovation: "Data Innovation"
    },
    cases: {
      pharmaA: {
        company: "Large Pharmaceutical Company",
        category: "PV Digital Transformation",
        status: "Operational",
        title: "300% improvement in pharmacovigilance efficiency through AI-powered literature surveillance",
        achievements: {
          achievement1: "90% reduction in literature screening time",
          achievement2: "98% data accuracy with regulatory validation",
          achievement3: "100% compliance rate maintained across submissions"
        }
      },
      biotechB: {
        company: "Mid-size Biotech Company",
        category: "PV Automation",
        status: "Implementation",
        title: "70% reduction in PV report generation workload through automation",
        achievements: {
          achievement1: "70% time savings in report generation",
          achievement2: "99% reduction in human errors",
          achievement3: "Enhanced quality management system"
        }
      },
      consultingC: {
        company: "PV Consulting Firm",
        category: "Regulatory Monitoring",
        status: "Operational", 
        title: "Real-time tracking system for domestic and international regulatory changes",
        achievements: {
          achievement1: "Immediate regulatory change notifications",
          achievement2: "Integrated multi-country regulation management",
          achievement3: "Complete historical data preservation"
        }
      },
      pharmaD: {
        company: "Global Pharmaceutical Group",
        category: "Data Innovation",
        status: "Implementation",
        title: "Enhanced data analysis capabilities through FDA raw data standardization",
        achievements: {
          achievement1: "500% improvement in data processing speed",
          achievement2: "Unified standard format implementation",
          achievement3: "Completed API integration automation"
        }
      }
    },
    cta: "View Details →",
    detailButton: "View Case Details"
  },
  portfolio: {
    title: "Success Stories",
    subtitle: "Discover real-world pharmacovigilance transformation achievements with pharmaceutical and biotech companies",
    filter: {
      all: "All Cases",
      innovation: "PV Innovation",
      automation: "PV Automation", 
      monitoring: "Regulatory Monitoring",
      data: "Data Innovation"
    },
    view_case: "View Details"
  },
  view_details: "View Details",
  contact: {
    title: "Contact Us",
    subtitle: "Receive customized consultation for pharmacovigilance transformation solutions for pharmaceutical and biotech companies",
    biz_inquiry: "Business Inquiries",
    solution_consulting: "PV Solution Consultation",
    headquarters: "Headquarters",
    address_detail: "15F AI Tower, 123 Teheran-ro, Gangnam-gu, Seoul",
    info: {
      business: {
        title: "Business Inquiries",
        email: "business@acuzenic.com"
      },
      consulting: {
        title: "PV Solution Consultation", 
        phone: "+82 2-1234-5678"
      },
      headquarters: {
        title: "Headquarters",
        address: "15F AI Tower, 123 Teheran-ro, Gangnam-gu, Seoul"
      }
    },
    form: {
      title: "Contact Form",
      name: "Name",
      email: "Email", 
      message: "Message",
      placeholder: "Please describe your current PV operations and specific solution requirements...",
      messagePlaceholder: "Please describe your current PV operations and specific solution requirements...",
      inquiryType: "Inquiry Type",
      inquiryTypes: {
        general: "General Business Inquiry",
        regulatory: "Regulatory Affairs Consultation", 
        demo: "Technical Demo Request",
        partnership: "Partnership Discussion",
        compliance: "Compliance Validation"
      },
      submit: "Send Message",
      submitting: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again."
    }
  },
  footer: {
    company: {
      name: "Acuzenic",
      description: "We provide an integrated platform for AI-based real-time pharmacovigilance (PV), signal detection, and regulatory compliance. Patient safety and regulatory response speed are our core values."
    },
    brand_motto: "We provide an integrated platform for AI-based real-time pharmacovigilance (PV), signal detection, and regulatory compliance. Patient safety and regulatory response speed are our core values.",
    newsletter: {
      title: "Newsletter Subscription",
      subtitle: "Stay updated with our latest news and updates",
      placeholder: "Email address",
      email_label: "Email address for newsletter",
      subscribe: "Subscribe"
    },
    links: {
      pv_services: "Pharmacovigilance Services",
      integration: "Literature/Data Integration",
      signal_detection: "Adverse Event Signal Detection", 
      automation: "Regulatory Document Automation",
      compliance: "PV Compliance",
      platform: "Platform",
      about: "About Us",
      features: "Feature Overview",
      contact: "Contact",
      partnership: "Partnerships",
      pvServices: "Pharmacovigilance Services",
      literatureData: "Literature/Data Integration",
      signalDetection: "Adverse Event Signal Detection", 
      regulatoryDocs: "Regulatory Document Automation",
      pvCompliance: "PV Compliance",
      aboutUs: "About Us",
      partnerships: "Partnerships"
    },
    social: {
      title: "Social Media"
    },
    social_media: "Social Media",
    copyright: "© 2024 Acuzenic. All rights reserved."
  },
  compliance: {
    title: "Regulatory Compliance & Certifications",
    subtitle: "Meeting the highest standards for pharmaceutical data security, quality, and regulatory compliance",
    iso27001: "Information Security Management",
    soc2: "Security & Availability Controls",
    gdpr: "Data Protection Compliance",
    cfr21: "FDA Electronic Records",
    gvp: "Pharmacovigilance Practices",
    ich: "International Safety Guidelines",
    verified: "Verified Compliance",
    footer: "All certifications are regularly audited and maintained.",
    contact: "Contact us for compliance documentation"
  }
};

// Korean translations (existing content)
const ko = {
  common: {
    loading: "로딩 중...",
    error: "오류가 발생했습니다",
    submit: "제출",
    cancel: "취소",
    contact: "문의",
    learnMore: "더 알아보기"
  },
  navigation: {
    home: "홈",
    company: "회사",
    companyIntro: "회사 소개",
    vision: "비전 & 미션",
    team: "팀 소개",
    services: "서비스",
    literatureSearch: "문헌검색",
    documentGeneration: "문서생성(구현중)",
    regulationCrawling: "규정크롤링(구현중)",
    dataTransformation: "식약처 원시자료 변환(구현중)",
    contact: "연락처",
    toggleMenu: "모바일 메뉴 토글"
  },
  hero: {
    badge: "AI 약물감시 플랫폼",
    title: {
      main: "차세대 약물감시AI",
      highlight: "자동화 & 규제준수"
    },
    subtitle: "문헌검색 · 문서생성 · 규정크롤링 · 식약처 원시자료 변환까지 하나의 지능형 워크플로로 통합하여 PV 운영 효율성과 규제 대응 속도를 비약적으로 향상시킵니다.",
    cta: {
      contact: "문의하기",
      about: "회사 소개"
    },
    stats: {
      accuracy: "정확도(문헌 스크리닝)",
      report_time: "보고서 작성시간",
      monitoring: "규정 모니터링"
    },
    feature: {
      literature: "문헌검색",
      "literature.sub": "실시간 스크리닝",
      "literature.metric": "처리속도 4.5x",
      document: "문서생성",
      "document.sub": "규제 템플릿",
      "document.metric": "작성시간 -70%",
      regulation: "규정크롤링",
      "regulation.sub": "24/7 변경 추적",
      "regulation.metric": "지연 0분 알림",
      data: "데이터 변환",
      "data.sub": "표준 포맷 정규화",
      "data.metric": "검증 정확도 99%"
    }
  },
  features: {
    literatureSearch: {
      title: "문헌검색",
      subtitle: "실시간 스크리닝",
      speed: "처리속도 4.5x"
    },
    documentGeneration: {
      title: "문서생성",
      subtitle: "규제 템플릿",
      efficiency: "작성시간 -70%"
    },
    regulationCrawling: {
      title: "규정크롤링",
      subtitle: "24/7 변경 추적",
      alert: "지연 0분 알림"
    },
    dataTransformation: {
      title: "데이터 변환",
      subtitle: "표준 포맷 정규화",
      accuracy: "검증 정확도 99%"
    }
  },
  services: {
    title: "핵심 서비스",
    subtitle: "최신 기술과 창의적 아이디어로 고객의 성공을 이끌어냅니다",
    // Service titles for main display
    literature_search: "규제 문헌 감시",
    document_generation: "자동 규제 문서 생성",
    regulation_crawling: "글로벌 규제 모니터링",
    data_transformation: "규제 데이터 표준화",
    // Service descriptions
    literature_search_desc: "약물감시 신호 탐지를 위한 AI 기반 의학 문헌 감시, ICH E2E 가이드라인 및 규제 제출 요구사항을 준수합니다.",
    document_generation_desc: "검증된 템플릿과 21 CFR Part 11 전자 워크플로를 사용하여 준수하는 약물감시 보고서 및 규제 제출 문서를 생성합니다.",
    regulation_crawling_desc: "즉시 알림 시스템을 통한 국내외 규제 가이드라인 변경 사항의 실시간 모니터링.",
    data_transformation_desc: "FDA 및 기타 규제 기관의 원시 데이터를 CDISC 준수 표준 분석 형식으로 자동 정규화합니다.",
    // Service features
    feature: {
      literature_search_1: "ICH E2E 준수 문헌 검토 프로토콜",
      literature_search_2: "자동 신호 탐지 알고리즘",
      literature_search_3: "규제 등급 근거 합성",
      document_generation_1: "21 CFR Part 11 검증된 워크플로",
      document_generation_2: "ICH 준수 보고서 템플릿",
      document_generation_3: "전자 서명 통합",
      regulation_crawling_1: "다중 관할권 규제 추적",
      regulation_crawling_2: "자동 준수 알림",
      regulation_crawling_3: "히스토리 데이터 보존",
      data_transformation_1: "CDISC/FDA 준수 데이터 형식",
      data_transformation_2: "자동 데이터 품질 검증",
      data_transformation_3: "API 통합 기능"
    },
    literatureSearch: {
      title: "문헌검색",
      description: "AI 기반 약물감시 관련 최신 의학·과학 문헌의 자동 수집·선별 및 관련성 평가",
      features: {
        feature1: "ICH E2E 준수 문헌 검토 프로토콜",
        feature2: "자동 신호 탐지 알고리즘", 
        feature3: "규제 등급 근거 합성"
      }
    },
    documentGeneration: {
      title: "문서생성",
      description: "규제 기준을 충족하는 표준 PV 보고서 및 문서를 자동 생성",
      features: {
        feature1: "21 CFR Part 11 검증된 워크플로",
        feature2: "ICH 준수 보고서 템플릿",
        feature3: "전자 서명 통합"
      }
    },
    regulationCrawling: {
      title: "규정크롤링",
      description: "국내외 규제/가이드라인 변경 사항의 실시간 크롤링 및 알림",
      features: {
        feature1: "다중 관할권 규제 추적",
        feature2: "자동 준수 알림",
        feature3: "히스토리 데이터 보존"
      }
    },
    dataTransformation: {
      title: "식약처 원시자료 변환",
      description: "식약처 등 공공기관 원시 데이터를 표준 분석 포맷으로 자동 정규화",
      features: {
        feature1: "CDISC/FDA 준수 데이터 형식",
        feature2: "자동 데이터 품질 검증",
        feature3: "API 통합 기능"
      }
    }
  },
  caseStudies: {
    title: "성공 사례",
    subtitle: "제약·바이오 기업과 함께한 약물감시 업무 혁신의 실제 성과를 확인해보세요",
    categories: {
      all: "전체 사례",
      digital: "PV 디지털 혁신",
      automation: "PV 자동화",
      monitoring: "규제 모니터링",
      innovation: "데이터 혁신"
    },
    cases: {
      pharmaA: {
        company: "대형 제약회사 A사",
        category: "PV 디지털 혁신",
        status: "운영 중",
        title: "AI 기반 문헌검색으로 약물감시 업무 효율성 300% 향상",
        achievements: {
          achievement1: "문헌검색 시간 90% 단축",
          achievement2: "데이터 정확도 98% 달성",
          achievement3: "규제 준수율 100% 유지"
        }
      },
      biotechB: {
        company: "중견 바이오기업 B사",
        category: "PV 자동화",
        status: "구현 중",
        title: "PV 보고서 자동 생성으로 업무 부담 70% 경감",
        achievements: {
          achievement1: "보고서 작성시간 70% 절약",
          achievement2: "인적 오류 99% 감소",
          achievement3: "품질 관리 체계 강화"
        }
      },
      consultingC: {
        company: "PV 컨설팅 C사",
        category: "규제 모니터링",
        status: "운영 중",
        title: "국내외 규정 변경사항 실시간 추적 시스템 구축",
        achievements: {
          achievement1: "규정 변경사항 즉시 알림",
          achievement2: "멀티 국가 규정 통합 관리",
          achievement3: "히스토리 데이터 완벽 보존"
        }
      },
      pharmaD: {
        company: "글로벌 제약그룹 D사",
        category: "데이터 혁신",
        status: "구현 중",
        title: "식약처 원시자료 표준화로 데이터 분석 역량 강화",
        achievements: {
          achievement1: "데이터 처리 속도 500% 향상",
          achievement2: "표준 포맷 일원화",
          achievement3: "API 연동 자동화 완성"
        }
      }
    },
    cta: "자세히 보기 →",
    detailButton: "사례 상세보기"
  },
  portfolio: {
    title: "성공 사례",
    subtitle: "제약·바이오 기업과 함께한 약물감시 업무 혁신의 실제 성과를 확인해보세요",
    filter: {
      all: "전체 사례",
      innovation: "PV 혁신",
      automation: "PV 자동화", 
      monitoring: "규제 모니터링",
      data: "데이터 혁신"
    },
    view_case: "자세히 보기"
  },
  view_details: "자세히 보기",
  contact: {
    title: "문의하기",
    subtitle: "제약·바이오 기업의 약물감시 업무 혁신을 위한 맞춤 솔루션을 상담받으세요",
    biz_inquiry: "비즈니스 문의",
    solution_consulting: "PV 솔루션 상담",
    headquarters: "본사",
    address_detail: "서울시 강남구 테헤란로 123 AI타워 15층",
    info: {
      business: {
        title: "비즈니스 문의",
        email: "business@acuzenic.com"
      },
      consulting: {
        title: "PV 솔루션 상담",
        phone: "+82 2-1234-5678"
      },
      headquarters: {
        title: "본사",
        address: "서울시 강남구 테헤란로 123 AI타워 15층"
      }
    },
    form: {
      title: "문의 양식",
      name: "이름",
      email: "이메일",
      message: "메시지",
      placeholder: "PV 업무 현황 및 필요한 솔루션에 대해 구체적으로 설명해 주세요...",
      messagePlaceholder: "PV 업무 현황 및 필요한 솔루션에 대해 구체적으로 설명해 주세요...",
      submit: "전송하기",
      submitting: "전송 중...",
      success: "메시지가 성공적으로 전송되었습니다!",
      error: "메시지 전송에 실패했습니다. 다시 시도해 주세요."
    }
  },
  footer: {
    company: {
      name: "Acuzenic",
      description: "AI 기반 실시간 약물감시(PV)·신호탐지·규제준수를 통합한 플랫폼을 제공합니다. 환자 안전과 규제 대응 속도가 우리의 핵심 가치입니다."
    },
    brand_motto: "AI 기반 실시간 약물감시(PV)·신호탐지·규제준수를 통합한 플랫폼을 제공합니다. 환자 안전과 규제 대응 속도가 우리의 핵심 가치입니다.",
    newsletter: {
      title: "뉴스레터 구독",
      subtitle: "최신 소식과 업데이트를 받아보세요",
      placeholder: "이메일 주소",
      email_label: "뉴스레터용 이메일 주소",
      subscribe: "구독"
    },
    links: {
      pv_services: "약물감시 서비스",
      integration: "문헌/데이터 통합",
      signal_detection: "이상사례 신호탐지",
      automation: "규제 문서 자동화",
      compliance: "PV 컴플라이언스",
      platform: "플랫폼",
      about: "회사 소개",
      features: "기능 개요",
      contact: "문의",
      partnership: "파트너십",
      pvServices: "약물감시 서비스",
      literatureData: "문헌/데이터 통합",
      signalDetection: "이상사례 신호탐지",
      regulatoryDocs: "규제 문서 자동화",
      pvCompliance: "PV 컴플라이언스",
      aboutUs: "회사 소개",
      partnerships: "파트너십"
    },
    social: {
      title: "소셜 미디어"
    },
    social_media: "소셜 미디어",
    copyright: "© 2024 Acuzenic. All rights reserved."
  },
  compliance: {
    title: "규제 준수 & 인증",
    subtitle: "제약 데이터 보안, 품질 및 규제 준수를 위한 최고 수준의 표준 충족",
    iso27001: "정보보안 관리체계",
    soc2: "보안 및 가용성 통제",
    gdpr: "데이터 보호 규정 준수",
    cfr21: "FDA 전자기록 규정",
    gvp: "약물감시 우수 관리기준",
    ich: "국제 안전성 가이드라인",
    verified: "검증된 준수",
    footer: "모든 인증은 정기적으로 감사 및 유지됩니다.",
    contact: "규제 준수 문서를 위한 문의"
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ko: { translation: ko }
    },
    fallbackLng: 'en', // Default to English first as per agent recommendation
    lng: 'en', // Start with English
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;