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

<script type="text/javascript">
	
	function fn_list() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/menu/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_write() {
		var frm = document.forms[0];
		
		if(frm.main_menu_nm.value === "") {
			alert("메뉴명을 넣어주세요");
			return;
		}
		
		if(frm.main_menu_url.value === "") {
			alert("메뉴URL을 넣어주세요");
			return;
		}
		
		if(frm.main_menu_order.value === "") {
			alert("정렬번호를 넣어주세요");
			return;
		}
		
		frm.target = "_self";
		frm.action = "/admin/menu/Insert.do";
		frm.method = "post";
		frm.submit();	
	}
</script>

</head>
<body>
	<form name="frm" method="post" >
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">메뉴관리&gt; 메뉴등록</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th scope="row">메뉴명</th>
	                        <td><input type="text" class="ipt tit" id="main_menu_nm" name="main_menu_nm"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">메뉴URL</th>
	                        <td><input type="text" class="ipt tit" id="main_menu_url" name="main_menu_url"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">정렬번호</th>
	                        <td><input type="text" class="ipt name" id="main_menu_order" name="main_menu_order"/></td>
	                    </tr>
	                    
	                </tbody>
	            </table>
	            <p class="btn_box"><button type="buton" onClick="javascript:fn_write();">등록</button><button type="button" onClick="javascript:fn_list();">목록</button></p>
	        </div>
	    </div>
	</div>
</form>
</body>
</html>