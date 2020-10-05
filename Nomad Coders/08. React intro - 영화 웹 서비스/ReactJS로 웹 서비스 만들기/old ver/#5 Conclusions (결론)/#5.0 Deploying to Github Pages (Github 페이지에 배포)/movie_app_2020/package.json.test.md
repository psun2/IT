{
"name": "movie_app_2020",
"version": "0.1.0",
"private": true,
"dependencies": {
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.3.2",
"@testing-library/user-event": "^7.1.2",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.1"
},
✅"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
3️⃣ npm run build
4️⃣ "deploy": "gh-pages -d build",
"-d : directory // 즉 폴더의 약자"
5️⃣ "predeploy": "npm run build"
TODO: predeplory 는 npm run build 명령어를 실행하고 build 스크립트를 호출합니다.
"build": "react-scripts build", 이 구문 이 실행되고
build script 는 build folder 를 반환합니다.
완료가 되면 predeploy는 끝나게 될것이고,
그리고 deploy가 실행됩니다.
deploy 는 gh-pages 를 호출하게 됩니다.
그 후 build script 로 반환 받은 build 폴더를 gh-pages 에 업로드 하게 됩니다.
6️⃣npm run deploy
},
"eslintConfig": {
"extends": "react-app"
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},
✅
1️⃣ npm i gh-pages
2️⃣"homepage": "https://{your github username}.github.io/{the name of your project in github}" // {} 생략
}

✅
7️⃣
업데이트가 된 내용이 있으면 npm run deploy 를 다시한번 입력합니다.
