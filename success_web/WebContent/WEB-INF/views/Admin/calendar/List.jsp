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
		frm.action = "/admin/calendar/Form.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_list() {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/calendar/List.do";
		frm.method = "post";
		frm.submit();	
	}
	
	function fn_info(param) {
		var frm = document.forms[0];
		frm.target = "_self";
		frm.action = "/admin/calendar/Info.do";
		frm.method = "post";
		frm.resource_seq.value = param;
		frm.submit();	
	}
</script>

</head>
<body>
	<form name="frm" method="post" action="/admin/trcode/Form.do">	
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
		<div id="content">
	            <p class="con_tit">달력</p>
	            
	            <p class="stat_blk">
	            	<select id="cal_year" name="cal_year">
                       <option value="2013" <c:if test="${'2013' eq  cal_year}">selected</c:if>>2013</option>
                       <option value="2014" <c:if test="${'2014' eq  cal_year}">selected</c:if>>2014</option>
                       <option value="2015" <c:if test="${'2015' eq  cal_year}">selected</c:if>>2015</option>
                       <option value="2016" <c:if test="${'2016' eq  cal_year}">selected</c:if>>2016</option>
                       <option value="2017" <c:if test="${'2017' eq  cal_year}">selected</c:if>>2017</option>
                       <option value="2018" <c:if test="${'2018' eq  cal_year}">selected</c:if>>2018</option>
                       <option value="2019" <c:if test="${'2019' eq  cal_year}">selected</c:if>>2019</option>
                    </select>
                    
                    
                    <select id="cal_month" name="cal_month">
                       <option value="01" <c:if test="${'01' eq  cal_month}">selected</c:if>>01</option>
                       <option value="02" <c:if test="${'02' eq  cal_month}">selected</c:if>>02</option>
                       <option value="03" <c:if test="${'03' eq  cal_month}">selected</c:if>>03</option>
                       <option value="04" <c:if test="${'04' eq  cal_month}">selected</c:if>>04</option>
                       <option value="05" <c:if test="${'05' eq  cal_month}">selected</c:if>>05</option>
                       <option value="06" <c:if test="${'06' eq  cal_month}">selected</c:if>>06</option>
                       <option value="07" <c:if test="${'07' eq  cal_month}">selected</c:if>>07</option>
                       <option value="08" <c:if test="${'08' eq  cal_month}">selected</c:if>>08</option>
                       <option value="09" <c:if test="${'09' eq  cal_month}">selected</c:if>>09</option>
                       <option value="10" <c:if test="${'10' eq  cal_month}">selected</c:if>>10</option>
                       <option value="11" <c:if test="${'11' eq  cal_month}">selected</c:if>>11</option>
                       <option value="12" <c:if test="${'12' eq  cal_month}">selected</c:if>>12</option>
                    </select>
                    
                    <button type="button" onclick="javascript:fn_list();"/> 이동하기 </button>
                    
	                <span class="page"><button type="button" onClick="javascript:fn_add();">  리소스추가  </button></span>
	            </p>
	            <br/>
	            <div class="list_box">                
	                <table class="list_blk">
	                    <colgroup>
	                        <col style="width:14.2%"/>
	                        <col style="width:14.2%"/>
	                        <col style="width:14.2%"/>
	                        <col style="width:14.2%"/>
	                        <col style="width:14.2%"/>
	                        <col style="width:14.2%"/>
	                        <col style="width:14.2%"/>
	                    </colgroup>
	                    <thead>
	                        <tr>
	                            <th scope="col">일</th>
	                            <th scope="col">월</th>
	                            <th scope="col">화</th>
	                            <th scope="col">수</th>
	                            <th scope="col">목</th>
	                            <th scope="col">금</th>
	                            <th scope="col">토</th>
	                        </tr>                        
	                    </thead>
	                    <tbody>
	                    
	                    	<c:set var="firstCol" value="0" />
	                    	<c:set var="rowChange" value="0" />
	                    	<c:set var="lastCol" value="0" />
	                    	<c:forEach var="item" items="${list}" varStatus="i">
	                    		<c:if test="${i.count eq 1}">
	                    			<tr>
	                    			<c:set var="firstCol" value="${item.cal_yoil_cnt - 1}" />
	                    			<c:choose>
	                    				<c:when test="${firstCol != 0}">
	                    					<c:forEach begin="1" end="${firstCol}" step="1">
	                    						<td>&nbsp;</td>
	                    					</c:forEach>
	                    				</c:when>
	                    				<c:otherwise>
	                    				</c:otherwise>
	                    			</c:choose>
	                    		</c:if>
									
									<td>${item.cal_day}</td>
		                            
		                            <c:choose>
		                            	<c:when test="${item.cal_yoil_cnt%7 eq 0}">
		                            		</tr>
		                            		<tr>
		                            	</c:when>
		                            	
		                            </c:choose>
		                            
		                        	<c:set var="lastCol" value="${item.cal_yoil_cnt}" />
							</c:forEach>
									
									<c:choose>
										<c:when test="${lastCol != 7}">
											<c:forEach begin="${lastCol+1}" end="7" step="1">
	                    						<td>&nbsp;</td>
	                    					</c:forEach>
										</c:when>									
									</c:choose>
									
	                        	</tr>
	                    </tbody>
	                </table>                
	            </div>
	            
	            <p class="stat_blk">
	                <span class="page"><button type="button" onClick="javascript:fn_add();">  리소스추가  </button></span>
	            </p>
	            
	        </div>
	    </div>
	</div>
</form>
</body>
</html>