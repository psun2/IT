# Tag syntax
텍스트 관련 태그
제목 태그
<h1></h1> ~ <h6>

줄바꿈 태그
<br> vs. <p>
<br> : break (엔터)
<p> : paragraph 문단 구분을 위한 태그

강조 태그
<b> vs. <strong>
<b> : bold  단순히 진하게
<strong>정보적 강조 (컴퓨터에게 중요한 정보임을 알림)
예 스크린 리더가 강하게 발음
<abbr> : 밑줄

기울임 태그
<i> vs. <em>
<i> : italic 단순히 기울임
<em> : emphasize
정보적 강조 (컴퓨터에게 중요한 정보임을 알림)
예 스크린 리더가 강하게 발음

기타 태그
<small>
글씨를 작게
<cite> : citation 저작물의 출처 표기 (제목을 표시할 것)

기타 텍스트 관련 태그
<mark> : 사용자가 관심을 가질 만한 정보 강조
예 검색 등 사용자의 행동과 연관 있는 단어
<sup> : superscript (위첨자)
거급제곱, th 등 관례적으로 위 첨자로 넣는 글자일 때
<sub> : subscript (아래첨자)
화학 기호 등 관례적 아래 첨자
<s> : strike (취소선)

인용문 태그
<blockquote> : 텍스트가 긴 인용문에 사용
속성               역할       값
cite인용문의    출처 URLURL  텍스트

가로선 태그
<hr> 태그: 주제나 분위기의 전환 구분
단순 밑줄은 CSS로 대신할 것

이미지 태그
<img> : image
속성                    역할                            값
src         포함하고자 하는 이미지의 절대/상대       경로경로 텍스트
alt         이미지 설명설명문                       텍스트
width       이미지의 가로 길이                      단위 없는 정수값
alt 속성 : 정보 용도
스크린 리더가 읽어주는 값
네트워크 오류, 컨텐츠 차단 죽은 링크 등의 상황 대처
width는 CSS로 대체 가능

하이퍼링크 태그
다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크 설정
<a> : anchor
속성                역할                                값
href        하이퍼링크가 가리키는 URL     http:/https: + 사이트 주소, mailto: +메일주소, tel: + 전화번호
target      링크의 페이지를 열 창 지정     _self (현재 창), _blank (새 탭)...
title       링크의 설명 추가              title="링크에 대한 설명 추가"

목록 태그
어떤 요소들을 포함하는 목록을 나타낼 때 사용합니다.
<ul> > <li>
<ol> > <li>
<ul> : unordered(순서가 없는) list
속성                역할                        값
type        항목 앞의 표시자 모양       disc(기본), square, circle...
<ol> : ordered(순서가 있는) list
속성                역할                    값
type        항목 앞의 표시자 형태       1, A, a, I, i...
start       시작할 번호                 정수 숫자값 (type과 관계없이)
<li> : list item - 목록의 요소
★ 다른 태그들(또 다른 목록 등)을 포함할 수 있음.
포인트 목록 태그는 CSS와 함께 다양한 형태로 활용됨
예: 사이트의 메뉴 항목들

테이블 태그
table > tr > th, td
table > caption
<table> : table - 표
<tr> : table row - 표의 한 열
<th> : table header - 각 열, 행의 머리
속성        역할                              값
scope       무엇(행/열)의 머리인지 표시     col, row...
<td> : table data - 표의 각 칸
속성            역할                    값
colspan     가로로 n개 칸 병함      칸 개수 숫자값
rowspan     세로로 n개 칸 병함      칸 개수 숫자값
★ 다른 태그들을 포함할 수 있음.
<caption> : 표의 제목

구획을 나누는 태그
<div> : division
순수 컨테이너 - 스스로는 아무것도 표현하지 않음
다른 요소들을 묶거나, 문서의 구획을 나누는 데 사용
전역(공통) 속성만 가짐
유사한 <span> (inline 요소)와 달리 블럭 요소
[한계] 코드로는 용도를 추론할 수 없는 단순 컨테이너

Semantics - 의미가 부여된 태그
각 구획의 용도와 내용의 의미를 태그로써 알 수 있도록 함
검색엔진 등이 사이트를 분석하는 데 도움을 줌
<div> 를 대체해서 사용
<header>
페이지의 최상단에 위치
일반적으로 제목, 로고, 검색창 등의 내용 등 포함
페이지의 소개 및 탐색에 도움을 줌
<footer>
페이지의 최하단에 위치
일반적으로 작성자, 저작권 정보, 관련 문서 등 포함
<nav>
링크들(현재 페이지 내 구획 또른 다른 페이지로의)을 포함
<aside>
문서의 주 내용과 간접적으로 연관된 부분
주로 사이드바 등에 사용
<main>
<body>의 주요 컨텐츠
메인 컨텐츠가 이 구획에 들어감
<section>
컨텐츠 내 큰 단위의 독립적인 구획
다른 시맨틱 태그의 의미에 해당하지 않는 구획
<article>
독립적으로 재사용되거나 반복적으로 나타나는 구획
게시판이나 뉴스, 갤러리의 목록상 각 항목

inline 요소
<a> <b> <br> <button> <cite> <em> <i> <img> <input> <label> <script>
<select> <small> <span> <strong> <sub> <sup> <textarea>
button 등 일부는 일반적으로 브라우저에서 inline-block 요소로 변환됨
내용부의 크기가 요소의 크기를 결정 (자체적 크기 없음)
높이, 너비, 외부/내부 여백 설정 불가
내용부의 가로, 세로 정렬 설정 불가
줄바꿈을 강제하지 않음
보통은 다른 데이터와 인라인 요소만 포함 (블록 레벨 요소 포함 불가)

block level 요소
<article> <aside> <blockquote> <div> <footer> <form> <h1>~<h6>
<header> <hr> <li> <nav> <ol> <p> <section> <ul>
자체적인 크기와 여백을 가짐
부모 요소의 한 줄을 독점, 강제 줄바꿈 (자기 너비에 관계없이)
일반적으로 타 인라인 요소와 블록 레벨 요소를 포함 가능

inline-block 요소
inline 요소와 block 요소의 특징을 혼합
자체적인 크기와 여백을 가짐
줄바꿈을 강제하지 않음

<form>
정보 제출에 사용되는 문서 구획
내부 입력 양식들의 부모, 컨테이너 역할
입력된 정보들을 어떻게 서버에 전달할지 설정
내부에 폼 관련 태그가 아닌 요소도 포함 가능

속성                     역할                               값
id              고유값 (이전의 name을 대체)
name            id를 사용할 것  텍스트
method          입력된 정보들의 전달 방식                    get, post
action          정보들을 처리할 서버상의 프로그램 지정        텍스트
autocomplete    이전 입력 내역 있을 시 자동완성              on, off
<form> 태그 없이도 정보 제출이 가능하지만, 활용시 여러 유용한 기능들이 있음

<input>
공통 속성               역할                     값        비고
id              고유값, label과 연결           텍스트
autocomplete    자동완성                      boolean
autofocus       페이지로 들어올 때 커서가 위치  boolean                     페이지에서하나만사용되어야 함
disabled        수정 불가, 값이 전송되지 않음   boolean
name            서버로 전송될 항목명            텍스트
readonly        수정 불가, 입력된 값은 전송됨    boolean


기억하세요!

HTML 태그로 디자인을 하지 말 것 (디자인은 CSS로)
HTML 태그들의 주 용도: 정보의 구조와 특성 표현