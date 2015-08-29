<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>웹 표준 기술</title>
<link href="/resource/css/sample01.css" type="text/css" rel="stylesheet" />
<link rel="shortcut icon" href="img/coforward.ico" />
</head>
<body>
	<h1>INTRODUCE</h1>
	<h2>지금 시간 : " The time on the server is ${serverTime}</h2>
	<p>각 구성단위별 설명입니다.</p>
	
	<div id="SERVER">
	    <h2>SERVER</h2>
	    <p>WEB Main Page Url [사용자]: http://211.229.212.207:8080/</p>
	    <p>WEB Main Page Url [관리자]: http://211.229.212.207:8080/admin/main.do</p>
	    <p>WEB Login Url : http://211.229.212.207:8080/UserLogin.do : 로그인 후에는 홈으로 이동합니다. 아직 로그아웃은 없습니다.</p>
	    <p>Mobile Call Url : http://211.229.212.207:8080/PCS_MOBILE?TR_CODE=PCS_SAMPLE_TRCODE :  모바일은 크롬 및 파이어폭스, 오페라등 JSON 을 지원하는 브라우저로 테스트하세요</p>
	    <P>## Multi DataBase Connection Supply (다중으로 데이터베이스 커넥션 제공)##</P>
		<P>## 사용자 접속통계 (모바일, 웹 구분하여 토탈접속통계) ##</P>
	</div>
	
	<div id="ANDROID">
	    <h2>ANDROID</h2>
	    <P>## 2013.11.06 : Android JavaScript InterFace 구현 ##</P>
		<P>## 2013.11.06 : Android Http Connection 구현 (json callback)##</P>
	</div>
	
	<div id="HTML">
		<h2>HTML</h2>
		<p>HTML 에는 웹이 전달하고자 하는 정보가 담겨 있습니다. 따라서 웹을 통해 전달하고자 하는 주요한 정보들은 가능한 한 모두 HTML 안에 담아야 합니다</p>
	</div>
	
	<div id="JAVASCRIPT">
		<h2>JAVASCRIPT</h2>
		<p>javascript는 웹 브라우저상에서 해석되거나 동작하는 프로그램 언어로, 사용자 측의 동적 요소를 담당합니다. 문서를 기반으로 하는 기존의 웹에서는 부가적인 요소였지만, 웹이 애플리케이션화되어 가면서 역할이 점차 중요해지고 있습니다.</p>
	</div>

	<p>웹 표준 기술 요소는 서로 분리된 구조로 사용할 때 장점을 극대화시킬 수 있습니다.</p>

	<div id="dateName"><span>2011. 11. 06</span> <em>피클즈 : 엄진영</em></div>

</body>
</html>