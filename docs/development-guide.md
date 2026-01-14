# 개발 가이드

## 개발 환경 설정

### 1. 필수 요구사항
- Node.js 20.9.0 이상
- npm 10.1.0 이상
- Git

### 2. 프로젝트 클론 및 설치

```bash
git clone https://github.com/wonderworkz/atcar.git
cd atcar
npm install
```

### 3. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env` 파일을 생성합니다:

```bash
cp .env.example .env
```

그리고 필요한 값들을 설정합니다.

## 개발 워크플로우

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 코드 스타일

- **ESLint**: 코드 품질 검사
- **Tailwind CSS**: 유틸리티 우선 CSS

### 컴포넌트 개발 규칙

1. **컴포넌트 위치**:
   - Layout 컴포넌트: `src/components/layout/`
   - Section 컴포넌트: `src/components/sections/`
   - UI 컴포넌트: `src/components/ui/`
   - Form 컴포넌트: `src/components/forms/`

2. **파일명 규칙**:
   - PascalCase 사용 (예: `HeroSection.jsx`)
   - 컴포넌트명과 파일명 일치

3. **컴포넌트 구조**:
```jsx
// 예시: src/components/ui/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-button font-semibold transition-all';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-active',
    secondary: 'bg-gray-10 text-gray-90 hover:bg-gray-60',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

## Tailwind CSS 사용법

### 커스텀 디자인 토큰

프로젝트에서 사용하는 주요 디자인 토큰:

```javascript
// 색상
bg-primary         // #3259E6
bg-primary-active  // rgba(50, 149, 230, 0.8)
bg-primary-10      // #E8EEFF
text-gray-90       // #4e4e5b
text-gray-60       // #888888
bg-gray-10         // #F5F5F5

// 폰트 크기
text-hero-desktop  // 54px
text-hero-tablet   // 28px
text-hero-mobile   // 24px

// 보더 라디우스
rounded-button     // 28px
rounded-button-lg  // 40px
rounded-card-desktop  // 40px
```

### 반응형 디자인

```jsx
// 모바일 우선 접근
<div className="px-6 md:px-10 lg:px-20">
  {/* 모바일: 24px, 태블릿: 40px, 데스크톱: 80px */}
</div>

// 텍스트 크기
<h1 className="text-hero-mobile md:text-hero-tablet lg:text-hero-desktop">
  헤드라인
</h1>
```

## 애니메이션 구현

### Framer Motion 설치

```bash
npm install framer-motion
```

### 기본 사용법

```jsx
import { motion } from 'framer-motion';

const FadeInUp = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
```

## API 연동

### API 유틸리티 사용

```javascript
// src/utils/api.js
import { encryptPersonalInfo } from './encryption';

export const submitConsultation = async (formData) => {
  try {
    const encryptedData = encryptPersonalInfo(formData);

    const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify(encryptedData),
    });

    if (!response.ok) {
      throw new Error('API 요청 실패');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
```

## 테스트

### 개발 중 확인사항

1. **반응형 테스트**:
   - Chrome DevTools에서 다양한 디바이스 크기 확인
   - 주요 브레이크포인트: 640px, 768px, 1024px, 1280px

2. **브라우저 호환성**:
   - Chrome (최신)
   - Safari (최신)
   - Firefox (최신)
   - Edge (최신)

3. **성능 체크**:
   - Lighthouse 점수 확인
   - 이미지 최적화 확인

## 배포

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## Git 워크플로우

### 브랜치 전략

- `main`: 프로덕션 브랜치
- `develop`: 개발 브랜치
- `feature/*`: 기능 개발 브랜치
- `fix/*`: 버그 수정 브랜치

### 커밋 메시지 규칙

```
type: 간단한 설명

상세 설명 (선택)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

**Type 종류**:
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `style`: 스타일 변경
- `refactor`: 리팩토링
- `docs`: 문서 수정
- `chore`: 기타 작업

### 예시

```bash
git checkout -b feature/hero-section
# ... 작업 ...
git add .
git commit -m "feat: Add hero section with responsive design

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push origin feature/hero-section
```

## 문제 해결

### 자주 발생하는 이슈

1. **Node 버전 에러**:
   - Node.js 버전 확인: `node -v`
   - nvm 사용 권장: `nvm use 20`

2. **의존성 설치 오류**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Tailwind CSS 적용 안 됨**:
   - `tailwind.config.js`의 `content` 경로 확인
   - 개발 서버 재시작

## 추가 리소스

- [React 공식 문서](https://react.dev/)
- [Vite 공식 문서](https://vitejs.dev/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Framer Motion 문서](https://www.framer.com/motion/)
