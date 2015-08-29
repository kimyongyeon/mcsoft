<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>MC.Soft Administrator</title>
<link href="/resources/css/style.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<h1>MC Soft Administrator</h1>
	<h2>안녕하세요 MC Soft 관리자페이지입니다. 환영합니다.</h2>
	<h2>
		<c:choose>
			<c:when test="${!empty  USER_SESSION}">
				<c:import url="/admin/main.do" />
			</c:when>
			<c:otherwise>
				<c:import url="/User/UserLoginForm.do" />
			</c:otherwise>
		</c:choose>
	</h2>
	
</body>
</html>