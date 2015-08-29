<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<script type="text/javascript">
	var person = function(id, pw) {
		this.user_id = id;
		this.user_pw = pw;
	};
	
	function fn_logout() {
		document.location.href = "/User/UserLogout.do";
	}
</script>

<div id="wrap">
    <div id="header">
        <a href="#" class="home_btn"></a>
        <p><em>${USER_SESSION.user_nm}</em>님 로그인 하셨습니다.<button type="button" onClick="javascript:fn_logout();">  LOGOUT  </button></p>
    </div>
    <div id="container">
        <div id="snb">
            <ul>
            	<c:forEach var="item" items="${main_menu_list}" >
            		<li><a href="${item.main_menu_url}">${item.main_menu_nm}</a></li>
				</c:forEach>
				
				
				<c:if test="${!empty main_menu_board}">
					<li>
						<ul>
			            	<c:forEach var="item" items="${main_menu_board}" >
			            		<li><a href="/admin/board/List.do?manage_seq=${item.manage_seq}">${item.manage_title }</a></li>
							</c:forEach>
						</ul>
					</li>                
        		</c:if>                
            </ul>
        </div>
        
        
        
	

