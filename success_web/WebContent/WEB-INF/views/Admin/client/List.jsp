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
</head>
<body>
	<!-- 상단메뉴 시작-->
	<c:import url="/admin/include/incAdmTop.do" />
	<!--상단메뉴 종료 -->	
	
	<div id="content">
            <p class="con_tit">회원관리</p>
            
            <div class="sort_box">
                <div class="term_blk">
                    <label for="f_term1">기간</label><!--
                    --><input type="text" id="f_term1" class="ipt" /><!--
                    --><button type="button" class="date_btn"><img src="/resources/img/ico_datebtn.png" alt="날짜검색" /></button><!--
                    --><span class="char_wave">~</span><!--
                    --><input type="text" class="ipt" /><!--
                    --><button type="button" class="date_btn"><img src="/resources/img/ico_datebtn.png" alt="날짜검색" /></button>
                </div>
                <div>
                    <label for="f_name">성명</label><!--
                    --><input type="text" id="f_name" class="ipt" /><!--
                    --><label for="f_regnum" class="etc_label">주민번호</label><!--
                    --><input type="text" id="f_regnum" class="ipt" /><!--
                    --><label for="f_stat" class="etc_label">처리상태</label><!--
                    --><select id="f_stat">
                            <option value="">메뉴</option>
                            <option value="">메뉴</option>
                            <option value="">메뉴</option>
                            <option value="">메뉴</option>
                         </select><!--
                    --><input type="image" src="/resources/img/btn_srch.png" alt="검색" class="srch_btn" />
                </div>                
            </div>
            <div class="list_box">
                <p class="stat_blk">
                    <span>게시물 : 892 건</span>
                    <span>정상 : <em>892</em> 건</span>
                    <span>실패 : <em>0</em> 건</span>
                    <span class="page">PAGE 1 / 90</span>
                </p>
                <table class="list_blk">
                    <colgroup>
                        <col style="width:42px"/>
                        <col style="width:57px"/>
                        <col style="width:118px"/>
                        <col style="width:128px"/>
                        <col style="width:100px"/>
                        <col style="width:54px"/>
                        <col style="width:54px"/>
                        <col style="width:115px"/>
                        <col style="width:52px"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">성명</th>
                            <th scope="col">주민번호</th>
                            <th scope="col">신청일자</th>
                            <th scope="col">증권번호</th>
                            <th scope="col">변경전<br />이체일</th>
                            <th scope="col">변경후<br />이체일</th>
                            <th scope="col">게시년월 및 회차</th>
                            <th scope="col">처리<br />상태</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>892</td>
                            <td>엄운용</td>
                            <td>850406-1******</td>
                            <td>2014-02-18 17:59</td>
                            <td>20307*******</td>
                            <td>11일</td>
                            <td>5일</td>
                            <td>2014년02월0회차</td>
                            <td><em>정상</em></td>
                        </tr>                        
                        <tr>
                            <td>892</td>
                            <td>엄운용</td>
                            <td>850406-1******</td>
                            <td>2014-02-18 17:59</td>
                            <td>20307*******</td>
                            <td>11일</td>
                            <td>5일</td>
                            <td>2014년02월0회차</td>
                            <td><em>정상</em></td>
                        </tr>
                    </tbody>
                </table>
                <div class="pageination">
                    <input type="image" src="/resources/img/btn_prevlist.png" alt="이전목록" />
                    <input type="image" src="/resources/img/btn_prevpage.png" alt="이전페이지" />
                    <a href="#" class="on">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <input type="image" src="/resources/img/btn_nextpage.png" alt="다음페이지" />
                    <input type="image" src="/resources/img/btn_nextlist.png" alt="다음목록" />
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>