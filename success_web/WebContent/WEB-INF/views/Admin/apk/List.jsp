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
	
	function fn_add() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/apk/Form.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_info(param) {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/apk/Info.do";
		frm.method = "post";
		frm.apk_seq.value = param;
		frm.submit();	
	}
</script>

</head>
<body>
	<form name="frm" method="post">
	<input type="hidden" name="apk_seq" id="apk_seq" />
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
		<div id="content">
	            <p class="con_tit">APK관리&gt; APK목록</p>
	            
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_add();">  APK추가  </button></span>
	            </p>
	            <br/>
	            <div class="list_box">                
	                <table class="list_blk">
	                    <colgroup>
	                        <col style="width:15%"/>
	                        <col style="width:30%"/>
	                        <col style="width:25%"/>
	                        <col style="width:20%"/>
	                        <col style="width:10%"/>
	                    </colgroup>
	                    <thead>
	                        <tr>
	                            <th scope="col">APK버전</th>
	                            <th scope="col">요약정보</th>
	                            <th scope="col">파일명</th>
	                            <th scope="col">등록일</th>
	                            <th scope="col">사용여부</th>
	                        </tr>                        
	                    </thead>
	                    <tbody>
	                    
	                    	<c:forEach var="item" items="${list}" >
								<tr>
		                            <td><a href="javascript:fn_info('${item.apk_seq}');">${item.apk_version}</a></td>
		                            <td><a href="javascript:fn_info('${item.apk_seq}');">${item.title}</a></td>		                            
		                            <td>${item.apk_upload_file}</td>
		                            <td>${item.create_date}</td>
		                            <td>${item.use_yn}</td>
		                        </tr> 
							</c:forEach>
	                        
	                    </tbody>
	                </table>                
	            </div>
	            
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_add();">  APK추가  </button></span>
	            </p>
	            
	        </div>
	    </div>
	</div>
</form>
</body>
</html>