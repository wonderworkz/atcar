# 프로젝트 구조

## 디렉토리 구조

```
atcar/
├── .git/                    # Git 저장소
├── .vscode/                 # VS Code 설정
├── docs/                    # 프로젝트 문서
│   ├── project-plan.md      # 프로젝트 기획서
│   ├── development-guide.md # 개발 가이드
│   └── project-structure.md # 프로젝트 구조 (이 파일)
├── images/                  # 이미지 파일
│   ├── README.md           # 이미지 가이드
│   └── (사용자가 추가할 이미지들)
├── node_modules/           # npm 패키지 (git 무시)
├── public/                 # 정적 파일
│   └── vite.svg
├── src/                    # 소스 코드
│   ├── assets/            # 정적 자산
│   │   ├── icons/         # 아이콘 파일
│   │   └── react.svg
│   ├── components/        # React 컴포넌트
│   │   ├── forms/         # 폼 컴포넌트
│   │   │   └── ConsultationForm.jsx
│   │   ├── layout/        # 레이아웃 컴포넌트
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── HamburgerMenu.jsx
│   │   ├── sections/      # 섹션 컴포넌트
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AppPromoSection.jsx
│   │   │   ├── ServiceCardsSection.jsx
│   │   │   ├── ReviewsSection.jsx
│   │   │   ├── TrustSection.jsx
│   │   │   ├── FAQSection.jsx
│   │   │   └── CTASection.jsx
│   │   └── ui/            # 재사용 가능한 UI 컴포넌트
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── FloatingButton.jsx
│   │       └── Modal.jsx
│   ├── utils/             # 유틸리티 함수
│   │   ├── api.js         # API 호출 함수
│   │   └── encryption.js  # 암호화 함수
│   ├── App.css            # App 컴포넌트 스타일
│   ├── App.jsx            # 메인 App 컴포넌트
│   ├── index.css          # 전역 스타일 (Tailwind)
│   └── main.jsx           # 앱 진입점
├── .env                   # 환경 변수 (git 무시)
├── .env.example           # 환경 변수 예시
├── .gitignore             # Git 무시 파일 목록
├── eslint.config.js       # ESLint 설정
├── index.html             # HTML 진입점
├── package.json           # npm 패키지 설정
├── package-lock.json      # npm 의존성 잠금
├── postcss.config.js      # PostCSS 설정
├── README.md              # 프로젝트 README
├── tailwind.config.js     # Tailwind CSS 설정
└── vite.config.js         # Vite 설정
```

## 주요 파일 및 디렉토리 설명

### 루트 디렉토리

#### 설정 파일
- **package.json**: 프로젝트 의존성 및 스크립트 정의
- **vite.config.js**: Vite 빌드 도구 설정
- **tailwind.config.js**: Tailwind CSS 커스터마이징
- **postcss.config.js**: CSS 후처리 설정
- **eslint.config.js**: 코드 린팅 규칙

#### 환경 변수
- **.env**: 실제 환경 변수 (보안 정보 포함, git 무시)
- **.env.example**: 환경 변수 템플릿

### `/docs` - 문서

프로젝트 관련 모든 마크다운 문서를 저장합니다.

- **project-plan.md**: 전체 프로젝트 기획서 (10단계 개발 계획)
- **development-guide.md**: 개발자를 위한 가이드
- **project-structure.md**: 프로젝트 구조 설명

### `/images` - 이미지

사용자가 추가할 이미지 파일들을 저장합니다.

- 로고, 히어로 이미지, 아이콘, 제휴사 로고 등
- `README.md`에 필요한 이미지 목록 명시

### `/src` - 소스 코드

#### `/src/components` - 컴포넌트

**레이아웃 컴포넌트** (`/layout`):
- **Header.jsx**: 상단 네비게이션 바
- **Footer.jsx**: 하단 푸터
- **HamburgerMenu.jsx**: 모바일 햄버거 메뉴

**섹션 컴포넌트** (`/sections`):
- **HeroSection.jsx**: 히어로 배너
- **AppPromoSection.jsx**: 앱 홍보
- **ServiceCardsSection.jsx**: 서비스 카드 3개
- **TrustSection.jsx**: 신뢰 지표 (통계, 제휴사)
- **ReviewsSection.jsx**: 고객 후기
- **FAQSection.jsx**: 자주 묻는 질문
- **CTASection.jsx**: 최종 전환 섹션

