# Acuzenic Website

Acuzenic 웹사이트 - React 기반의 현대적이고 반응형인 비즈니스 웹사이트

## 🚀 기능

- **다국어 지원**: 한국어/영어 지원
- **반응형 디자인**: 모든 디바이스에서 최적화
- **현대적인 UI**: 그라데이션 배경과 글래스모픽 효과
- **부드러운 애니메이션**: 사용자 경험 향상을 위한 자연스러운 전환 효과
- **SEO 최적화**: 검색 엔진 최적화 적용
- **접근성**: WCAG 가이드라인 준수

## 🛠️ 기술 스택

- **React 18.3+**: 최신 React 기능 활용
- **Vite**: 빠른 개발 서버 및 빌드 도구
- **React i18next**: 국제화 지원
- **CSS-in-JS**: 컴포넌트별 스타일링
- **ESLint**: 코드 품질 관리

## 📋 개발 환경 설정

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 코드 린팅
npm run lint
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.jsx      # 네비게이션 헤더
│   ├── Hero.jsx        # 메인 히어로 섹션
│   ├── About.jsx       # 회사 소개
│   ├── Services.jsx    # 서비스 소개
│   ├── Portfolio.jsx   # 포트폴리오
│   ├── Contact.jsx     # 연락처 폼
│   ├── Footer.jsx      # 푸터
│   └── LanguageToggle.jsx # 언어 전환 버튼
├── i18n/               # 국제화 설정
│   └── i18n.js        # 언어 리소스
├── styles/             # 스타일 파일
│   └── index.css      # 글로벌 스타일
├── App.jsx            # 메인 앱 컴포넌트
└── main.jsx           # 엔트리 포인트
```

## 🌍 다국어 지원

### 언어 추가하기

1. `src/i18n/i18n.js`에서 새 언어 리소스 추가
2. 번역 키와 텍스트 정의
3. 언어 선택기에 새 언어 옵션 추가

### 번역 키 사용하기

```javascript
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  return <h1>{t('hero.title')}</h1>;
}
```

## 🎨 디자인 시스템

### 색상 팔레트
- Primary: `#667eea` (보라색)
- Secondary: `#764ba2` (진한 보라색)
- Background: 그라데이션 (라벤더, 하늘색, 흰색)

### 타이포그래피
- 한국어: 'Noto Sans KR', 'Pretendard'
- 영어: 'Poppins', 'Inter'

### 반응형 중단점
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 배포

### 가비아 호스팅 배포
자세한 배포 가이드는 `deploy.md` 파일을 참조하세요.

```bash
# 빌드
npm run build

# dist/ 폴더를 FTP로 업로드
# .htaccess 파일 포함 확인
```

### 기타 플랫폼
- **Netlify**: `_redirects` 파일 포함
- **Vercel**: 자동 배포 지원
- **GitHub Pages**: 정적 사이트 배포

## 📊 성능 최적화

- **코드 분할**: Vite의 자동 번들 분할
- **이미지 최적화**: WebP 형식 및 lazy loading
- **폰트 최적화**: 프리로드 및 font-display: swap
- **압축**: Gzip 및 Brotli 압축 지원

## 🔧 커스터마이징

### 스타일 수정
- `src/styles/index.css`에서 글로벌 스타일 수정
- 각 컴포넌트의 styled-jsx 블록에서 컴포넌트별 스타일 수정

### 콘텐츠 수정
- `src/i18n/i18n.js`에서 텍스트 내용 수정
- 각 컴포넌트에서 하드코딩된 내용 수정

### 이미지 교체
- `src/assets/` 폴더에 이미지 추가
- 컴포넌트에서 이미지 경로 업데이트

## 📞 지원

프로젝트 관련 문의사항이 있으시면 연락해 주세요:
- 이메일: contact@acuzenic.com
- 전화: +82 10-1234-5678

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.