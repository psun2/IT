# `git 명령어(학습하면서 계속 업데이트 예정중입니다.)`

[참고](https://blog.naver.com/tjddjs90/221876885733)

명령어 | 설명 
---|:---|
echo "# 1">> README.md|README.md file을 생성합니다.
git init|내 원격 저장소를 초기화 합니다.
git add README.md|원격 저장소에 README.md를 올릴꺼야라고 선언(?) 합니다.
git commit -m "first commit"|first commit 이라는 메세지 즉 커멘트를 달아줍니다.
git remote add origin 깃헙url|origin 의 이름을 가진 remote를 생성합니다.
git push -u origin master|-u 옵션을 주어 README.md를 내 원격 저장소로 복제합니다.
git add -u|-u 옵션은 단순 파일 및 이름등의 변경이나 경로 변경이 있을시 push 하기 위해쓰는 명령어
git add .|변동된 모든 항목을 스테이징 시킨다.
git commit -m "commit"|"commit" 부분에 commit 을 달아 줍니다
git push origin master|GitHub 에 파일을 밀어 넣습니다. 즉 게시물을 게시합니다.
git pull origin master|local 컴퓨터로 git hub 의 자료를 가져 옵니다.
git clone 깃헙url|깃헙url의 저장소를 내 컴퓨터로 다운(?) 받습니다.
git log|git 의 log 즉 지금껏 commit 했던 시점들을 봅니다. 종료 : q
git reset|원하는 로그 로 지점을 되돌립니다.
git status|스테이징 된 파일의 목록을 확인한다 (?)
git remote -v|현재 저장된 원격 저장소의 이름을 찾을 수 있다.
git config --list|config 목록을 보여 줍니다.
git config --global user.name "홍길동"|global 옵션으로 전역에 해당하는 user name 설정
git config --global user.email "support@webisfree.com"|global 옵션으로 전역에 해당하는 user email 설정
git config user.name "홍길동"|해당프로젝트의 user name 설정
git config user.email "support@webisfree.com"|해당프로젝트의 user email 설정
git config --local user.name "이름"|locla 프로젝트의 user name 설정
git config --local user.email "이메일"|locla 프로젝트의 user email 설정
git config --unset user.name|해당프로젝트의 user name 삭제
git config --unset user.email|해당프로젝트의 user email 삭제
git config --unset --global user.name|global 옵션으로 전역에 해당하는 user name 삭제
git config --unset --global user.email|global 옵션으로 전역에 해당하는 user email 삭제
