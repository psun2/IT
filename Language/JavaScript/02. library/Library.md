# Library

: 현페이지 에서 설명하는 라이브러리는 CLI를 기본으로 작성합니다.

---

## `prettier`

- [Vscode] 폴더에서 확인가능
- 밸로퍼트/useful-tools 참조

---

## `EsLint`

- [Vscode] 폴더에서 확인가능
- 밸로퍼트/useful-tools 참조

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
- 노마드 react-hooks 참조

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

- 벨로퍼트 styling-with-sass 참조

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

- 밸로퍼트/basic-react 참조

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

## `EsLint`

- [Vscode] 폴더에서 확인가능
- 밸로퍼트/useful-tools 참조

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
