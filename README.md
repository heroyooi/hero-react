# React Setting

- 리액트 프로젝트 초기 파일 구성

## js, ts

- 기본 파일로만 구성

```command
npm i
npm run dev
```

## jsStorybook

- js 에서 Storybook, CssInJs 기능 확장
- 컴포넌트 예제 추가
- 코드 스플리팅, 라우터 설정

### 추가 설치

#### NPM - Others

```command
npm i react-router-dom @loadable/component
npm i @emotion/styled @emotion/react emotion-reset
npm i immer
npm i uuid
```

#### NPM - Storybook

```command
npx -p @storybook/cli sb init
npm i -D @storybook/addon-knobs @storybook/theming @storybook/addon-docs
npm run storybook
```

### 이슈

- eslint 에러로 인하여 설정 변경

```json (.eslintrc)
{
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["plugin:prettier/recommended", "react-app"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```
