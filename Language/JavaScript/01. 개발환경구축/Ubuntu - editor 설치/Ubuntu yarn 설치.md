# `Ubuntu yarn 설치`

보기 힘들다면 [참고](https://blog.naver.com/tjddjs90/221876511096) 하시기 바랍니다.

## 1. yarn 설치 방법 ( 원본 문서 : https://yarnpkg.com/en/docs/install )

​
### Debian / Ubuntu

### 저장소 등록하기

$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -  

$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list



### 설치하기

$ sudo apt-get update && sudo apt-get install yarn


---

### CentOS / Fedora / RHEL

### 저장소 등록하기

$ curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo

### 설치하기

$ sudo yum install yarn  
 또는   
$ sudo dnf install yarn


---


출처 : https://www.deok.me/entry/NodeJS-yarn-%EC%9D%84-%EC%84%A4%EC%B9%98%ED%95%98%EA%B3%A0-yarn-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%ED%8C%A8%ED%82%A4%EC%A7%80-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0