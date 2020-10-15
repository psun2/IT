# `Ubuntu Visual Studio Code 설치`

보기 힘들다면 [참고](https://blog.naver.com/tjddjs90/221876478230) 하시기 바랍니다.

Ubuntu 18.04.02 LTS 기준입니다.

## 1. curl 설치

최대한 편하게 설치하기 위해(저의 기준이지만) 먼저 curl을 설치합시다.

```
$ sudo apt install curl
```

## 2. 마이크로소프트 gpg 추가

```
$ sudo sh -c 'curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/microsoft.gpg'
```

한줄로 쳐주세요

## 3. 저장소 추가

```
$ sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
```

한줄로 쳐주세요

## 4. apt 저장소 목록 갱신

```
$ sudo apt-get update
```

## 5. vscode 설치

```
$ sudo apt install code
```

## 6. 실행

```
$ code
```

---

출처: https://hcnam.tistory.com/13
