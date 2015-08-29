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
		frm.action = "/admin/code/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_update() {
		var frm = document.forms[0];
		
		if(frm.main_nm.value === "") {
			alert("코드명을 넣어주세요");
			return;
		}
		
		frm.target = "_self";
		frm.action = "/admin/code/Update.do";
		frm.method = "post";
		frm.submit();
	}
	
	function fn_middlecodeadd() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/code/middleForm.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_middlecodeinfo(param) {
		var frm = document.forms[0];
		frm.middle_cd.value = param;
		frm.target = "_self";
		frm.action = "/admin/code/middleInfo.do";
		frm.method = "post";
		frm.submit();	
	}
	
</script>

</head>
<body>
	<form name="frm" method="post" >
		<input type="hidden" name="main_cd" id="main_cd" value="${main_code_info.main_cd}" />
		<input type="hidden" name="middle_cd" id="middle_cd"  />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
			<div id="content">
	            <p class="con_tit">코드관리&gt; 메인코드수정</p>
	            	            
	            <table class="write_box">
	                <colgroup>
	                    <col style="width:109px" />
	                    <col style="width:611px" />
	                </colgroup>
	                <tbody>
	                    <tr>
	                        <th scope="row">대분류코드명</th>
	                        <td><input type="text" class="ipt tit" id="main_nm" name="main_nm" value="${main_code_info.main_nm}"/></td>
	                    </tr>
	                    
	                    <tr>
	                        <th scope="row">사용여부</th>
	                        <td>
	                        	<select id="use_yn" name="use_yn">
		                            <option value="Y" <c:if test="${'Y' eq  main_code_info.use_yn}">selected</c:if>>사용</option>
		                            <option value="N" <c:if test="${'N' eq  main_code_info.use_yn}">selected</c:if>>미사용</option>
		                         </select>
	                        </td>
	                    </tr>
	                    
	                </tbody>
	            </table>
	            <p class="btn_box"><button type="buton" onClick="javascript:fn_update();">대분류수정</button><button type="button" onClick="javascript:fn_list();">대분류목록</button></p>
	            <br/>
	            
	            <!-- middle code list start -->
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_middlecodeadd();">  중분류코드추가 </button></span>
	            </p>
	            <br/>
	            <div class="list_box">                
	                <table class="list_blk">
	                    <colgroup>
	                        <col style="width:40%"/>
	                        <col style="width:50%"/>	                        
	                        <col style="width:10%"/>
	                    </colgroup>
	                    <thead>
	                        <tr>
	                            <th scope="col">중분류코드CD</th>
	                            <th scope="col">중분류코드명</th>
	                            <th scope="col">사용여부</th>
	                        </tr>                        
	                    </thead>
	                    <tbody>
	                    
	                    	<c:forEach var="item" items="${middle_code_list}" >
								<tr>
		                            <td>${item.middle_cd}</td>
		                            <td><a href="javascript:fn_middlecodeinfo('${item.middle_cd}');">${item.middle_nm}</a></td>		                            
		                            <td>
		                            <c:choose>
		                            	<c:when test="${item.use_yn eq 'Y'}">사용</c:when>
		                            	<c:otherwise>미사용</c:otherwise>
		                            </c:choose>
		                            </td>
		                        </tr> 
							</c:forEach>
	                        
	                    </tbody>
	                </table>                
	            </div>
	            
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_middlecodeadd();">  중분류코드추가  </button></span>
	            </p>
	            <!-- middle code list end -->
	        </div>
	    </div>
	</div>
</form>
</body>
</html>