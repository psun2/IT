<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP 게시판 웹 사이트</title>
</head>
<body>
폴더를 바꾸면서 Error 발생
해결방법 : window -> preferences -> server
해당 프로젝트 우클릭 -> properties -> project Facets -> Java -> Runtimes -> tomcat 버전 
	<script>
		location.href = 'login.jsp'
		<%-- 방문자가 접속과 동시에 로그인 페이지로 넘어갑니다.--%>
	</script>
</body>
</html>