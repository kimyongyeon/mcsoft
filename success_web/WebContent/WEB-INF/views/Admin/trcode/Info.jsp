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
		frm.action = "/admin/trcode/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_update() {
		var frm = document.forms[0];
		
		if(frm.trcode.value === "") {
			alert("trcode를 넣어주세요");
			return;
		}
		
		
		
		frm.target = "_self";
		frm.action = "/admin/trcode/Update.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_delete() {
		var frm = document.forms[0];		
		var msg = "정말로 삭제하시겠습니까?";
		
		if(confirm(msg)) {		
			frm.target = "_self";
			frm.action = "/admin/trcode/Delete.do";
			frm.method = "post";
			frm.submit();
		} 	
	}
</script>

</head>
<body>
	<form name="frm" method="post" >
		<input type="hidden" name="trcode" id="trcode" value="${info.trcode}" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">전문관리&gt; 전문수정</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th scope="row">trcode</th>
	                        <td>${info.trcode}</td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">사용처</th>
	                        <td><input type="text" class="ipt tit" id="title" name="title" value="${info.title}"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">사용여부</th>
	                        <td>
	                        	<select id="use_yn" name="use_yn">
		                            <option value="Y" <c:if test="${'Y' eq  info.use_yn}">selected</c:if>>사용</option>
		                            <option value="N" <c:if test="${'N' eq  info.use_yn}">selected</c:if>>미사용</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">더미여부</th>
	                        <td>
	                        	<select id="dummy_yn" name="dummy_yn">
		                            <option value="Y" <c:if test="${'Y' eq  info.dummy_yn}">selected</c:if>>Y</option>
		                            <option value="N" <c:if test="${'N' eq  info.dummy_yn}">selected</c:if>>N</option>
		                         </select>
		                         Y 로 선택시 해당 전문은 더미데이터가 요청에 응답합니다.
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">더미데이터</th>
	                        <td>
	                        	<textarea name="dummy_data" id="dummy_data">${info.dummy_data}</textarea>
	                        </td>
	                    </tr>
	                    
	                </tbody>
	            </table>
	            <p class="btn_box"><button type="buton" onClick="javascript:fn_update();">수정</button><button type="buton" onClick="javascript:fn_delete();">삭제</button><button type="button" onClick="javascript:fn_list();">목록</button></p>
	        </div>
	    </div>
	</div>
</form>
</body>
</html>