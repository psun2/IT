# `create-react-app 설치`

[참조](https://blog.naver.com/tjddjs90/221879905828)

## 설치

create-react-app 은 이름이 뜻하듯이, 리액트 앱을 만들어주는 도구입니다. 다음 명령어를 입력하여 설치 할 수 있습니다.



## 1. npm 을 이용한 설치​

npm install -g create-react-app
​

## 2. yarn 을 통하여 설치하고 싶다면 다음과 같이 입력하시면 됩니다.

yarn global add create-react-app
​

## 3. mvn 설치시 설정

​
윈도우라면 상관 없지만, 만약에 여러분이 리눅스, 혹은 macOS 유저여서 nvm 을 통하여 Node.js 를 설치했다면 yarn global 설치가 제대로 작동하기 위해선 다음 커맨드를 사전에 입력해주셔야 합니다.  

`macOS:`  
echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bash_profile  
`Linux:`  
echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bashrc
​
---
