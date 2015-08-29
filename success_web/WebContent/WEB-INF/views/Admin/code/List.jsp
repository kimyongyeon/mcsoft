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
	
	function fn_maincodeadd() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/code/Form.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_maincodeinfo(param) {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/code/Info.do";
		frm.method = "post";
		frm.main_cd.value = param;
		frm.submit();	
	}
</script>

</head>
<body>
	<form name="frm" method="post" action="/admin/code/Form.do">
	<input type="hidden" name="main_cd" id="main_cd" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
		<div id="content">
	            <p class="con_tit">코드관리&gt; 메인코드목록</p>
	            
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_maincodeadd();">  대분류추가  </button></span>
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
	                            <th scope="col">대분류코드CD</th>
	                            <th scope="col">대분류코드명</th>
	                            <th scope="col">사용여부</th>
	                        </tr>                        
	                    </thead>
	                    <tbody>
	                    
	                    	<c:forEach var="item" items="${main_code_list}" >
								<tr>
		                            <td>${item.main_cd}</td>
		                            <td><a href="javascript:fn_maincodeinfo('${item.main_cd}');">${item.main_nm}</a></td>		                            
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
	                <span class="page"><button type="button" onClick="javascript:fn_maincodeadd();">  대분류추가  </button></span>
	            </p>
	            
	        </div>
	    </div>
	</div>
</form>
</body>
</html>