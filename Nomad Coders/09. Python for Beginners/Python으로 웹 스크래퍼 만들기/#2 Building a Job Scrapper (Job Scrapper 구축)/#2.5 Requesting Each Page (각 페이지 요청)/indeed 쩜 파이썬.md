# FIXME:TODO: #2.5 Requesting Each Page (각 페이지 요청)

import requests
from bs4 import BeautifulSoup

URL = "http://indeed.com/jobs?q=python&limit=50"
LIMIT = 50

def extract_indeed_pages():
  result = requests.get(URL)
  # print(result)

  soup = BeautifulSoup(result.text, "html.parser")
  # print(soup)

  pagination = soup.find("div", {"class": "pagination"})
  # print(pagination)

  links = pagination.find_all("a")
  # print(links)

  pages = []
  for link in links[:-1]:
  # for link in links[0:19]:
    pages.append(int(link.string))
  # print(pages)

  # for page in pages:
  #   print(type(page))

  max_page = pages[:-1]
  # print(f"여기는 pages\n{pages}")
  # print(f"여기는 max_page\n{max_page}")

  max_page = pages[-1] # 마지막 번호 추출
  # print(max_page)
  return max_page

# print(range(max_page)) # range를 사용하면 list를 만들수 있습니다.

# indeend의 2번째 페이지는 start=50 이됩니다. https://www.indeed.com/jobs?q=python&limit=50&start=50
# indeend의 3번째 페이지는 start=100 이됩니다. 
# https://www.indeed.com/jobs?q=python&limit=50&start=100
# 페이지가 바뀔때마다 start가 50씩 늘어납니다.

# for n in range(max_page):
#   # print(n);
#   # print(n * 50) # 페이지에 따라 start가 50씩 늘어 나므로 50을 곱해줍니다.
#   print(f"start={n * 50}") # 이 값이 요청할 값 입니다.

def extract_indeed_jops(last_page):
  jops = []
  for page in range(last_page):
    # print(f"start={last_page * LIMIT}")
    result = requests.get(f"{URL}&start={last_page * LIMIT}")
    print(result.status_code)
  return jops