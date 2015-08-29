
$("#private_join_page").live("pageinit", function() {

    // 페이지 전역 변수 초기화 로그
    var page = {
        "dom" : $(this),
        "id" : $(this).attr("id")
    };

    
    page.model = ( function() {
      
        var pub = {};
        
        pub.getCodeList = function(success_callback, error_callback, param) {
        	// 서버와의 통신을 시동한다.
        	//setTimeout(function() {success_callback(dummy_data);}, "1000");
        	var param = {};
        	param.main_cd = common.code.login_office_type;
            param.TRCODE = "MCSOFT_SUCCESS_COMMOM_CODE_TYPE_01";
            
            var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
            var http_json = JSON.parse(http_str);
            
        	var code_list;
        	if($.isPlainObject(http_json)) {
        		code_list = http_json.result_data.code_list;
        	}
        	
        	setTimeout(function() {success_callback(code_list);}, "100");
        };

        pub.init = function() {
        };
        return pub;
    }());

    page.view = ( function() {
        
    	// selector 등록
    	var sel = {};
        sel.agreea = $('._agreea', page.dom);
        sel.agree_chk_all = $('._agree_chk_all', page.dom);
        sel.member_join = $('._member_join', page.dom);
        
        sel.member_id = $('._memer_id', page.dom);
        sel.member_pw = $('._member_pw', page.dom);
        sel.member_name = $('._member_name', page.dom);
        sel.member_key = $('._member_key', page.dom);
        sel.member_company = $('._member_company', page.dom);
        sel.member_office = $('._member_office', page.dom);
    	
        var pub = {};        
        // 모두 동의 체크박스 클릭이벤트 바인드
        pub.onClickAgreea = function(callback) {        	
        	console.log(tag + " ::: private_join의 _agree_chk_all 에 이벤트가 바인드되었습니다.");
            sel.agreea.bind('click', function() {
                callback();
            });
        };
        
        // 성공노트 이용약관 자세히 버튼 클릭 이벤트 바인드
        pub.onClickAgreeChkAll = function(callback) {        	
        	console.log(tag + " ::: private_join의 _agreea 에 이벤트가 바인드되었습니다.");
            sel.agree_chk_all.bind('click', function() {
                callback();
            });
        };
        
        // 가입하기 버튼 클릭 이벤트 바인드 
        pub.onClickMemberJoin = function(callback) {        	
        	console.log(tag + " ::: private_join의 _member_join 에 이벤트가 바인드되었습니다.");
            sel.member_join.bind('click', function() {
                callback();
            });
        };
        
        pub.setOffice = function(data) {
            console.log("====================== 회사를 세팅합니다. ====================== ");
            $.each(data, function(key){    
            	var office_info = data[key];
            	sel.member_company.append("<option value='"+office_info.middle_cd+"'>"+office_info.middle_nm+"</option>");
            });
        };
        
        /**
         * input type
         */
        // member_id
        pub.getMember_id = function() {
            return sel.member_id.val();
        };
        // member_pw
        pub.getMember_pw = function(writer) {
        	return sel.member_pw.val();
        }
        // member_name
        pub.getMember_name = function() {
            return sel.member_name.val();
        };
        // member_key
        pub.getMember_key = function() {
            return sel.member_key.val();
        };
        // member_company
        pub.getMember_company = function() {
            return sel.member_company.val();
        };
        // member_office
        pub.getMember_office = function() {
            return sel.member_office.val();
        };
        
        pub.init = function() {
        };
        return pub;
    }());

    page.controller = ( function() {
        var pub = {};

        pub.init = function() {

        	// 삭제하지 마세요.
            page.model.init();
            page.view.init();
            
            page.model.getCodeList(function(data) {page.view.setOffice(data);}, function() { alert("error");}, "");
            
            // 모두 동의 체크박스
            page.view.onClickAgreeChkAll(function() {
            	console.log(tag + " ::: private_join의 _agree_chk_all 에 이벤트가 호출되었습니다.");            	
                var chk = $('._agree_chk_all').is(':checked');
                
                if(chk) {
                	$('._agrees').attr('checked', true);
                } else {
                	$('._agrees').attr('checked', false);
                }
            });
            
            // 성공노트 이용약관 자세히 버튼 클릭
            page.view.onClickAgreea(function() {
            	//console.log(TAG + " ::: private_join의 _agreea 에 이벤트가 호출되었습니다.");            	
                pcs.html.startActivity("../private/private_agree.html");
            });
            
            // 성공노트 회원가입 버튼 클릭
            page.view.onClickMemberJoin(function() {
            
            	var chkCount = 0;
            	$('._agrees:checked').each(function() {
            		chkCount++;        			
        		});
            	
            	if(chkCount != 3) {
            		alert("이용약관에 모두 동의하신 후 가입이 가능합니다.");
            		return;
            	}
            	
            	
            	var param = {};
                param.user_id = page.view.getMember_id();
                param.user_pw = page.view.getMember_pw();
                param.user_nm = page.view.getMember_name();
                param.user_key = page.view.getMember_key();
                param.user_office = page.view.getMember_company();
                param.user_sub_office = page.view.getMember_office();  
                param.user_section = "001";
                param.TRCODE = "MCSOFT_SUCCESS_USER_ID_CHK";
                
                /**
                 * 이메일 유효성 체크
                 */
                var regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                if(!regExp.test(param.user_id)) {
                    alert('이메일 주소가 유효하지 않습니다');
                    $('._memer_id').focus();
                    return false;
                }
                
                /**
                 * 값체크 (공백)
                 */
                if(param.user_id.replace(/\s/g, "").length == 0) {
                	alert("사용자 이메일(아이디)을 입력하세요.");
                	return false;
                }
                
                if(param.user_pw.replace(/\s/g, "").length < 9) {
                	alert("패스워드를 입력하세요. 최소 8자리");
                	return false;
                } 
                
                
                if(param.user_nm.replace(/\s/g, "").length == 0) {
                	alert("사용자 이름을 입력하세요.");
                	return false;
                }
                
                if(param.user_office.replace(/\s/g, "").length == 0) {
                	alert("지점을 입력하세요.");
                	return false;
                }
                
                var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
                var http_json = JSON.parse(http_str);
                console.log(tag +"::::  response data - real : " + http_json);
                
                
        		
                if($.isPlainObject(http_json)) {
                	if(http_json.result_status === "t") {
                		// 서버에서 받은 데이터가 일단 정상
                		var result_obj = http_json.result_data;
                		
                		if(result_obj != null) {
	                		if(result_obj.id_cnt != null && result_obj.id_cnt < 1) {
	                			// 사용자 등록 시작
	                			param.TRCODE = "MCSOFT_SUCCESS_USER_REG";
	                			http_str = "";
	                			http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
	                			http_json = JSON.parse(http_str);
	                			
	                			if($.isPlainObject(http_json)) {
	                            	if(http_json.result_status === "t") {
	                            		var join_obj = http_json.result_data;
	                            		
	                            		if(join_obj != null) {
	            	                		if(join_obj.job_status != null && join_obj.job_status === "success") {
	            	                			alert("사용자 등록을 완료하였습니다.");
	            	                			pcs.html.startActivity("../private/private_join_ok.html", param);
	            	                		} else {
	            	                			alert("사용자 등록에 실패하였습니다.[000]");
				                				return false;
	            	                		}
	                            		} else {
	                            			alert("사용자 등록에 실패하였습니다.[001]");
			                				return false;
	                            		}
	                            		
	                            	} else {
	                            		alert("사용자 등록에 실패하였습니다.[002]");
		                				return false;
	                            	}
	                			} else {
	                				alert("사용자 등록에 실패하였습니다.[003]");
	                				return false;
	                			}
	                			
	                			return false;
	                		} else {
	                			alert("이미 사용중인 아이디입니다.");
	                			return false;
	                		}
                		} else {
                			alert("관리자에게 문의하세요. [000]");
                    		return false;
                		}
                	} else {
                		alert("관리자에게 문의하세요. [001]");
                		return false;
                	}
                	
                } else {
                	alert("관리자에게 문의하세요. [002]");
                	return false;
                }
                
            });
            
        };
        return pub;
    }());

    pcs.html.setModel(page.id, page.model);
    pcs.html.setView(page.id, page.view);
    pcs.html.setController(page.id, page.controller);

    // 페이지가 최초로 생성될 때 호출된다.
    // 화면을 초기화 하고, 각종 이벤트 리스너를 등록하는 등의 코드를 작성한다.
    page.dom.bind("onCreate", function() {
        // 초기화 함수 실행
        page.controller.init();
        // TODO 코드 작성
    });
    // onCreate() 이벤트가 호출된 이후에 바로 호출된다. 두 번째 파라메터에는 prev 페이지에서 넘겨준
    // 데이터가 저장되어 있다. 전달받은 파라메터를 처리하는 코드를 작성한다.
    page.dom.bind("onStart", function(event, data) {
        // TODO 코드 작성
    });
    // pcs.html.startActivity() 에 의하여 페이지가 이동되기 직전에 호출된다.
    // 페이지를 이동하기 전에 처리해야 할 작업(ex 현재 화면의 데이터를 저장)을 위한 코드를 작성한다.
    page.dom.bind("onStop", function() {
        // TODO 코드 작성
    });
    // next 페이지에서 current 페이지로 복귀했을 때 호출된다.
    // 두 번째 파라메터에는 next 페이지에서 전달한 결과값이 저장되어 있다. next 페이지에서 리턴받은
    // 데이터를 처리하는 코드를 작성한다.
    page.dom.bind("onRestart", function(event, data) {
        // TODO 코드 작성
    });
    // pcs.html.finish() 에 의하여 페이지가 삭제되기 직전에 호출된다.
    // 페이지가 삭제되기 전에 처리할 작업을 위한 코드를 작성한다.
    page.dom.bind("onDestroy", function() {
        // TODO 코드 작성
    });
});
