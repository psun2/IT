# react_native & expo

> [노마드 강의 주소 바로가기](https://nomadcoders.co/react-native-fundamentals/lectures/1713)

> [react-native 공식 사이트](https://reactnative.dev/)

> [expo playstore - 안드로이드](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=ko)

> [expo appstore - 아이폰(ios)](https://apps.apple.com/us/app/expo-client/id982107779)

> [react-native expo set_up](https://reactnative.dev/docs/environment-setup)

---

## reactnative 의 강점

Javascript 라는 언어 하나로 ios 앱 과 안드로이드 앱, 웹 앱을 한번에 만들수 있습니다.

현재 저의 생각으로는 무엇인가 좋아 보이지만 native 만 한 것이 없는 것 같습니다. (swift, kotlin)

---

## SETUP

1. Xcode ios Simulator 설치 (expo 회원가입 필수!!)
2. 안드로이드 핸드폰 준비 (QR코드로 바로 진행 가능)
3. [react-native expo set_up](https://reactnative.dev/docs/environment-setup) 참고

> Node 12 LTS 이상이 설치되어 있다고 가정하면 npm을 사용하여 Expo CLI 명령 줄 유틸리티를 설치할 수 있습니다.

```
npm install -g expo-cli
```

> 그런 다음 다음 명령을 실행하여 "AwesomeProject"라는 새 React Native 프로젝트를 만듭니다.
> expo init AwesomeProject

```
expo init AwesomeProject
```

> 개발 서버 가동전 vscode를 실행 합니다.

```
code .
```

> 그 후 해당 Directory에 접근 합니다.

```
cd AwesomeProject
```

> 마지막으로 개발서버를 실행 합니다.

```
npm start # you can also use: expo start
yarn start
```

> 개발서버 종료

```
ctrl + c
```

---

## 현재까지 알고 있는 Component

`❗❗View` : div 의 역할을 하며 주로 container 용도로 쓰입니다.  
`❗❗Text` : span 의 역할을 하며 주로 텍스트를 담습니다.  
`❗❗StyleSheet` : create() 함수로 stylesheet 를 생성합니다. (함수의 인자로는 오브젝트를 받습니다.)
