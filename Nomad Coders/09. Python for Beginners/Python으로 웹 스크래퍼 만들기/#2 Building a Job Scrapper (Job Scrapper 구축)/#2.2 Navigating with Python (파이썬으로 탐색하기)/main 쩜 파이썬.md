# FIXME:TODO: #2.2 Navigating with Python (파이썬으로 탐색하기)

# 1. 먼저 파이썬을 사용하여 웹사이트의 url로 접근합니다.
# 2. page 가 얼마나 존재하는지 알아야 합니다.
# 3. 웹사이트 접근을 위해 requests package를 설치합니다.
# 4. requests를 import하여 requests.get() 함수를 이용하여 url에 접근합니다.
# 5. .text를 통하여 html의 모든 정보를 가져옵니다.
# 6. requests를 통해 가져온 html의 정보를 추출하기 위해 beautifulsoup4 package를 설치합니다.
# - [indeed](http://indeed.com/jobs?q=python&limit=50)
# - [stackoverflow](https://www.stackoverflow.com/jobs?q=python)
# import urllib;
# - [python requests](https://github.com/psf/requests) 
# requests : url에 접근하는 package
# - [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
# Beautiful Soup : requests를 통해 url에서 가져온 html에서 정보를 추출하는 package

import requests;
import beautifulsoop4;

indeed_result = requests.get("http://indeed.com/jobs?q=python&limit=50");

print(indeed_result); # <Response [200]>
print(indeed_result.text); # html을 가져옵니다.