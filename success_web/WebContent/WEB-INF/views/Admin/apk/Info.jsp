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
		frm.action = "/admin/apk/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_update() {
		var frm = document.forms[0];
		
		if(frm.apk_version.value === "") {
			alert("버전을 넣어주세요");
			return;
		}
		
		var msg = "현재 버전을 사용하시겠습니까? \n\n";
		msg+= "현재 버전을 제외한 나머지부분은 미사용처리됩니다.";
		var sendTrue = true;
		
		if(frm.use_yn.value === "Y") {
			if(confirm(msg)) {
			} else {
				sendTrue = false;
			}
		}
		
		if(sendTrue) {
			frm.target = "_self";
			frm.action = "/admin/apk/Update.do";
			frm.method = "post";
			frm.submit();	
		}		
	}
	
	function fn_delete() {
		var frm = document.forms[0];		
		var msg = "정말로 삭제하시겠습니까?";
		
		if(confirm(msg)) {		
			frm.target = "_self";
			frm.action = "/admin/apk/Delete.do";
			frm.method = "post";
			frm.submit();
		} 	
	}
</script>

</head>
<body>
	<form name="frm" modelAttribute="uploadForm" enctype="multipart/form-data">
		<input type="hidden" name="apk_seq" id="apk_seq" value="${info.apk_seq}" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">APK관리&gt; APK수정</p>
	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                
	                <tbody>
	                    <tr>
	                        <th scope="row">버전</th>
	                        <td>
	                        	<input type="text" class="ipt tit" id="apk_version" name="apk_version" value="${info.apk_version}"/><br/><br/>
	                        	버전코드 예시 - 1.0 (숫자로만 넣어주세요)
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">요약정보</th>
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
	                    
	                    <c:if test="${!empty info.apk_upload_file}">	                    
	                    <tr>
	                        <th scope="row">파일</th>
	                        <td>
	                        	<a href="/resources/upload/apk/${info.apk_upload_file}" target="_blank">${info.apk_org_file}</a>
	                        </td>
	                    </tr>
	                    </c:if>
	                    
	                    <tr>
	                        <th scope="row">파일</th>
	                        <td>
	                        	<input type="file" class="ipt tit" name="files"/>
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