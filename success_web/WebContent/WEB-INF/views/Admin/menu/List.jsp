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
	
	function fn_menuadd() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/menu/Form.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_menuinfo(param) {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/menu/Info.do";
		frm.method = "post";
		frm.main_menu_cd.value = param;
		frm.submit();	
	}
</script>

</head>
<body>
	<form name="frm" method="post" action="/admin/menu/Form.do">
	<input type="hidden" name="main_menu_cd" id="main_menu_cd" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
		<div id="content">
	            <p class="con_tit">메뉴관리&gt; 메뉴목록</p>
	            
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_menuadd();">  메뉴추가  </button></span>
	            </p>
	            <br/>
	            <div class="list_box">                
	                <table class="list_blk">
	                    <colgroup>
	                        <col style="width:20%"/>
	                        <col style="width:30%"/>
	                        <col style="width:40%"/>
	                        <col style="width:10%"/>
	                    </colgroup>
	                    <thead>
	                        <tr>
	                            <th scope="col">메뉴코드</th>
	                            <th scope="col">메뉴명</th>
	                            <th scope="col">메뉴URL</th>
	                            <th scope="col">정렬번호</th>
	                        </tr>                        
	                    </thead>
	                    <tbody>
	                    
	                    	<c:forEach var="item" items="${main_menu_list}" >
								<tr>
		                            <td>${item.main_menu_cd}</td>
		                            <td><a href="javascript:fn_menuinfo('${item.main_menu_cd}');">${item.main_menu_nm}</a></td>
		                            <td>${item.main_menu_url}</td>
		                            <td>${item.main_menu_order}</td>
		                        </tr> 
							</c:forEach>
	                        
	                    </tbody>
	                </table>                
	            </div>
	            
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_menuadd();">  메뉴추가  </button></span>
	            </p>
	            
	        </div>
	    </div>
	</div>
</form>
</body>
</html>