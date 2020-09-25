# VScode setting.json

[참고](https://blog.naver.com/tjddjs90/221896463505)

setting.json 파일 여는 법 : [참고](https://blog.naver.com/tjddjs90/221882238551)

```

{  
// TODO: 아이콘 theme  
"workbench.iconTheme": "vscode-icons",
//TODO: theme  
"workbench.colorTheme": "Community Material Theme",
// TODO: HTML CSS Support 설정  
// TODO: Remote Style Sheets 의 내용은 자신이 사용할 프레임워크의 CDN 주소를 입력합니다.  
 "css.remoteStyleSheets": [
"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
],
"css.fileExtensions": ["css", "scss"],
//TODO: 편집기 형식 저장 (저장시 정렬(?))  
"editor.formatOnSave": true,
// TODO: 자바스크립트 기본 편집기 사용 off  
"javascript.format.enable": false,
// TODO: prettier 설정  
"prettier.singleQuote": true, // 홀따옴표 사용
"prettier.semi": true, // 세미콜론
"prettier.useTabs": false, // tab 대신 스페이스를 사용합니다.
"prettier.tabWidth": 2, // tab 은 2칸
"prettier.trailingComma": "all", // 객체, 배열 모든요소에 ,(콤마)
"prettier.printWidth": 80,
"window.zoomLevel": 0,
"files.autoSave": "off",
"workbench.startupEditor": "newUntitledFile",
"code-runner.clearPreviousOutput": true  
}

```
