동빈나 5강

1명의 고객의 정보가 많아서 다루기 어려울때 ?

component 를 분해해서 관리 

배열화 시킨 객체 

map 함수

사용후 개발자 도구를 보았더니 에러가 떳음

index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in Customer (at App.js:39)
    in App (at src/index.js:9)
    in StrictMode (at src/index.js:8)

key란걸 넣어 주어야 한다고함 

key값을 주어 각각의 원소를 구분할 수 있도록 해야 한다고함.

key={c.id}