**UI 컴포넌트** (`/ui`):
- **Button.jsx**: 재사용 가능한 버튼
- **Card.jsx**: 카드 컴포넌트
- **FloatingButton.jsx**: 화면 하단 고정 버튼
- **Modal.jsx**: 모달 다이얼로그

**폼 컴포넌트** (`/forms`):
- **ConsultationForm.jsx**: 상담 신청 폼

#### `/src/utils` - 유틸리티

- **api.js**: API 호출 로직
  - `submitConsultation()`: 상담 신청 API
  - `fetchData()`: 데이터 가져오기

- **encryption.js**: 개인정보 암호화
  - `encryptPersonalInfo()`: AES 암호화
  - `decryptPersonalInfo()`: AES 복호화

#### `/src/assets` - 정적 자산

- **icons/**: SVG 아이콘 파일
- **react.svg**: React 로고 (기본)

#### 메인 파일

- **main.jsx**: React 앱 진입점 (ReactDOM.createRoot)
- **App.jsx**: 메인 앱 컴포넌트 (모든 섹션 조합)
- **index.css**: Tailwind CSS import 및 전역 스타일

### `/public` - 정적 파일

빌드 시 루트에 복사되는 파일들:
- **vite.svg**: Vite 로고
- 추가 정적 파일 (favicon 등)

## 파일 네이밍 규칙

### 컴포넌트
- **PascalCase** 사용: `HeroSection.jsx`, `Button.jsx`
- 파일명 = 컴포넌트명

### 유틸리티 및 설정
- **camelCase** 사용: `api.js`, `encryption.js`
- 소문자 + 하이픈: `tailwind.config.js`

### 이미지
- **소문자 + 하이픈**: `home-car-img.png`, `icon-phone.svg`

## 컴포넌트 관계도

```
App.jsx
├── Header.jsx
│   └── HamburgerMenu.jsx (모바일)
├── HeroSection.jsx
├── AppPromoSection.jsx
├── ServiceCardsSection.jsx
│   └── Card.jsx (x3)
├── TrustSection.jsx
├── ReviewsSection.jsx
│   └── Card.jsx (x6)
├── FAQSection.jsx
├── CTASection.jsx
│   └── Button.jsx
├── FloatingButton.jsx (고정)
│   ├── Button.jsx
│   └── Modal.jsx
│       └── ConsultationForm.jsx
└── Footer.jsx
```

## 데이터 흐름

```
사용자 입력 (ConsultationForm.jsx)
    ↓
검증 (클라이언트 측)
    ↓
암호화 (utils/encryption.js)
    ↓
API 호출 (utils/api.js)
    ↓
백엔드 서버 (기존 차살때 API)
    ↓
응답 처리
    ↓
사용자 피드백 (성공/실패 메시지)
```

## 스타일링 구조

```
index.css (Tailwind base)
    ↓
tailwind.config.js (커스터마이징)
    ↓
컴포넌트 (Tailwind 클래스 사용)
    ↓
App.css (추가 커스텀 스타일, 필요 시)
```

## 빌드 산출물

빌드 시 생성되는 파일들 (`npm run build`):

```
dist/
├── assets/
│   ├── index-[hash].js    # 번들된 JavaScript
│   ├── index-[hash].css   # 번들된 CSS
│   └── (이미지 파일들)
└── index.html             # 진입 HTML
```

## 다음 개발 단계

1. **컴포넌트 개발**: `/src/components` 하위 컴포넌트 구현
2. **유틸리티 구현**: API 및 암호화 로직
3. **스타일링**: Tailwind CSS 적용
4. **애니메이션**: Framer Motion 통합
5. **테스트**: 반응형 및 브라우저 호환성
6. **최적화**: 성능 튜닝
7. **배포**: Vercel 배포

## 참고 사항

- 모든 컴포넌트는 **함수형 컴포넌트** 사용
- **React Hooks** 활용 (useState, useEffect 등)
- **prop-types** 또는 **TypeScript**로 타입 검증 (향후 고려)
- **환경 변수**는 `import.meta.env.VITE_*` 형식으로 접근
