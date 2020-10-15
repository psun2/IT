# `Ubuntu Atom 설치`

보기 힘들다면 [참고](https://blog.naver.com/tjddjs90/221876481928) 하시기 바랍니다.

Atom 을 아직은 메인으로사용하지는 않지만...


이번에 민트 설치 후 한번 설치 해 보았습니다.


## 1. 우선 저장소를 추가 합니다.


$ sudo apt-get -y install wget

$ wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -

$ sudo sh -c 'echo "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'

## 2. 그리고 업데이트 를 한번 해주고..

$ sudo apt-get update

## 3. 설치 를 해 줍니다.

$ sudo apt-get -y install atom

## 4. 최신 배타 버전을 원한다면..

$ sudo apt-get install atom-beta


---

출처 : https://blog.naver.com/PostView.nhn?blogId=linuxni&logNo=221527322474&parentCategoryNo=&categoryNo=35&viewDate=&isShowPopularPosts=false&from=postView