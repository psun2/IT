# Library

: 현페이지 에서 설명하는 라이브러리는 CLI를 기본으로 작성합니다.

---

## `react-router-dom`

![리액트 전용](./logo/favicon.ico)

```
yarn add react-router-dom
```

- 밸로퍼트/05. react-router/router-tutorial 참조

---

## `redux`

![리액트 전용](./logo/favicon.ico)

[공식사이트](https://ko.redux.js.org/)

[Redux - GitBook](https://lunit.gitbook.io/redux-in-korean/)

[Redux - GitHub](https://github.com/deminoth/redux)

```
yarn add redux
```

- 밸로퍼트/06. react-Redux/learn-redux 참조

---

## `react-redux`

![리액트 전용](./logo/favicon.ico)

[공식사이트](https://ko.redux.js.org/)

[Redux - GitBook](https://lunit.gitbook.io/redux-in-korean/)

[Redux - GitHub](https://github.com/deminoth/redux)

```
yarn add react-redux
```

- 한 파일에 몰아서 작성하는 방식

  > Ducks 패턴

  - action type 설정
  - action 생성 함수
  - 초기상태 선언
  - reducer 작성

- index (module)

  > import {combineReducers} from 'redux' // reducer 합체

- index (root)

  > import {Provider} from 'react-redux'
  > import {createStroe} from 'redux'

  ```
  const store = createStore(rootReducer);
    <Provider store={store}>
      <App />
    </Provider>
  ```

- 밸로퍼트/06. react-Redux/learn-redux 참조

---

## `redux-devtools-extension`

[바로가기](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

[redux-devtools-extension github](https://github.com/zalmoxisus/redux-devtools-extension)

리덕스를 활용하신다면 아주 유용한 툴입니다.

❗꼭 redux-devtools-extension 라이브러리와 함께 사용 가능합니다.

```
yarn add redux-devtools-extension
```

```
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
// 스토어를 생성 할때 두번째 파라미터 인자로 전달합니다.
```

- 밸로퍼트/06. react-Redux/learn-redux 참조

---

## `redux-logger`

[mddileware-devtools 연동](https://github.com/zalmoxisus/redux-devtools-extension)  
: redux 의 액션 과 상태를 출력하는 middleware 입니다.  
아래에서는 redux-devtools-extenstion 과 함께 사용 하는 예제 입니다.

```
yarn add redux-logger
```

```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(logger),
  // other store enhancers if any
));
```

- 밸로퍼트/06. react-Redux/learn-redux-middleware 참조

---

## `redux-thunk`

[redux-thunk github](https://github.com/reduxjs/redux-thunk)  
: redux에서 dispatch 시 함수를 통하여 dispatch 할 수 있는 라이브러리  
주로 api 등 비동기 작업에서 많이 쓰입니다.

```
yarn add redux-thunk
```

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// import myLogger from './middlewares/myLogger';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const store = createStore(rootReducer, applyMiddleware(myLogger, logger));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
  // logger 을 사용할땐 middleware 을 묶어주는 applyMiddleWare 의 함수의
  // 마지막 인자로 전달 해야 합니다.
  // 그렇지 않으면 logger 가 함수도 출력합니다.
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

- 밸로퍼트/06. react-Redux/learn-redux-middleware 참조

---

## `qs`

: route 의 props 로 받아온 location 객체를 사용 하여, query string 을 parsing 합니다.

라이브러리를 사용하지 않고도, 자바스크립트의 내장 객체(api)인  
URLSearchParams 를 이용 할 수 도 있습니다.

먼저 URLSearchParams 사용 예시 부터 보도록 하겠습니다.

```
  const param = new URLSearchParams(location.search);
  console.log(Object.fromEntries(param));
  // Object.fromEntries 를 이용해 Object 로 변경 하여 사용 할 수 있도록 합니다.
```

```
yarn add qs
```

```
import qs from 'qs';

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // ?표가 없이 parsing 됩니다.
  });
```

- 밸로퍼트/05. react-router/router-tutorial 참조

---

## `prettier`

- [Vscode] 폴더에서 확인가능
- 밸로퍼트/01. react-tutorial/useful-tools 참조

---

## `EsLint`

- [Vscode] 폴더에서 확인가능
- 밸로퍼트/01. react-tutorial/useful-tools 참조

---

## `axios`

```
npm i axios
```

fetch()와 비슷한 역할을 합니다.

```
axios.get('url');
```

- 드림코딩/cardmaker 참조
- 노마드/react-hooks 참조

---

## `react-async`

![리액트 전용](./logo/favicon.ico)  
[react-async github](https://github.com/async-library/react-async)  
비동기 작업을 도와주는 라이브러리 입니다.  
(복잡하니 커스텀 hook 을 만들어 axios 와 결합 하여 사용을 추천 합니다.)

```
yarn add react-async
```

```
import { useAsync } from 'react-async';

  const { data, error, isLoading } = useAsync({
    promiseFn: getUser, // callback
    id, // callback parameter
    watch: id, // dependencys
  });
```

```
const UsersReactAsync = () => {
  // reload : refetch
  // run deferFn 옵션과 사용시 랜더시 fetch 시키지 않고 run 함수를 실행시 fetch 가 진행됩니다.
  const { data: users, error, isLoading, reload, run } = useAsync({
    // promiseFn: getUsers,
    deferFn: getUsers, // deferFn 시작과 동시에 fetch 시키지 않고, 반환된 run 함수로 ferch 시킬 수 있습니다.
  });
```

- 밸로퍼트/react-api/api-integrate 참조

---

## `immer (객체의 불변성을 지키기 위한 라이브러리)`

```
yarn add immer
```

```
// import immer from 'immer';
// 보통 import 시 produce(생기게 하다) 라는 단어를 많이 사용합니다.
// 물론 immer 로 불러와도 상관은 없습니다.

import produce from 'immer';

window.produce = produce;
// 크롬에서 아래 코드 복사 후 확인 가능

console.log(produce);

const state = {
  number: 1,
  donChangeMe: 2,
};

const nextState = produce(state, (draft) => {
  draft.number += 1; // 여기서 보시다 싶이 특정 값을 바꿀때
  // 불변성을 지키지 않았지만 값을 참조 할때 state가 아닌 draft 를 참조 하여 작성합니다.
});

console.log(nextState);
// {number: 2, donChangeMe: 2}

console.log(state); // 기존의 원본 object는 변경되지 않았습니다.
// {number: 1, donChangeMe: 2}

const array = [
  { id: 1, text: 'hello' },
  { id: 3, text: 'byeo' },
  { id: 3, text: 'lalala' },
];

const nextArray = produce(array, (draft) => {
  draft.push({ id: 4, text: 'blabla' });
  draft[0].text = draft[0].text + ' world';
});

console.log(nextArray);
// (4) [{…}, {…}, {…}, {…}]
// 0: {id: 1, text: "hello world"}
// 1: {id: 3, text: "byeo"}
// 2: {id: 3, text: "lalala"}
// 3: {id: 4, text: "blabla"}
// length: 4
// __proto__: Array(0)

console.log(array); // 원본 배열을 바뀌지 않았습니다.
// (3) [{…}, {…}, {…}]
// 0: {id: 1, text: "hello"}
// 1: {id: 3, text: "byeo"}
// 2: {id: 3, text: "lalala"}
// length: 3
// __proto__: Array(0)
```

- 밸로퍼트/01. react-tutorial/begin-react 참조

---

## `styled-components` 라이브러리

```
yarn add styled-components
```

### 실전 사용 예제

```
import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: ${props.huge};
      height: 10rem;
    `}
`;

function App() {
  return (
    <>
      <Circle color="black" />
      <Circle color="blue" huge="10rem" />
    </>
  );
}

export default App;
```

```
import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return (
    <>
      <Circle color="black" />
      <Circle color="blue" huge />
    </>
  );
}

export default App;
```

- 밸로퍼트/02. react-styling/styling-with-styled-components 참조

---

## `polished 스타일 유틸 함수 (라이브러리) 소개`

[polished](https://polished.js.org/)  
: 많은 내장 함수가 존재 하므로 사용시 꼭 확인 부탁 드립니다.

polished 라이브러리는 css 스타일링을 할때, 많이 사용 되는 코드를 함수형태로 모아놓고,  
개발자가 해당 css를 적용하고 싶을때 함수를 호출하여 사용 합니다.

```
yarn add polished
```

- 밸로퍼트/02. react-styling/styling-with-styled-components 참조

---

## `Sass`

```
yarn add node-sass
```

.scss 로 파일 확장자 명을 가져 갑니다.

사용예시

```
// 변수 선언 $ 로 사용 합니다.
// 주석 작성이 js 파일 과 같이 //로 사용 가능합니다.

$blue: #339be6;

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  height: 2.25rem;
  // rem: 현재 브라우저 페이지의 기본 폰트 사이즈에 기반 하여 사이즈 결정
  // 크롬: 기본 px => 16px // 16 * 2.25 = 36
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;

  background-color: $blue;
  &:hover {
    background-color: lighten($blue, 10%);
    // 첫번째 parameter: 우리가 설정한 버튼의 배경색
    // 두번째 parameter: 밝기 조절 예 : 10% => 호버시 버튼이 10% 밝아 집니다.
  }
  &:active {
    background-color: darken($blue, 10%);
    // lighten 과 는 달리 2번째 parameter로 인하여 색이 어두워 집니다.
  }
}
```

- 벨로퍼트/02. react-styling/styling-with-sass 참조

---

## `classNames`

: 클래스의 이름이 복작해질때, 다양한 방법으로 클래스 이름을 조합 할 수 있게 도와 주는 라이브 러리 입니다.

```
yarn add classnames
```

사용예시

```
// classNames 라이브 러리는 클래스명을 다양하게 조합하여 사용 할 수 있습니다.
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': flase }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames(['foo', 'bar']); // => 'foo bar'

// 동시에 여러개의 타입으로 받아올 수 도 있습니다.
classNames('foo', { bar: true, duck: flase }, 'baz', { quux: true }); / => 'foo bar baz quux'

// false, null, 0, undefined 는 무시됩니다.
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); //=> 'bar 1'
```

- 벨로퍼트/02. react-styling/styling-with-sass 참조

💜postcss(css의 모듈화) 와 연동

```
import classNames from 'classnames/bind'
```

bind 란 유틸리티를 불러서 해당 모듈의 바인딩 처리 한후 사용 할 수 있습니다.

```
import styles from '~.module.css || .scss'
const cx = classNames.bind(stylse);

<Component className={cx('blabla', {foo: true})} />
```

- 벨로퍼트/02. react-styling/styling-with-css-module 참조

---

## `react-icons`

![리액트 전용](./logo/favicon.ico)  
[React Icons](https://react-icons.github.io/react-icons/)

설치

```
yarn add react-icons
```

사용법

```
import { IconName } from "react-icons/md";

<IconName />
```

md: Material Design icons 의 약어
해당 디자인의 아이콘 마다 들어가는 naming이 다르게 됩니다.  
이점 유의 하세요.  
자세한 내용은 해당 홈페이지 내에서 확인 할 수 있습니다.

또한 사용 하고자 하는 컴포넌트 내에서 컴포넌트의 형식으로 사용 합니다.

- 벨로퍼트/02. react-styling/styling-with-css-module 참조

---

## `FontAwesome`

```
yarn add @fortawesome/fontawesome-free
```

index.js에 추가해야 하는 코드

```
import '@fortawesome/fontawesome-free/js/all.js';
```

---

## `Sentry`

[Sentry](https://sentry.io/welcome/)

[Sentry DOC](https://docs.sentry.io/)

```
yarn add @sentry/react @sentry/tracing
```

index.js에 추가해야 하는 코드

```
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
```

---

## `prop-types`

![리액트 전용](./logo/favicon.ico)

```
npm i prop-types
```

props 의 type을 알아 볼수 있게 도와줍니다.

```
import PropTypes from "prop-types"

component.propTypes = {
props이름 : PropTypes.데이터형(string).옵션(isRequired)-필수인지 아닌지
}
```

---

## `React 종합 libray (ui 포함)`

![리액트 전용](./logo/favicon.ico)

[종합 - 기능, 디자인(github)](https://github.com/brillout/awesome-react-components)

---
