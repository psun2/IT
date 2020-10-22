# VScode setting.json

[참고](https://blog.naver.com/tjddjs90/221896463505)

setting.json 파일 여는 법 : [참고](https://blog.naver.com/tjddjs90/221882238551)

```
{
  // TODO: 글꼴및 합자를 관리하는 셋팅
  "editor.fontFamily": "D2Coding ligature, D2Coding, Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  // TODO: 아이콘 theme
  "workbench.iconTheme": "vscode-icons",
  //TODO: theme
  "workbench.colorTheme": "Community Material Theme",
  // TODO: HTML CSS Support 설정
  // TODO: Remote Style Sheets 의 내용은 자신이 사용할 프레임워크의 CDN 주소를 입력합니다.
  "css.remoteStyleSheets": [
    // TODO: BootStrap
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
    // TODO: Material (google)
    "https://code.getmdl.io/1.3.0/material.indigo-pink.min.css",
    // TODO: Material icon (google)
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    // TODO: FontAwesome
    "https://kit.fontawesome.com/5d1d5aa1e7.js"
  ],
  "css.fileExtensions": ["css", "scss"],
  "workbench.startupEditor": "newUntitledFile",
  "code-runner.clearPreviousOutput": true,
  "window.zoomLevel": 0,

  "editor.tokenColorCustomizations": {
    "comments": "#d39e9e" //TODO:  주석 색상변경
  },
  // TODO: 자바스크립트 기본 편집기 사용 off
  // "javascript.format.enable": false,
  //TODO: 저장시 편집기를 실행하여 자동 정렬
  "editor.formatOnSave": true,
  "files.autoSave": "off",
  // TODO: 이 에디터 편집기의 기본 포멧터를 prettier 로 지정
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // TODO: prettier 설정
  "prettier.singleQuote": true, // 홀따옴표 사용
  "prettier.semi": true, // 세미콜론
  "prettier.useTabs": false, // tab 대신 스페이스를 사용합니다.
  "prettier.tabWidth": 2, // tab 은 2칸
  "prettier.trailingComma": "all", // 객체, 배열 모든요소에 ,(콤마)
  "prettier.printWidth": 80
}
```
