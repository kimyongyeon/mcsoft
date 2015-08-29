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
		frm.action = "/admin/boardManage/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_update() {
		var frm = document.forms[0];
		
		if(frm.manage_title.value === "") {
			alert("게시판명을 넣어주세요");
			return;
		}
		
		
		
		frm.target = "_self";
		frm.action = "/admin/boardManage/Update.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_delete() {
		var frm = document.forms[0];		
		var msg = "정말로 삭제하시겠습니까? (관련데이터 모두 삭제됩니다.)";
		
		if(confirm(msg)) {		
			frm.target = "_self";
			frm.action = "/admin/boardManage/Delete.do";
			frm.method = "post";
			frm.submit();
		} 	
	}
</script>

</head>
<body>
	<form name="frm" method="post" >
		<input type="hidden" name="manage_seq" id="manage_seq" value="${info.manage_seq}" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">게시판관리&gt; 게시판수정</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th scope="row">게시판명</th>
	                        <td><input type="text" class="ipt tit" id="manage_title" name="manage_title" value="${info.manage_title}"/></td>
	                    </tr>
	                    	                    
	                    <tr>
	                        <th scope="row">사용여부</th>
	                        <td>
	                        	<select id="manage_use_yn" name="manage_use_yn">
		                            <option value="Y" <c:if test="${'Y' eq  info.use_yn}">selected</c:if>>사용</option>
		                            <option value="N" <c:if test="${'N' eq  info.use_yn}">selected</c:if>>미사용</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">파일사용여부</th>
	                        <td>
	                        	<select id="manage_attach_yn" name="manage_attach_yn">
		                            <option value="Y" <c:if test="${'Y' eq  info.use_yn}">selected</c:if>>Y</option>
		                            <option value="N" <c:if test="${'N' eq  info.use_yn}">selected</c:if>>N</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">첨부수량</th>
	                        <td>
	                        	<select id="manage_attach_cnt" name="manage_attach_cnt">
	                        		<option value="0" <c:if test="${'0' eq  info.manage_attach_cnt}">selected</c:if>>선택</option>
		                            <option value="1" <c:if test="${'1' eq  info.manage_attach_cnt}">selected</c:if>>1</option>
		                            <option value="2" <c:if test="${'2' eq  info.manage_attach_cnt}">selected</c:if>>2</option>
		                            <option value="3" <c:if test="${'3' eq  info.manage_attach_cnt}">selected</c:if>>3</option>
		                            <option value="4" <c:if test="${'4' eq  info.manage_attach_cnt}">selected</c:if>>4</option>
		                            <option value="5" <c:if test="${'5' eq  info.manage_attach_cnt}">selected</c:if>>5</option>
		                            <option value="6" <c:if test="${'6' eq  info.manage_attach_cnt}">selected</c:if>>6</option>
		                            <option value="7" <c:if test="${'7' eq  info.manage_attach_cnt}">selected</c:if>>7</option>
		                            <option value="8" <c:if test="${'8' eq  info.manage_attach_cnt}">selected</c:if>>8</option>
		                            <option value="9" <c:if test="${'9' eq  info.manage_attach_cnt}">selected</c:if>>9</option>
		                            <option value="10" <c:if test="${'10' eq  info.manage_attach_cnt}">selected</c:if>>10</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">상단HTML</th>
	                        <td>
	                        	<textarea name="manage_top_conts" id="manage_top_conts" style="height:100px;">${info.manage_top_conts}</textarea>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">하단HTML</th>
	                        <td>
	                        	<textarea name="manage_bot_conts" id="manage_bot_conts" style="height:100px;">${info.manage_bot_conts}</textarea>
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