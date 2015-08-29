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
		frm.action = "/admin/board/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_write() {
		var frm = document.forms[0];
		
		if(frm.board_title.value === "") {
			alert("제목을 넣어주세요");
			return;
		}
		
		if(frm.board_conts.value === "") {
			alert("내용을 넣어주세요");
			return;
		}
		
		
		frm.target = "_self";
		frm.action = "/admin/board/Insert.do";
		frm.method = "post";
		frm.submit();	
	}
</script>

</head>
<body>
	<form name="frm" method="post" modelAttribute="uploadForm" enctype="multipart/form-data">
	<input type="hidden" name="manage_seq" value="${manage_seq}" />
	<input type="hidden" name="search_type" value="${search_type}" />
	<input type="hidden" name="search_word" value="${search_word}" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">게시판관리&gt; 글등록</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th scope="row">제목</th>
	                        <td><input type="text" class="ipt tit" id="board_title" name="board_title"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">내용</th>
	                        <td>
	                        	<textarea name="board_conts" id="board_conts"></textarea>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">사용여부</th>
	                        <td>
	                        	<select id="board_use_yn" name="board_use_yn">
		                            <option value="Y">사용</option>
		                            <option value="N">미사용</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    
	                    <c:if test="${manageInfo.manage_attach_yn  eq 'Y'}">	                    
	                    <tr>
	                        <th scope="row">첨부파일</th>
	                        <td>
	                        	<c:forEach begin="1" end="${manageInfo.manage_attach_cnt}" step="1">
	                        		<input name="files" type="file" /><br/>
	                        	</c:forEach>	                        	
	                        </td>
	                    </tr>
	                    </c:if>
	                    
	                </tbody>
	            </table>
	            <p class="btn_box"><button type="buton" onClick="javascript:fn_write();">등록</button><button type="button" onClick="javascript:fn_list();">목록</button></p>
	        </div>
	    </div>
	</div>
</form>
</body>
</html>