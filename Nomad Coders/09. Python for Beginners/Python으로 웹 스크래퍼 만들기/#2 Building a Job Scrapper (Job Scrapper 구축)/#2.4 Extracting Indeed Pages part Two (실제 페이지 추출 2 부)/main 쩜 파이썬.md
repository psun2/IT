# FIXME:TODO: #2.4 Extracting Indeed Pages part Two (실제 페이지 추출 2 부)

import requests
from bs4 import BeautifulSoup

indeed_result = requests.get("http://indeed.com/jobs?q=python&limit=50")

indeed_soup = BeautifulSoup(indeed_result.text, "html.parser")

pagination = indeed_soup.find("div", {"class" : "pagination"})

links = pagination.find_all('a')
pages = []
# for link in links:
for link in links[:-1]:
  #마지막 요소에 next라는 String이 있는데 int 로 정수로 바꿀 수 없으므로, -1을해 읽지 않게 해줍니다.
  # pages.append(link.find("span")) 
  # pages.append(link.find("span").string) 
  # pages.append(link.string) 
  pages.append(int(link.string)) 
# pages = pages[0:-1]
print(pages) # pagesNumbers

for page in pages:
  print(type(page), page)
  

print(pages[-1]) # 20

max_page = pages[-1]
print(max_page)