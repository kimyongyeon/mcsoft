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
	
	function fn_write() {
		var frm = document.forms[0];
		
		if(frm.manage_title.value === "") {
			alert("게시판명을 넣어주세요");
			return;
		}
		
		
		frm.target = "_self";
		frm.action = "/admin/boardManage/Insert.do";
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
	            <p class="con_tit">게시판관리&gt; 게시판등록</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th scope="row">게시판명</th>
	                        <td><input type="text" class="ipt tit" id="manage_title" name="manage_title"/></td>
	                    </tr>
	                    	                    
	                    <tr>
	                        <th scope="row">사용여부</th>
	                        <td>
	                        	<select id="manage_use_yn" name="manage_use_yn">
		                            <option value="Y">사용</option>
		                            <option value="N">미사용</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">파일사용여부</th>
	                        <td>
	                        	<select id="manage_attach_yn" name="manage_attach_yn">
		                            <option value="Y">Y</option>
		                            <option value="N" selected>N</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">첨부수량</th>
	                        <td>
	                        	<select id="manage_attach_cnt" name="manage_attach_cnt">
	                        		<option value="0">선택</option>
		                            <option value="1">1</option>
		                            <option value="2">2</option>
		                            <option value="3">3</option>
		                            <option value="4">4</option>
		                            <option value="5">5</option>
		                            <option value="6">6</option>
		                            <option value="7">7</option>
		                            <option value="8">8</option>
		                            <option value="9">9</option>
		                            <option value="10">10</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">상단HTML</th>
	                        <td>
	                        	<textarea name="manage_top_conts" id="manage_top_conts" style="height:100px;"></textarea>
	                        </td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">하단HTML</th>
	                        <td>
	                        	<textarea name="manage_bot_conts" id="manage_bot_conts" style="height:100px;"></textarea>
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

