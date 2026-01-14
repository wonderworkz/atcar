# 차살때 (Chasalddae) - 랜딩페이지 리뉴얼 프로젝트

차를 고르는 가장 똑똑한 방법, 차살때의 신규 랜딩페이지 프로젝트입니다.

## 프로젝트 개요

기존 차살때 랜딩페이지의 콘텐츠를 유지하면서, 현대적인 디자인과 반응형 UI/UX로 새롭게 구축한 프로젝트입니다.

## 기술 스택

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel (예정)

## 프로젝트 구조

```
atcar/
├── docs/               # 프로젝트 문서
│   └── project-plan.md # 프로젝트 기획서
├── images/             # 이미지 파일
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer, HamburgerMenu
│   │   ├── sections/   # 섹션 컴포넌트 (Hero, Services, etc.)
│   │   ├── ui/         # 재사용 가능한 UI 컴포넌트
│   │   └── forms/      # 폼 컴포넌트
│   ├── utils/          # 유틸리티 함수 (API, 암호화 등)
│   ├── assets/         # 정적 자산
│   └── App.jsx         # 메인 앱 컴포넌트
├── public/             # 정적 파일
└── package.json
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 주요 기능

- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 최적화
- ⚡ **빠른 성능**: Vite 기반 빠른 개발 및 빌드
- 🎨 **Tailwind CSS**: 유틸리티 기반 스타일링
- ✨ **애니메이션**: Framer Motion을 활용한 스크롤 애니메이션
- 🔒 **보안**: 개인정보 암호화 전송

## 개발 가이드

상세한 개발 가이드는 [프로젝트 기획서](./docs/project-plan.md)를 참고해주세요.

## 문서

- [프로젝트 기획서](./docs/project-plan.md)

## 라이선스

Copyright © 2026 차살때. All rights reserved.
