import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './DocumentCrawling.css';

const DocumentCrawling = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('url');

  // URL Crawling State
  const [searchQuery, setSearchQuery] = useState('');
  const [relatedUrls, setRelatedUrls] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [urlQuery, setUrlQuery] = useState('');
  const [urlResults, setUrlResults] = useState([]);

  // File Upload State (RAG)
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [ragQuery, setRagQuery] = useState('');
  const [ragResults, setRagResults] = useState([]);
  const [vectorDatabase, setVectorDatabase] = useState([]);

  const [processing, setProcessing] = useState(false);

  // 약물감시 관련 국내외 웹사이트 조사 데이터베이스
  const websiteDatabase = {
    // 국내 약물감시 기관
    'korea': [
      { url: 'https://www.mfds.go.kr/', title: '식품의약품안전처 (MFDS)', category: 'Korea-Regulatory', description: '한국 의약품 안전 관리 총괄 기관' },
      { url: 'https://www.drugsafe.or.kr/', title: '한국의약품안전관리원 (KIDS)', category: 'Korea-Safety', description: '약물감시 및 안전성 정보 관리' },
      { url: 'https://www.adr.go.kr/', title: '약물이상반응 신고센터', category: 'Korea-ADR', description: '이상반응 신고 및 모니터링' },
      { url: 'https://nedrug.mfds.go.kr/', title: '의약품안전나라', category: 'Korea-Database', description: '의약품 안전성 정보 포털' },
      { url: 'https://www.health.kr/', title: '건강보험심사평가원', category: 'Korea-Insurance', description: '의약품 급여 및 안전성 평가' }
    ],

    // 미국 약물감시 기관
    'usa': [
      { url: 'https://www.fda.gov/drugs/surveillance', title: 'FDA Drug Safety Surveillance', category: 'USA-Regulatory', description: 'FDA 의약품 안전성 감시' },
      { url: 'https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts', title: 'FDA Safety Alerts', category: 'USA-Safety', description: 'FDA 안전성 경고 및 리콜 정보' },
      { url: 'https://vaers.hhs.gov/', title: 'VAERS - Vaccine Adverse Event Reporting', category: 'USA-ADR', description: '백신 이상반응 신고 시스템' },
      { url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers', title: 'FDA Postmarket Safety', category: 'USA-Postmarket', description: '시판 후 안전성 정보' },
      { url: 'https://www.accessdata.fda.gov/scripts/cder/daf/', title: 'FDA Drug@FDA Database', category: 'USA-Database', description: 'FDA 의약품 승인 정보 데이터베이스' }
    ],

    // 유럽 약물감시 기관
    'europe': [
      { url: 'https://www.ema.europa.eu/en/human-regulatory/post-marketing/pharmacovigilance', title: 'EMA Pharmacovigilance', category: 'EU-Regulatory', description: 'EMA 약물감시 시스템' },
      { url: 'https://www.adrreports.eu/', title: 'EudraVigilance', category: 'EU-ADR', description: 'EU 이상반응 데이터베이스' },
      { url: 'https://www.ema.europa.eu/en/medicines', title: 'EMA Medicines Database', category: 'EU-Database', description: 'EMA 의약품 정보 데이터베이스' },
      { url: 'https://www.ema.europa.eu/en/news/direct-healthcare-professional-communications', title: 'EMA DHPC', category: 'EU-Communication', description: '의료진 대상 직접 통신' },
      { url: 'https://www.pei.de/EN/home/home-node.html', title: 'Paul Ehrlich Institute (Germany)', category: 'EU-National', description: '독일 백신 및 바이오의약품 안전성' }
    ],

    // 일본 약물감시 기관
    'japan': [
      { url: 'https://www.pmda.go.jp/english/', title: 'PMDA - Japan', category: 'Japan-Regulatory', description: '일본 의약품의료기기종합기구' },
      { url: 'https://www.pmda.go.jp/safety/info-services/drugs/adr-info/suspected-adr/0001.html', title: 'PMDA ADR Information', category: 'Japan-ADR', description: 'PMDA 이상반응 정보' },
      { url: 'https://www.mhlw.go.jp/english/', title: 'Ministry of Health Japan', category: 'Japan-Government', description: '일본 후생노동성' }
    ],

    // 국제기구 및 글로벌 표준
    'international': [
      { url: 'https://www.who.int/teams/regulation-prequalification/regulation-and-safety/pharmacovigilance', title: 'WHO Pharmacovigilance', category: 'WHO', description: 'WHO 약물감시 프로그램' },
      { url: 'https://www.who-umc.org/', title: 'Uppsala Monitoring Centre', category: 'WHO-UMC', description: 'WHO 협력센터 약물감시' },
      { url: 'https://www.cioms.ch/', title: 'CIOMS', category: 'Standards', description: '국제의학기구협의회 안전성 가이드라인' },
      { url: 'https://www.ich.org/', title: 'ICH Guidelines', category: 'ICH', description: '국제의약품규제조화협의회' },
      { url: 'https://www.ispe.org/pharmaceutical-engineering/pharmacovigilance', title: 'ISPE Pharmacovigilance', category: 'Industry', description: '국제제약공학회 약물감시' }
    ],

    // 임상시험 관련
    'clinical-trials': [
      { url: 'https://clinicaltrials.gov/', title: 'ClinicalTrials.gov', category: 'USA-Trials', description: '미국 임상시험 등록 데이터베이스' },
      { url: 'https://www.clinicaltrialsregister.eu/', title: 'EU Clinical Trials Register', category: 'EU-Trials', description: 'EU 임상시험 등록부' },
      { url: 'https://cris.nih.go.kr/', title: '한국임상연구정보서비스 (CRIS)', category: 'Korea-Trials', description: '한국 임상시험 등록 시스템' },
      { url: 'https://ichgcp.net/', title: 'ICH-GCP Guidelines', category: 'GCP-Standards', description: 'ICH 임상시험 관리기준' }
    ],

    // 문헌 및 연구 데이터베이스
    'literature': [
      { url: 'https://www.ncbi.nlm.nih.gov/pubmed/', title: 'PubMed', category: 'Literature', description: '의학 문헌 데이터베이스' },
      { url: 'https://www.cochranelibrary.com/', title: 'Cochrane Library', category: 'Evidence', description: '체계적 문헌고찰 데이터베이스' },
      { url: 'https://www.embase.com/', title: 'Embase', category: 'Literature', description: '생의학 문헌 데이터베이스' },
      { url: 'https://scholar.google.com/', title: 'Google Scholar', category: 'Academic', description: '학술 검색 엔진' }
    ],

    // 제약회사 및 산업체
    'industry': [
      { url: 'https://www.phrma.org/', title: 'PhRMA', category: 'Industry-US', description: '미국제약협회' },
      { url: 'https://www.efpia.eu/', title: 'EFPIA', category: 'Industry-EU', description: '유럽제약협회' },
      { url: 'https://www.krpia.or.kr/', title: '한국제약바이오협회', category: 'Industry-Korea', description: '한국 제약 산업 협회' },
      { url: 'https://www.jpma.or.jp/english/', title: 'JPMA', category: 'Industry-Japan', description: '일본제약공업협회' }
    ]
  };

  // 웹사이트 검색 및 관련 URL 찾기
  const searchRelatedUrls = async (query) => {
    if (!query.trim()) {
      setRelatedUrls([]);
      setShowDropdown(false);
      return;
    }

    setProcessing(true);
    // 지능적 검색 알고리즘
    setTimeout(() => {
      const foundUrls = [];
      const queryLower = query.toLowerCase();

      // 1. 카테고리별 검색
      Object.keys(websiteDatabase).forEach(category => {
        const categoryUrls = websiteDatabase[category];

        // 직접 카테고리 매칭
        if (category.includes(queryLower) || queryLower.includes(category)) {
          foundUrls.push(...categoryUrls);
        }

        // 제목 및 설명에서 키워드 검색
        categoryUrls.forEach(site => {
          const titleMatch = site.title.toLowerCase().includes(queryLower);
          const descMatch = site.description.toLowerCase().includes(queryLower);
          const categoryMatch = site.category.toLowerCase().includes(queryLower);

          if (titleMatch || descMatch || categoryMatch) {
            if (!foundUrls.find(existing => existing.url === site.url)) {
              foundUrls.push(site);
            }
          }
        });
      });

      // 2. 특수 키워드 기반 추가 검색
      const specialKeywords = {
        '한국': ['korea'],
        '국내': ['korea'],
        '식약처': ['korea'],
        'korea': ['korea'],
        '미국': ['usa'],
        'usa': ['usa'],
        'fda': ['usa'],
        '유럽': ['europe'],
        'europe': ['europe'],
        'ema': ['europe'],
        '일본': ['japan'],
        'japan': ['japan'],
        'pmda': ['japan'],
        '국제': ['international'],
        'who': ['international'],
        'international': ['international'],
        '임상': ['clinical-trials'],
        'clinical': ['clinical-trials'],
        'trial': ['clinical-trials'],
        '문헌': ['literature'],
        'literature': ['literature'],
        'pubmed': ['literature'],
        '산업': ['industry'],
        'industry': ['industry'],
        '제약': ['industry'],
        'pharmacovigilance': ['korea', 'usa', 'europe', 'international'],
        '약물감시': ['korea', 'usa', 'europe', 'international'],
        'safety': ['korea', 'usa', 'europe', 'international'],
        '안전성': ['korea', 'usa', 'europe', 'international'],
        'adverse': ['korea', 'usa', 'europe', 'international'],
        '이상반응': ['korea', 'usa', 'europe', 'international'],
        'surveillance': ['korea', 'usa', 'europe', 'international'],
        'monitoring': ['korea', 'usa', 'europe', 'international']
      };

      Object.keys(specialKeywords).forEach(keyword => {
        if (queryLower.includes(keyword)) {
          specialKeywords[keyword].forEach(category => {
            if (websiteDatabase[category]) {
              websiteDatabase[category].forEach(site => {
                if (!foundUrls.find(existing => existing.url === site.url)) {
                  foundUrls.push(site);
                }
              });
            }
          });
        }
      });

      // 3. 결과 정렬 및 제한
      // 한국 사이트 우선, 그다음 국제기구, 미국, 유럽 순으로 정렬
      const priorityOrder = ['Korea', 'WHO', 'ICH', 'Standards', 'USA', 'EU', 'Japan', 'Industry', 'Literature'];

      foundUrls.sort((a, b) => {
        const aPriority = priorityOrder.findIndex(p => a.category.includes(p));
        const bPriority = priorityOrder.findIndex(p => b.category.includes(p));
        return (aPriority === -1 ? 999 : aPriority) - (bPriority === -1 ? 999 : bPriority);
      });

      setRelatedUrls(foundUrls.slice(0, 15)); // 최대 15개로 증가
      setShowDropdown(foundUrls.length > 0);
      setProcessing(false);
    }, 1200);
  };

  // URL 선택 처리
  const handleUrlSelect = (url) => {
    if (!selectedUrls.find(selected => selected.url === url.url)) {
      setSelectedUrls([...selectedUrls, url]);
    }
    setShowDropdown(false);
  };

  // 선택된 URL들 기반 질의응답
  const handleUrlQuery = async () => {
    if (!urlQuery.trim() || selectedUrls.length === 0) return;

    setProcessing(true);
    // 시뮬레이션: 실제로는 크롤링 + RAG 시스템
    setTimeout(() => {
      const mockResponses = [
        {
          source: selectedUrls[0]?.title || 'Selected Website',
          content: `Based on the analysis of ${selectedUrls.length} selected websites, here are the findings related to "${urlQuery}":`,
          relevantSections: [
            'According to FDA guidelines, pharmacovigilance systems must maintain comprehensive safety databases.',
            'EMA regulations require continuous monitoring of adverse drug reactions throughout the product lifecycle.',
            'WHO standards emphasize the importance of international collaboration in drug safety surveillance.'
          ],
          confidence: 0.92
        }
      ];

      setUrlResults(mockResponses);
      setProcessing(false);
    }, 2000);
  };

  // 파일 업로드 처리 (RAG)
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    files.forEach(file => {
      if (!uploadedFiles.find(uploaded => uploaded.name === file.name)) {
        // 시뮬레이션: 벡터 임베딩 생성
        const mockEmbedding = {
          id: Date.now() + Math.random(),
          fileName: file.name,
          size: file.size,
          uploadedAt: new Date().toISOString(),
          chunks: [
            `Document content from ${file.name} - Section 1: Introduction and methodology...`,
            `Document content from ${file.name} - Section 2: Results and analysis...`,
            `Document content from ${file.name} - Section 3: Conclusions and recommendations...`
          ],
          metadata: {
            type: file.type,
            pages: Math.floor(Math.random() * 50) + 10,
            wordCount: Math.floor(Math.random() * 5000) + 1000
          }
        };

        setUploadedFiles(prev => [...prev, file]);
        setVectorDatabase(prev => [...prev, mockEmbedding]);
      }
    });
  };

  // RAG 기반 질의응답
  const handleRagQuery = async () => {
    if (!ragQuery.trim() || vectorDatabase.length === 0) return;

    setProcessing(true);
    // 시뮬레이션: 벡터 검색 + 생성
    setTimeout(() => {
      const relevantChunks = vectorDatabase.flatMap(doc =>
        doc.chunks.map(chunk => ({
          source: doc.fileName,
          content: chunk,
          similarity: Math.random() * 0.4 + 0.6 // 0.6-1.0 유사도
        }))
      ).sort((a, b) => b.similarity - a.similarity).slice(0, 3);

      const response = {
        query: ragQuery,
        answer: `Based on analysis of ${uploadedFiles.length} uploaded documents, here's a comprehensive response to "${ragQuery}":

        The documents indicate several key findings relevant to your query. According to the analyzed sources, there are consistent patterns that suggest specific approaches and methodologies that have proven effective.

        Key insights from the document analysis:
        1. Primary considerations include regulatory compliance and safety protocols
        2. Implementation strategies should focus on systematic approaches
        3. Best practices emphasize continuous monitoring and evaluation`,

        sources: relevantChunks,
        confidence: 0.87,
        timestamp: new Date().toISOString()
      };

      setRagResults(prev => [...prev, response]);
      setProcessing(false);
      setRagQuery('');
    }, 2500);
  };

  // 검색어 입력 감지
  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchQuery) {
        searchRelatedUrls(searchQuery);
      }
    }, 500);

    return () => clearTimeout(delayedSearch);
  }, [searchQuery]);

  return (
    <div className="document-crawling-page">
      <div className="container">
        <div className="page-header">
          <h1>{t('services.regulation_crawling')}</h1>
          <p className="page-description">
            AI 기반 웹사이트 분석 및 문서 지식베이스 시스템입니다.
            관련 웹사이트 자동 검색과 RAG 기반 문서 질의응답 기능을 제공합니다.
          </p>
        </div>

        <div className="service-tabs">
          <button
            className={`tab ${activeTab === 'url' ? 'active' : ''}`}
            onClick={() => setActiveTab('url')}
          >
            🌐 웹사이트 분석
          </button>
          <button
            className={`tab ${activeTab === 'file' ? 'active' : ''}`}
            onClick={() => setActiveTab('file')}
          >
            📚 문서 지식베이스
          </button>
        </div>

        <div className="service-content">
          {activeTab === 'url' && (
            <div className="url-crawling-section">
              <div className="search-section">
                <h3>관련 웹사이트 검색</h3>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="예: pharmacovigilance, clinical trial, drug safety"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <div className="search-hint">
                    키워드를 입력하면 관련 웹사이트를 자동으로 찾아드립니다.
                  </div>
                </div>

                {showDropdown && relatedUrls.length > 0 && (
                  <div className="dropdown-results">
                    <h4>약물감시 관련 웹사이트 ({relatedUrls.length}개 발견)</h4>
                    {relatedUrls.map((url, index) => (
                      <div key={index} className="url-item" onClick={() => handleUrlSelect(url)}>
                        <div className="url-info">
                          <div className="url-title">{url.title}</div>
                          <div className="url-description">{url.description}</div>
                          <div className="url-link">{url.url}</div>
                          <span className={`url-category category-${url.category.toLowerCase().replace(/[^a-z-]/g, '-')}`}>
                            {url.category}
                          </span>
                        </div>
                        <button className="select-btn">선택</button>
                      </div>
                    ))}
                  </div>
                )}

                {selectedUrls.length > 0 && (
                  <div className="selected-urls">
                    <h4>선택된 웹사이트 ({selectedUrls.length}개)</h4>
                    <div className="selected-list">
                      {selectedUrls.map((url, index) => (
                        <div key={index} className="selected-item">
                          <span className="selected-title">{url.title}</span>
                          <button
                            onClick={() => setSelectedUrls(selectedUrls.filter((_, i) => i !== index))}
                            className="remove-btn"
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {selectedUrls.length > 0 && (
                <div className="query-section">
                  <h3>웹사이트 기반 질의응답</h3>
                  <div className="query-container">
                    <textarea
                      placeholder="선택한 웹사이트들을 기반으로 질문해보세요..."
                      value={urlQuery}
                      onChange={(e) => setUrlQuery(e.target.value)}
                      className="query-input"
                      rows="3"
                    />
                    <button
                      onClick={handleUrlQuery}
                      disabled={processing || !urlQuery.trim()}
                      className="query-button"
                    >
                      {processing ? '분석 중...' : '질의하기'}
                    </button>
                  </div>

                  {urlResults.length > 0 && (
                    <div className="url-results">
                      {urlResults.map((result, index) => (
                        <div key={index} className="result-card">
                          <div className="result-header">
                            <div className="confidence-badge">신뢰도: {(result.confidence * 100).toFixed(0)}%</div>
                          </div>
                          <div className="result-content">
                            <h4>분석 결과</h4>
                            <p>{result.content}</p>
                            <div className="relevant-sections">
                              <h5>주요 내용:</h5>
                              <ul>
                                {result.relevantSections.map((section, idx) => (
                                  <li key={idx}>{section}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'file' && (
            <div className="file-upload-section">
              <div className="upload-section">
                <h3>문서 업로드 (RAG 시스템)</h3>
                <div className="upload-area">
                  <input
                    type="file"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileUpload}
                    multiple
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="file-upload" className="upload-label">
                    <div className="upload-icon">📁</div>
                    <div className="upload-text">
                      여러 문서를 선택하거나 드래그하세요
                    </div>
                    <div className="upload-hint">
                      지원 형식: PDF, DOC, DOCX, TXT | 다중 선택 가능
                    </div>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="uploaded-files">
                    <h4>업로드된 문서 ({uploadedFiles.length}개)</h4>
                    <div className="file-list">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="file-item">
                          <div className="file-info">
                            <span className="file-name">{file.name}</span>
                            <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
                          </div>
                          <div className="file-status">✅ 처리완료</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {uploadedFiles.length > 0 && (
                <div className="rag-section">
                  <h3>문서 기반 질의응답 (RAG)</h3>
                  <div className="rag-container">
                    <textarea
                      placeholder="업로드한 문서들을 기반으로 질문해보세요..."
                      value={ragQuery}
                      onChange={(e) => setRagQuery(e.target.value)}
                      className="rag-input"
                      rows="3"
                    />
                    <button
                      onClick={handleRagQuery}
                      disabled={processing || !ragQuery.trim()}
                      className="rag-button"
                    >
                      {processing ? 'AI 분석 중...' : '문서 질의'}
                    </button>
                  </div>

                  {ragResults.length > 0 && (
                    <div className="rag-results">
                      <h4>질의응답 결과 ({ragResults.length}개)</h4>
                      {ragResults.map((result, index) => (
                        <div key={index} className="rag-result-card">
                          <div className="rag-result-header">
                            <div className="query-text">Q: {result.query}</div>
                            <div className="confidence-badge">신뢰도: {(result.confidence * 100).toFixed(0)}%</div>
                          </div>
                          <div className="rag-result-content">
                            <div className="answer-section">
                              <h5>📝 AI 응답:</h5>
                              <p>{result.answer}</p>
                            </div>
                            <div className="sources-section">
                              <h5>📚 참조 문서:</h5>
                              {result.sources.map((source, idx) => (
                                <div key={idx} className="source-item">
                                  <div className="source-header">
                                    <span className="source-name">{source.source}</span>
                                    <span className="similarity-score">
                                      유사도: {(source.similarity * 100).toFixed(0)}%
                                    </span>
                                  </div>
                                  <div className="source-content">{source.content}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {processing && (
          <div className="processing-indicator">
            <div className="spinner"></div>
            <p>AI가 데이터를 분석하고 있습니다...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentCrawling;