# Slovabley Portfolio - React + TypeScript

모던 React와 TypeScript를 사용한 모듈별 포트폴리오 프로젝트입니다.

## 프로젝트 구조

```
slovabley/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.css
│   │   │   ├── TVBody.tsx
│   │   │   ├── TVBody.css
│   │   │   ├── Headline.tsx
│   │   │   ├── Headline.css
│   │   │   ├── TVScreen.tsx
│   │   │   └── TVScreen.css
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   ├── About.css
│   │   │   ├── Card.tsx
│   │   │   └── Card.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   ├── Contact.css
│   │   │   ├── ContactItem.tsx
│   │   │   └── ContactItem.css
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.css
│   ├── hooks/
│   │   └── useStaticEffect.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 컴포넌트 구조

- **Header**: 사이트 이름 표시
- **Hero**: 메인 섹션 (TV 이펙트 + 헤드라인)
  - TVBody: TV 디자인 컴포넌트
  - TVScreen: Canvas를 이용한 정적 효과
  - Headline: 메인 제목 및 설명
- **About**: 자기소개 및 스킬 카드
  - Card: 개별 스킬 카드
- **Contact**: 연락처 정보
  - ContactItem: 개별 연락처 항목
- **Footer**: 저작권 정보

## Custom Hooks

- **useStaticEffect**: Canvas에 정적 TV 효과를 생성하는 훅

## 설치 및 실행

### 패키지 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 사용 기술

- React 18.2
- TypeScript 5.2
- Vite 5.0
- CSS3 (모듈별 분리)
- Canvas API

## 주요 특징

✓ 모듈별 컴포넌트 구조로 유지보수 용이
✓ 각 컴포넌트별 독립적인 CSS 파일
✓ TypeScript로 타입 안정성 강화
✓ Vite를 통한 빠른 개발 환경
✓ 반응형 디자인
✓ Canvas를 활용한 동적 효과

## 라이선스

© 2026 slovabley. All rights reserved.
