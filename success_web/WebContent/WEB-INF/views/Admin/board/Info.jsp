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
	
	function fn_update() {
		var frm = document.forms[0];
		
		frm.target = "_self";
		frm.action = "/admin/board/Update.do";
		frm.method = "post";
		
		var fileCnt = frm["fileCnt"].value;
		var ck = frm["delImgNo"];		
		var chkVal = "";
		
		
		if(fileCnt == 0) {			
		} else {			
			var ck = frm["delImgNo"];			
			if(fileCnt == 1) {
				if(ck.checked) {
					chkVal = ck.value;
				}
			} else if(fileCnt > 1) {
				var chkCount = 0;
				if(ck.length > 0) {
					for(var i=0; i<ck.length; i++) {
						if(ck[i].checked) {
							if(chkCount < 1) {
								chkVal = ck[i].value;
							} else {
								chkVal = chkVal + "," +ck[i].value;
							}
							chkCount++;
						}
					}
				}
			}
		}
		
		frm["arr_attach_seq"].value = chkVal;		
		frm.submit();	
	}
	
	function fn_delete() {
		var frm = document.forms[0];		
		var msg = "정말로 삭제하시겠습니까?";
		
		if(confirm(msg)) {		
			frm.target = "_self";
			frm.action = "/admin/board/Delete.do";
			frm.method = "post";
			frm.submit();
		} 	
	}
</script>

</head>
<body>
	<form name="frm" method="post"  modelAttribute="uploadForm" enctype="multipart/form-data">
		<input type="hidden" name="manage_seq" value="${info.manage_seq}" />
		<input type="hidden" name="board_seq"  value="${info.board_seq}"/>
		<input type="hidden" name="search_type" value="${search_type}" />
		<input type="hidden" name="search_word" value="${search_word}" />
		<input type="hidden" name="arr_attach_seq" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">글보기</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    	                    
	                    <tr>
	                        <th scope="row">제목</th>
	                        <td><input type="text" class="ipt tit" id="board_title" name="board_title" value="${info.board_title}"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">내용</th>
	                        <td>
	                        	<textarea name="board_conts" id="board_conts">${info.board_conts}</textarea>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">사용여부</th>
	                        <td>
	                        	<select id="board_use_yn" name="board_use_yn">
		                            <option value="Y" <c:if test="${'Y' eq  info.board_ues_yn}">selected</c:if>>Y</option>
		                            <option value="N" <c:if test="${'N' eq  info.board_ues_yn}">selected</c:if>>N</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <c:set var="fileCnt" value="0" />
	                    <c:if test="${!empty filelist}">
	                    	<tr>
		                        <th scope="row">첨부된파일</th>
		                        <td>
		                        	파일을 선택하신 후 수정버튼을 클릭하시면 삭제됩니다.<br/><br/>
		                        	<c:forEach var="item" items="${filelist}">
		                        		<input type="checkbox" name="delImgNo" value="${item.attach_seq}" modelAttribute="delImgNo" />&nbsp;&nbsp;<a href="/resources/upload/images/${item.attach_save_name}" target="_blank">${item.attach_org_name}</a><br/>
		                        		<c:set var="fileCnt" value="${fileCnt+1 }" />
		                        	</c:forEach>
		                        </td>
		                    </tr>
	                    </c:if>
	                    <input type="hidden" name="fileCnt" value="${fileCnt}" />
	                    
	                    
	                    <c:if test="${manageInfo.manage_attach_yn  eq 'Y'}">
		                    <tr>
		                        <th scope="row">첨부파일</th>
		                        <td>
		                        	<c:choose>
		                        		<c:when test="${fileCnt >=  manageInfo.manage_attach_cnt}">파일을 더이상 추가할 수 없습니다. 첨부가능수량 : ${manageInfo.manage_attach_cnt}개</c:when>
		                        		<c:otherwise>
		                        			<c:forEach begin="${fileCnt+1}" end="${manageInfo.manage_attach_cnt}" step="1">
				                        		<input name="files" type="file" /><br>
				                        	</c:forEach>
		                        		</c:otherwise>
		                        	</c:choose>	                        	
		                        </td>
		                    </tr>	                    
	                    </c:if>
	                </tbody>
	            </table>
	            <p class="btn_box"><button type="buton" onClick="javascript:fn_update();">수정</button><button type="buton" onClick="javascript:fn_delete();">삭제</button><button type="button" onClick="javascript:fn_list();">목록</button></p>
	        </div>
	    </div>
	</div>
</form>
</body>
</html>