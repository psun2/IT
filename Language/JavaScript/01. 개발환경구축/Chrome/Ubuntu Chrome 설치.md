# `Ubuntu Chrome 설치`

보기 힘들다면 [참고](https://blog.naver.com/tjddjs90/221876470505) 하시기 바랍니다.

Ubuntu 18.04에 크롬 웹 브라우저를 설치하는 방법을 설명합니다. 

## 1. 크롬 웹 브라우저 패키지를 설치하기 위해 필요한 인증키를 등록합니다. 

​wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
  

## 2. 크롬 웹 브라우저 패키지를 다운로드 받을 PPA를 sources.list.d에 추가합니다. 

sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'  


​
## 3. 추가한 PPA로부터 설치 가능할 크롬 웹브라우저 패키지 정보를 가져오기 위해 패키지 리스트를 업데이트합니다.

​sudo apt-get update


## 4. 이제 크롬 웹 브라우저를 설치 할 수 있습니다

sudo apt-get install google-chrome-stable


## 5. 설치 이후 확인해보면, 자동으로 생성된 google-chrome.list 파일이 보입니다.

webnautes@webnautes-pc:~$ ls /etc/apt/sources.list.d/google*
/etc/apt/sources.list.d/google-chrome.list /etc/apt/sources.list.d/google.list

​
## 6. 패키지 리스트 업데이트 시(apt-get update) 다음과 같은 에러가 발생할 수 있기 때문에 

W: Target Packages (main/binary-amd64/Packages) is configured multiple times in /etc/apt/sources.list.d/google-chrome.list:3 and /etc/apt/sources.list.d/google.list:1
  


## 7. 설치를 위해 생성했던 파일은 다음처럼 지워줘야 합니다. 

sudo rm -rf /etc/apt/sources.list.d/google.list


---

출처 : https://webnautes.tistory.com/1184