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
		frm.action = "/admin/resource/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_write() {
		var frm = document.forms[0];
		
		if(frm.resource_version.value === "") {
			alert("버전을 넣어주세요");
			return;
		}
		
		
		frm.target = "_self";
		frm.action = "/admin/resource/Insert.do";
		frm.method = "post";
		frm.submit();	
	}
</script>

</head>
<body>
	<form name="frm"  modelAttribute="uploadForm" enctype="multipart/form-data">
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">리소스관리&gt; 리소스등록</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th scope="row">버전</th>
	                        <td><input type="text" class="ipt tit" id="resource_version" name="resource_version"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">요약정보</th>
	                        <td><input type="text" class="ipt tit" id="title" name="title"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">사용여부</th>
	                        <td>
	                        	<select id="use_yn" name="use_yn">
		                            <option value="Y" selected>사용</option>
		                            <option value="N">미사용</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">파일</th>
	                        <td>
	                        	<input type="file" class="ipt tit" name="files"/>
	                        </td>
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