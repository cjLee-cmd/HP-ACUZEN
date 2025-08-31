# 가비아 도메인 연결 및 배포 가이드

## 1. 프로젝트 빌드

```bash
# 의존성 설치
npm install

# 프로덕션 빌드
npm run build
```

## 2. 가비아 호스팅 업로드

### 2.1 FTP 업로드 방법
1. 가비아 호스팅 관리 페이지에서 FTP 정보 확인
2. `dist/` 폴더의 모든 내용을 FTP 루트 디렉토리(`public_html` 또는 `www`)에 업로드

### 2.2 파일 구조 확인
업로드 후 다음과 같은 구조가 되어야 합니다:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── .htaccess
├── robots.txt
├── sitemap.xml
└── _redirects
```

## 3. 도메인 설정

### 3.1 DNS 설정 (가비아 관리자 페이지에서)
- A 레코드: 가비아 호스팅 IP 주소 연결
- CNAME 레코드: www 서브도메인 설정 (필요한 경우)

### 3.2 SSL 인증서
- 가비아에서 제공하는 무료 SSL 인증서 설치
- Let's Encrypt 자동 갱신 설정 (지원되는 경우)

## 4. 성능 최적화

### 4.1 .htaccess 설정 확인
- Gzip 압축 활성화
- 브라우저 캐싱 설정
- 보안 헤더 설정

### 4.2 이미지 최적화
- WebP 형식 사용 (지원되는 브라우저에서)
- 이미지 lazy loading 구현
- CDN 사용 고려

## 5. SEO 설정

### 5.1 메타 태그 업데이트
`index.html`에서 다음 항목들을 실제 도메인으로 수정:
- Open Graph URL
- Canonical URL
- Sitemap URL (robots.txt 내)

### 5.2 Google Analytics & Search Console
- Google Analytics 스크립트 추가
- Google Search Console에 사이트 등록
- 사이트맵 제출

## 6. 모니터링 및 유지보수

### 6.1 성능 모니터링
- Google PageSpeed Insights 점검
- Core Web Vitals 모니터링
- 로딩 속도 정기 점검

### 6.2 보안 점검
- SSL 인증서 만료일 확인
- 보안 헤더 설정 점검
- 정기적인 백업 수행

## 7. 문제 해결

### 7.1 일반적인 문제
- **404 에러**: `.htaccess` 파일이 제대로 업로드되었는지 확인
- **CSS/JS 로딩 안됨**: 파일 경로 및 권한 확인
- **폰트 로딩 문제**: CORS 설정 및 CDN 연결 상태 확인

### 7.2 연락처
기술 지원이 필요한 경우:
- 가비아 고객센터: 1588-3000
- 프로젝트 개발자: contact@acuzenic.com