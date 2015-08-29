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
		frm.action = "/admin/board/Form.do";
		frm.method = "post";
		frm.submit();
	}

	function fn_info(param) {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/board/Info.do";
		frm.method = "post";
		frm.board_seq.value = param;
		frm.submit();
	}
	
	function fn_pagemove(current_page) {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/board/List.do";
		frm.method = "post";
		frm.current_page.value = current_page;
		frm.submit();
	}
	
	function fn_search() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/board/List.do";
		frm.method = "post";
		frm.current_page.value = "1";
		frm.submit();
	}
</script>

</head>
<body>
	<form name="frm" method="post" action="/admin/board/Form.do">
		<input type="hidden" name="manage_seq" value="${manage_seq}" /> 
		<input type="hidden" name="board_seq" />
		<input type="hidden" name="current_page" />
		<!-- 상단메뉴 시작-->
		<c:import url="/admin/include/incAdmTop.do" />
		<!--상단메뉴 종료 -->

		<div id="content">
			<p class="con_tit">게시판관리&gt; 글목록</p>

			<p class="stat_blk">
				<span class="page"><button type="button"
						onClick="javascript:fn_add();">글쓰기</button></span>
			</p>
			<br />
			<div class="list_box">
				<table class="list_blk">
					<colgroup>
						<col style="width: 10%" />
						<col style="width: 40%" />
						<col style="width: 10%" />
						<col style="width: 20%" />
						<col style="width: 20%" />
					</colgroup>
					<thead>
						<tr>
							<th scope="col">글번호</th>
							<th scope="col">제목</th>
							<th scope="col">조회수</th>
							<th scope="col">작성자</th>
							<th scope="col">작성일</th>
						</tr>
					</thead>
					<tbody>

						<c:forEach var="item" items="${list}">
							<tr>
								<td><a href="javascript:fn_info('${item.board_seq}');">${item.board_seq}</a></td>
								<td><a href="javascript:fn_info('${item.board_seq}');">${item.board_title}</a></td>
								<td>${item.board_view_count}</td>
								<td>${item.board_writer}</td>
								<td>${item.board_wdate}</td>
							</tr>
						</c:forEach>

					</tbody>
				</table>
			</div>

			<p class="stat_blk">
				<span class="page"><button type="button"
						onClick="javascript:fn_add();">글쓰기</button></span>
			</p>
			<div style="text-align: center;">
				<c:forEach begin="1" end="${total_page}" step="1" varStatus="i">
					<c:choose>
						<c:when test="${i.count eq current_page}"><a href="javascript:fn_pagemove('${i.count}');"><b>${i.count}</b></a></c:when>
						<c:otherwise><a href="javascript:fn_pagemove('${i.count}');">${i.count}</a></c:otherwise>
					</c:choose>
				</c:forEach>
			</div>
			<br/><br/>
			<div style="text-align: center;">
			
				<select name="search_type">
					<option value="0" <c:if test="${'0' eq  search_type}">selected</c:if>>제목+내용</option>
					<option value="1" <c:if test="${'1' eq  search_type}">selected</c:if>>제목</option>
					<option value="2" <c:if test="${'2' eq  search_type}">selected</c:if>>내용</option>
				</select>
				
				<input type="text" name="search_word" value="${search_word}" style="width:100px;" />
				<input type="button" value="검색하기" onclick="javascript:fn_search();" />
			</div>
		</div>
		</div>
		</div>
	</form>
</body>
</html>