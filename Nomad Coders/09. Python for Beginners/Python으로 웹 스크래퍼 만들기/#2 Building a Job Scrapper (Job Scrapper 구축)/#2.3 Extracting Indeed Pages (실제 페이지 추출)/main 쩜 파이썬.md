# FIXME:TODO: #2.3 Extracting Indeed Pages (실제 페이지 추출)

import requests;
# import beautifulsoop4;
from bs4 import BeautifulSoup;

url = "http://indeed.com/jobs?q=python&limit=50";
indeed_result = requests.get(url);

# print(indeed_result); # <Response [200]>
# print(indeed_result.text); # html을 가져옵니다.

indeed_soup = BeautifulSoup(indeed_result.text, "html.parser");

# print(indeed_soup);

pagination = indeed_soup.find("div", {"class":"pagination"});

# print(pagination);

pages = pagination.find_all("a");
# print(pages);

spans = [];
for page in pages:
  # print(page.find("span"));
  spans.append(page.find("span"));

# print(spans);
# print(spans[-1]);
# -1은 마지막에서부터 시작해서 첫 item을 나타냅니다.
# print(spans[0:5]);
# 첫번째 부터 다섯번째 요소만 추출합니다.
# print(spans[0:-1]);
print(spans[:-1]);