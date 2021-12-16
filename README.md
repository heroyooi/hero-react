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

## jsRedux

- js 에서 CssInJs, Redux 기능 확장
- 컴포넌트 예제 추가 (체크박스, 라디오)
- 코드 스플리팅, 라우터 설정
- ie 11 대응 설정 추가

### 추가 설치

#### NPM - Others

```command
npm i react-router-dom @loadable/component
npm i @emotion/styled @emotion/react emotion-reset
npm i immer
npm i uuid
```

#### NPM - redux & redux middlewares

```command
npm i redux react-redux
npm i redux-devtools-extension
npm i redux-thunk redux-actions
```

#### NPM - 비동기 통신

```command
npm i axios
```

## be

- 비동기 통신 예제를 위해 간단하게 생성한 백엔드 서버

```command
npm i json-server
```

## Common Issue

### Cross Browsing ie11

```command
npm i core-js regenerator-runtime @pmmmwh/react-refresh-webpack-plugin@next
```

- @pmmmwh/react-refresh-webpack-plugin 모듈을 0.5.0 베타 버전으로 설치

- 웹팩의 entry 파일인 client.jsx 파일 최상단에 아래 모듈 추가

```jsx
import "core-js/stable";
import "regenerator-runtime/runtime";
```

- 웹팩 설정 파일인 webpack.config.js 파일에 다음 구문 추가 (해당 옵션 추가할 경우 핫리로딩이 정상작동하지 않는다.)

```js
const config = {
  // ...,
  target: ["web", "es5"],
  module: {
    rules: [
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { browsers: ['last 2 chrome versions', 'IE 10'] },
            },
          ],
          '@babel/preset-react',
        ]
      }
    ]
  }
};
config.plugins.push(
  new ReactRefreshWebpackPlugin({
    overlay: {
      useURLPolyfill: true,
    },
  })
);
```
