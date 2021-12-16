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
- 컴포넌트 예제 추가 (체크박스, 라디오)
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
npx sb init
npm run storybook
```

### jsStorybook Issue

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

- 스토리북 빌드 중 에러 발생, UnhandledPromiseRejectionWarning: TypeError: compilation.getAssetPath is not a function
- 웹팩 5버전으로 인하여 생기는 문제임을 알게 되어서 아래 패키지를 설치

```command
npm i -D html-webpack-plugin
```
