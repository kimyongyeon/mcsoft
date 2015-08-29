<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>MC.Soft Administrator</title>
<link href="/resources/css/admin.css" type="text/css" rel="stylesheet" />

</head>
<script type="text/javascript">
	var person = function(id, pw) {
		this.user_id = id;
		this.user_pw = pw;
	};
	
	function fnLogin() {
		var frm = document.getElementById("LoginForm");
		person = new person("aa", "bb");
		
		frm.action = "/User/UserLogin.do";
		frm.submit();
	}
</script>

<body>
<form name="LoginForm" id="LoginForm" method="post">

	
	<div class="login_frm">
        <div class="login_box">
            <p>
                <label for="f_id"><img src="/resources/img/tit_id.png" alt="ID" /></label>
                <input type="text" id="user_id" name="user_id"/>
            </p>
            <p>
                <label for="f_pw"><img src="/resources/img/tit_pw.png" alt="PW" /></label>
                <input type="password" id="user_pw" name="user_pw"/>
                <input type="image" src="/resources/img/btn_login.png" alt="LOGIN" onclick="javascript:fnLogin()"/>
            </p>
        </div>
        <p class="login_footer">Copyright (C) 2014 by MCSOFT AII rights reserved.</p>
    </div>
	
</form>
</body>
</html>
