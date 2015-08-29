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
		frm.action = "/admin/postit/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_write() {
		var frm = document.forms[0];
		
		if(frm.postit_conts.value === "") {
			alert("내용을 넣어주세요");
			return;
		}
		
		
		frm.target = "_self";
		frm.action = "/admin/postit/Insert.do";
		frm.method = "post";
		frm.submit();	
	}
	
	
	function fn_userchange(obj) {
		var tarobj = document.getElementById("userchange");
		
		if(obj.value == "0") {
			tarobj.style.display = "none";
		} else {
			tarobj.style.display = "block";
		}
		
	}
</script>

</head>
<body>
	<form name="frm" method="post" modelAttribute="uploadForm" enctype="multipart/form-data">
	
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">PostIt&gt; 등록</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                
	                <tbody>
	                
	                	<tr>
	                        <th scope="row">구분</th>
	                        <td>
	                        	<select name="postit_gb" id="postit_gb" onchange="javascript:fn_userchange(this);">
	                        		<option value="0" selected>내소유</option>
	                        		<option value="1">대상자선택</option>
	                        	</select>
	                        </td>
	                    </tr>
	                    
	                    <tr style="display:none;" id="userchange">
	                        <th scope="row">대상아이디</th>
	                        <td>
	                        	<input type="text" class="ipt tit"  name="postit_client_id" id="postit_client_id" />
	                        </td>
	                    </tr>
	                
	                    <tr>
	                        <th scope="row">날짜 // 시간</th>
	                        <td>날짜 : <input type="text" class="ipt" id="postit_dt" name="postit_dt" style="width:100px;"/> 시간 : <input type="text" class="ipt" id="postit_time" name="postit_time" style="width:100px;"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">컬러</th>
	                        <td>
	                        	<select name="postit_color" id="postit_color">
	                        		<option value="0" selected>white</option>
	                        		<option value="1">red</option>
	                        		<option value="2">yellow</option>
	                        		<option value="3">blue</option>
	                        	</select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">내용</th>
	                        <td>
	                        	<textarea name="postit_conts" id="postit_conts" style="height:100px;"></textarea>
	                        </td>
	                    </tr>
	                    
	                    
	                    <tr>
	                        <th scope="row">첨부파일</th>
	                        <td>
	                        	<input name="files" type="file" /><br/>
	                        	<input name="files" type="file" />
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