# 유용한 npm library

## React 종합 libray (ui 포함)

[종합 - 기능, 디자인](https://github.com/brillout/awesome-react-components)  

---

## axios
- 드림코딩/cardmaker 참조
- 노마드 react-hooks 참조

```
npm i axios
```

fetch()와 비슷한 역할을 합니다.

```
axios.get('url');
```

---

## immer (객체의 불변성을 지키기 위한 라이브러리)

- 밸로퍼트/basic-react 참조

```
yarn add immer
```

```
// import immer from 'immer';
// 보통 import 시 produce(생기게 하다) 라는 단어를 많이 사용합니다.
// 물론 immer 로 불러와도 상관은 없습니다.

import produce from 'immer';

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

---

## prop-types

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

## FontAwesome

```
yarn add @fortawesome/fontawesome-free
```

index.js에 추가해야 하는 코드

```
import '@fortawesome/fontawesome-free/js/all.js';
```

--- 

## Sentry

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
