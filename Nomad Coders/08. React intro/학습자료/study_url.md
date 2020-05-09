# ReactJS로 웹 서비스 만들기
- [Academy](https://academy.nomadcoders.co/)

---

# 0 Introduction (소개)

## 0.1 Requirements (요구 사항)
- [nodejs](https://nodejs.org/ko/)

-설치-
nodejs, npm
node -v
npm -v
npx : npm install npx -g
npx -v

- [git](https://git-scm.com/downloads)
git --version

## 0.3 Why React (왜 리액트)
- [airbnb](https://www.airbnb.co.kr/?_set_bev_on_new_domain=1587733816_k8%2FquwHNa148VREX)
- [npm](https://www.npmjs.com/package/react)

---

# 1 Setup

## 1.0 Creating your first React App (첫 React 앱 만들기)
npx create-react-app folderName
npm start // yarn start

## 1.1 Creating a Github Repository (Github 리포지토리 생성)
1. git init
2. git remote add url
3. git add .
4. git commit -m "send message"
5. git push origin master

## 1.2 How does React work? (React는 어떻게 작동합니까?)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/c8ad2777cd947577c1d37cdb352f57adc02715ea)

---

#2 JSX & Props (JSX 및 propertys속성들)

## 2.0 Creating your first React Component (첫 번째 React 컴포넌트 생성)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/59cce1b820446fbe8082e474c0dbc7eda881fb2b)

## 2.1 Reusable Components with JSX + Props (JSX + 소품으로 재사용 가능한 컴포넌트 # 2.1)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/fe46e7d72f881957b8b02b9577a2a653cc564df3)

## 2.2 Dynamic Component Generation (동적 컴포넌트 생성)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/1c1b76de8c9474f3b8744bbc1256c5e379dbf47c)

## 2.3 .map Recap (맵 정리)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/37bffcefb8ff938f179eaa2f7aa03d0d4db9bc5d)

## 2.4 Protection with PropTypes (PropType으로 보호)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/8cda4ac2bff5aef0b5fc79b3d5d7d3870597b505)
### npm i prop-types 
: 전달받은 props가 내가 원하는 props인지 확인해 줍니다.
설치를 확인하려면 package.JSON 에서 볼 수 있습니다.
import PropTypes from "prop-types"
component.propTypes = {
component 의 props 의 name.PropTypes.데이터형(string).옵션(isRequired)-필수인지 아닌지
}

---

#3 state (상태)

## 3.0 Class Components and State (3.0 클래스 구성 요소 및 상태)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/cc168ef2a5051959907ee39859a0463155142347)

## 3.1 All you need to know about State (상태에 관해 알아야 할 모든 것)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/f6ec493d50c0c739f935d4ad9b3b43e449af8706)

## 3.2 Component Life Cycle (구성 요소 수명주기)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/cf8dbe6adda843669a297248c5e8650b8718080b)

##3.3 Planning the Movie Component (영화 구성 요소 계획)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/4331781051ca928d4bd7eb134c300e9118af6cee)

---

# 4 Making the Movie App (영화 앱 만들기)

## 4.0 Fetching Movies from API (API에서 영화 가져 오기)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/585423283e442c51ba944816e9b1552ddaa05cba)
### npm i axios
: fetch의 역할을 합니다.
- [movie API](https://yts.mx/)
팝업이 실행되기전 재빠르게 페이지의 footer의 API탭으로 이동합니다.
- [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=ko)
- [yts-proxy GitHub_Nomard](https://github.com/serranoarevalo/yts-proxy)
- [yts-proxy.JSON](https://yts-proxy.now.sh/list_movies.json)
url이 계속 바뀌어 오류의 원인이 된다고 하니 노마드의 yts-proxy를 사용합니다.

## 4.1 Rendering the Movies (영화 렌더링)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/bb5b433bed6198aade1835fae6e181bab7b41f89)
- [yts-proxy.JSON](https://yts-proxy.now.sh/list_movies.json)
- [movie API](https://yts.mx/)
팝업이 실행되기전 재빠르게 페이지의 footer의 API탭으로 이동합니다.

## 4.2 Styling the Movies (영화 스타일링)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/1777ae1284fdfd0b60e18e84f46d952a0a7548c3)

## 4.3 Adding Genres (장르 추가)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/a51e4ec2302165e41c8068f0eaa3f4f359080a0d)

## 4.4 Styles Timelapse (스타일 저속)
- [Github Commit](https://github.com/nomadcoders/movie_app_2019/commit/c0a3270f5824c2555e2621190c6307cbaefe0704)