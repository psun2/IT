# FIXME:TODO: #2.5 Requesting Each Page (각 페이지 요청)

from indeed import extract_indeed_pages, extract_indeed_jops

last_indeed_pages = extract_indeed_pages()
print(last_indeed_pages)

extract_indeed_jops(last_indeed_pages)