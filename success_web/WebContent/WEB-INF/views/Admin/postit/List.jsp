<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>MC.Soft Administrator</title>
<link href="/resources/css/admin.css" type="text/css" rel="stylesheet" />

<script type="text/javascript">
	function fn_add() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/postit/Form.do";
		frm.method = "post";
		frm.submit();
	}

	function fn_info(param) {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/postit/Info.do";
		frm.method = "post";
		frm.board_seq.value = param;
		frm.submit();
	}
</script>

</head>
<body>
	<form name="frm" method="post" action="/admin/postit/Form.do">
		<!-- 상단메뉴 시작-->
		<c:import url="/admin/include/incAdmTop.do" />
		<!--상단메뉴 종료 -->

		<div id="content">
			<p class="con_tit">PostIt&gt; 목록</p>

			<p class="stat_blk">
				<span class="page"><button type="button"
						onClick="javascript:fn_add();">PostIt 작성</button></span>
			</p>
			<br />
			<div class="list_box">
				<table class="list_blk">
					<colgroup>
						<col style="width: 10%" />						
						<col style="width: 20%" />
						<col style="width: 10%" />
						<col style="width: 40%" />
						<col style="width: 20%" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">번호</th>
							<th scope="col">소유자</th>
							<th scope="col">구분</th>
							<th scope="col">내용</th>
							<th scope="col">작성일</th>
						</tr>
					</thead>
					<tbody>

						<c:forEach var="item" items="${list}">
							<tr>
								<td><a href="javascript:fn_info('${item.postit_seq}');">${item.postit_seq}</a></td>
								<td><a href="javascript:fn_info('${item.board_seq}');">${item.postit_user_id}</a></td>
								<td>${item.postit_gb}</td>
								<td>${item.postit_conts}</td>
								<td>${item.postit_wdate}</td>
							</tr>
						</c:forEach>

					</tbody>
				</table>
			</div>

			<p class="stat_blk">
				<span class="page"><button type="button"
						onClick="javascript:fn_add();">PostIt 작성</button></span>
			</p>

		</div>
		</div>
		</div>
	</form>
</body>
</html>