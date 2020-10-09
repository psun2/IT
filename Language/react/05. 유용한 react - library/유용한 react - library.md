# 유용한 npm library

## React 종합 libray (ui 포함)

[종합 - 기능, 디자인](https://github.com/brillout/awesome-react-components)  

---

## axios

```
npm i axios
```

fetch()와 비슷한 역할을 합니다.

```
axios.get('url');
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