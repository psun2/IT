# `Ubuntu Node.js 설치`

보기 힘들다면 [참고](https://blog.naver.com/tjddjs90/221876503476) 하시기 바랍니다.

[node.js공식다운로드](https://nodejs.org/ko/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages)

Node.js 는 빠르고 확장 가능한 네트워크 애플리케이션을 쉽게 구축 할 수 있도록 Chrome의 JavaScript 런타임에 구축 된 플랫폼입니다. 최신 버전의 node.js ppa 는 공식 웹 사이트에서 관리하고 있습니다. 이 PPA를 Ubuntu 19.10, 18.04 LTS, 16.04 LTS (Trusty Tahr) 및 14.04 LTS (Xenial Xerus) 시스템에 추가하고 쉬운 명령으로 Linux VPS에 node.js를 설치할 수 있습니다.

특정 nodejs 버전을 설치하려면 학습서 [NVM과 함께 특정 Nodejs 버전 설치](https://tecadmin.net/install-nodejs-with-nvm/)를 방문하십시오 .


## 1 단계 – Node.js PPA 추가

Node.js 패키지는 LTS 릴리스 및 현재 릴리스에서 사용할 수 있습니다. 요구 사항에 따라 시스템에 설치할 버전을 선택하는 것이 좋습니다. Ubuntu에 Nodejs를 설치하기 위해 시스템에 PPA를 추가해 봅시다.

현재 릴리스 사용 : 이 학습서의 마지막 업데이트에서 Node.js 13은 사용 가능한 현재 Node.js 릴리스입니다.

$ sudo apt-get install curl  
$ curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -

LTS 릴리스 사용 : 이 학습서의 마지막 업데이트에서 Node.js 12.x는 사용 가능한 LTS 릴리스입니다.

$ sudo apt-get install curl  
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

## 2 단계 – Ubuntu에 Node.js 설치

Ubuntu 시스템에 Node.js PPA를 성공적으로 추가 할 수 있습니다. 이제 apt-get을 사용하여 아래 명령 install node on 및 Ubuntu를 실행하십시오. 또한 node.js와 함께 NPM을 설치합니다. 이 명령은 또한 시스템에 다른 많은 종속 패키지를 설치합니다.

$ sudo apt-get install nodejs

## 3 단계 – Node.js 및 NPM 버전 확인

$ node -v   
$ npm -v 


---

출처 : https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/