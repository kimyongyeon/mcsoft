
$("#client_tab_01_page").live("pageinit", function() {

    // 페이지 전역 변수 초기화 로그
    var page = {
        "dom" : $(this),
        "id" : $(this).attr("id"),
        "this_page_data" : {}
    };

    
    page.model = ( function() {
      
        var pub = {};
        
        pub.getInfo = function(success_callback, error_callback, param) {
        	// 서버와의 통신을 시동한다.
        	//setTimeout(function() {success_callback(dummy_data);}, "1000");
        	var param = {};
            param.user_id = pcs.html.localStorage.get('login_info', 'user_id');
            param.main_seq = pcs.html._param.mainParam.main_seq;
            param.TRCODE = "MCSOFT_SUCCESS_CLIENT_MAIN_INFO";
            
            var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
            var http_json = JSON.parse(http_str);
            
        	var client_main_data;
        	if($.isPlainObject(http_json)) {
        		client_main_data = http_json.result_data.client_info;
        		/**
        		 * 페이지 변수에 받아온 데이터를 넣는다.
        		 */
        		page.this_page_data = client_main_data;
        		setTimeout(function() {success_callback(client_main_data);}, "100");
        	} else {
        		error_callback();
        	}
        };
        
        pub.getTellList = function(success_callback, error_callback, param) {setTimeout(function() { success_callback();}, "500"); };
        pub.getAddressList = function(success_callback, error_callback, param) {setTimeout(function() { success_callback();}, "500"); };
        pub.getEmailList = function(success_callback, error_callback, param) {setTimeout(function() { success_callback();}, "500"); };

        pub.init = function() {
        };
        return pub;
    }());

    page.view = ( function() {
        
    	// selector 등록
    	var sel = {};
        sel.info_save = $('._info_save', page.dom);   // 정보저장
        sel.info_exit = $('._info_exit', page.dom);     // 이전화면
        
        sel.client_info_detail = $('._client_info_detail', page.dom);     // 상세정보 탭화면
        sel.client_info_income = $('._client_info_income', page.dom);     // 재무정보 탭화면
        sel.client_info_contract = $('._client_info_contract', page.dom);     // 계약정보 탭화면
        
        sel.client_nm = $('._client_nm', page.dom);                    // 고객이름
        sel.client_section = $('._client_section', page.dom);         // 고객분류
        sel.client_birth = $('._client_birth', page.dom);                // 고객생일
        sel.client_tadate = $('._client_tadate', page.dom);          // 고객 TA 기준일
        sel.client_tainterval = $('._client_tainterval', page.dom);  // 고객 TA 주기
        
        
        sel.client_address_list = $('._client_address_list', page.dom);
        sel.addr_section = $('._addr_section', page.dom);  // 주소 구분
        sel.addr_address = $('._addr_address', page.dom);  // 주소
        sel.add_address = $('._btn_add_address', page.dom);  // 주소 추가
        
        sel.client_tell_list = $('._client_tell_list', page.dom);
        sel.tell_section = $('._tell_section', page.dom);  // 전화번호 구분
        sel.tell_address = $('._tell_address', page.dom);  // 전화번호 주소
        sel.add_tell = $('._btn_add_tell', page.dom);  // 전화번호 추가
        
        sel.client_email_list = $('._client_email_list', page.dom);
        sel.email_section = $('._email_section', page.dom);  // email 구분
        sel.email_address = $('._email_address', page.dom);  // email 주소
        sel.add_email = $('._btn_add_email', page.dom);  // email 추가
        
        sel.del_object = $('._btn_del', page.dom);   // 오브젝트 삭제
        
        sel.client_img = $('._client_img', page.dom);     // 이전화면
        
        
        var pub = {};        
        
        // client_nm
        pub.getClient_nm = function() {
            return sel.client_nm.val();
        };
        // client_section
        pub.getClient_section = function() {
        	return sel.client_section.val();
        }
        // client_birth
        pub.getClient_birth = function() {
            return sel.client_birth.val();
        };
        // client_tadate
        pub.getClient_tadate = function() {
            return sel.client_tadate.val();
        };
        // client_tainterval
        pub.getClient_tainterval = function() {
            return sel.client_tainterval.val();
        };
        
        pub.getTell_section = function() {
        	return sel.tell_section.val();
        };
        
        pub.getTell_address = function() {
        	return sel.tell_address.val();
        };
        
        pub.getAddr_section = function() {
        	return sel.addr_section.val();
        };
        
        pub.getAddr_address = function() {
        	return sel.addr_address.val();
        };
        
        // 저장 클릭이벤트 바인드
        sel.info_save.unbind('click');
        pub.onClickInfoSave = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page ::  info_save 에 이벤트가 바인드되었습니다.");
            sel.info_save.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 취소 버튼 클릭 이벤트 바인드
        sel.info_exit.unbind('click');
        pub.onClickInfoExit = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page :: info_exit 에 이벤트가 바인드되었습니다.");
            sel.info_exit.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 상세정보탭
        sel.client_info_detail.unbind('click');
        pub.onClickClientDetail = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page :: client_info_detail 에 이벤트가 바인드되었습니다.");
            sel.client_info_detail.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 재무설계
        sel.client_info_income.unbind('click');
        pub.onClickClientIncome = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page :: client_info_income 에 이벤트가 바인드되었습니다.");
            sel.client_info_income.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 계약정보탭
        sel.client_info_contract.unbind('click');
        pub.onClickClientContract = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page :: client_info_contract 에 이벤트가 바인드되었습니다.");
            sel.client_info_contract.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // tell추가버튼
        sel.add_tell.unbind('click');
        pub.onClickTell_add = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page ::  add_tell 에 이벤트가 바인드되었습니다.");
            sel.add_tell.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // address 추가버튼
        sel.add_address.unbind('click');
        pub.onClickAddress_add = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page ::  add_address 에 이벤트가 바인드되었습니다.");
            sel.add_address.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // email 추가버튼
        sel.add_email.unbind('click');
        pub.onClickEmail_add = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page ::  add_email 에 이벤트가 바인드되었습니다.");
            sel.add_email.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 오브젝트 제거
        sel.del_object.die('click');
        pub.onClickListItemDel = function(callback) {        	
        	console.log(tag + " ::: client_tab_01_page ::  del_object 에 이벤트가 바인드되었습니다.");
            sel.del_object.die('click').live('click', function() {
            	callback($(this));
            });
        };
        
        
        pub.defaultInfo = function(data) {
        	
        	//var mainData = data.main_data;
        	console.log("defaultInfo call ::: " + JSON.stringify(page.this_page_data));
        	var mainData = page.this_page_data.main_data;
        	/*var tellData = page.this_page_data.tell_data;
        	var addrData = page.this_page_data.address_data;*/
        	
        	if(mainData != null && $.isPlainObject(mainData)) {
	        	sel.client_nm.val(mainData.client_nm);
	        	sel.client_section.val(mainData.client_section);
	        	sel.client_birth.val(mainData.client_birth);
	        	sel.client_tadate.val(mainData.client_tadate);
	        	sel.client_tainterval.val(mainData.client_tainterval);
	        	sel.client_img.attr('src', '../../img/ico_cus_'+mainData.client_sex+mainData.client_section+'.png');
        	}
        	
        	/*if(tellData != null && $.isPlainObject(tellData)) {
        		sel.tell_section.val(tellData.tell_section);
        		sel.tell_address.val(tellData.tell_address);
        	} else {
        		sel.tell_section.val('0');
        		sel.tell_address.val('');
        	}
        	
        	if(addrData != null && $.isPlainObject(addrData)) {
        		sel.addr_section.val(addrData.addr_section);
        		sel.addr_address.val(addrData.addr_address);
        	} else {
        		sel.addr_section.val('0');
        		sel.addr_address.val('');
        	}*/
        	
        };
        
        
        /**
         * 화면 리셋
         */
        pub.defaultInfoReset = function() {        	        	
        	sel.client_nm.val('');
        	sel.client_section.val('0');
        	sel.client_birth.val('');
        	sel.client_tadate.val('');
        	sel.client_tainterval.val('0');     
        	
        	/*sel.tell_section.val('0');
    		sel.tell_address.val('');
    		
    		sel.addr_section.val('0');
    		sel.addr_address.val('');*/
        };
        
        
        // 리스팅 시작 - tell
        pub.getTellList = function() {
        	console.log(" === 여기 호출 되었나요? ===== tell" + JSON.stringify(page.this_page_data.tell_data));        	
        	sel.client_tell_list.empty();
        	sel.client_tell_list.pcs_list('addItems', page.this_page_data.tell_data);
        };
        
        pub.addTell = function() {
        	console.log(" === tell 추가합니다. =====");     
        	var tmpData = [{"tell_section":"0","tell_address":""}];        	
        	sel.client_tell_list.pcs_list('addItems', tmpData);
        };
        
        // 리스팅 시작 - address
        pub.getAddressList = function() {
        	console.log(" === 여기 호출 되었나요? ===== address " + JSON.stringify(page.this_page_data.address_data));        	
        	sel.client_address_list.empty();
        	sel.client_address_list.pcs_list('addItems', page.this_page_data.address_data);
        };
        
        pub.addAddress = function() {
        	console.log(" === address 추가합니다. =====");     
        	var tmpData = [{"addr_section":"0","addr_address":""}];        	
        	sel.client_address_list.pcs_list('addItems', tmpData);
        };
        
        // 리스팅 시작 - email
        pub.getEmailList = function() {
        	console.log(" === 여기 호출 되었나요? ===== email " + JSON.stringify(page.this_page_data.email_data));        	
        	sel.client_email_list.empty();
        	sel.client_email_list.pcs_list('addItems', page.this_page_data.email_data);
        };
        
        pub.addEmail = function() {
        	console.log(" === email 추가합니다. =====");     
        	var tmpData = [{"email_section":"0","email_address":""}];        	
        	sel.client_email_list.pcs_list('addItems', tmpData);
        };
        
        // 상위 오브젝트 삭제
        pub.getListItemDel = function(obj) {
        	console.log(" === 제거합니다. =====" + obj);     
        	obj.parent().empty();
        };
        
        pub.getData = function() {
        	console.log(tag + " ::: getData() " + JSON.stringify(pcs.html._param));
        	
        	if($.isPlainObject(pcs.html._param)) {        		
        		console.log(tag + " ::: 목록에서 데이터를 받아서 처리하는 부분입니다.");    
        		console.log(tag + " ::: init 의 호출은 controller 에서 호출하고 있습니다.");
        		console.log(tag + " ::: model 단에서 데이터를 호출한 후 view 단의 defaultInfo 를 호출하여 데이터를 세팅합니다.");
        		        		
        		if($.isPlainObject(pcs.html._param.main_data)) {
        			/**
        			 * 탭간이동으로 생긴 데이터가 존재한다면
        			 */
        			console.log(tag + " ::: tab move data ::: " + JSON.stringify(pcs.html._param));
        			page.view.defaultInfo(pcs.html._param.main_data);
        		} else {
        			page.model.getInfo(function(data) {page.view.defaultInfo(data);}, function() { alert("error");}, "");
        		}
        	} else {
        		console.log(tag + " ::: 화면의 데이터를 리셋합니다.");
        		page.view.defaultInfoReset();
        	}
        };
        
        pub.init = function() {
        	sel.client_tell_list.pcs_list({
                'template' : '#_client_tell_add_templet',
                'param' : function($item) {
                    return {                    	
                    	'new_list_item_tell': $('._new_list_item_tell', $item),
                        'tell_section': $('._tell_section', $item),
                        'tell_address': $('._tell_address', $item)
                    };
                },
                'adapter' : function($item, data, param) {                    
                    param.tell_section.val(data.tell_section);
                    param.tell_address.attr('value', data.tell_address);                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_tell_list ._new_list_item_tell').attr('class', '_new_list_item_tell_added hbox jc');
                }
            });
        	
        	sel.client_address_list.pcs_list({
                'template' : '#_client_address_add_templet',
                'param' : function($item) {
                    return {                    	
                    	'new_list_item_address': $('._new_list_item_address', $item),
                        'addr_section': $('._addr_section', $item),
                        'addr_address': $('._addr_address', $item)
                    };
                },
                'adapter' : function($item, data, param) {                    
                    param.addr_section.val(data.addr_section);
                    param.addr_address.attr('value', data.addr_address);                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_address_list ._new_list_item_address').attr('class', '_new_list_item_address_added hbox jc');                	
                }
            });
        	
        	sel.client_email_list.pcs_list({
                'template' : '#_client_email_add_templet',
                'param' : function($item) {
                    return {                    	
                    	'new_list_item_email': $('._new_list_item_email', $item),
                        'email_section': $('._email_section', $item),
                        'email_address': $('._email_address', $item)
                    };
                },
                'adapter' : function($item, data, param) {                    
                    param.email_section.val(data.email_section);
                    param.email_address.attr('value', data.email_address);                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_email_list ._new_list_item_email').attr('class', '_new_list_item_email_added hbox jc');                	
                }
            });
        };
                
        return pub;
    }());

    page.controller = ( function() {
        var pub = {};
        
        
        /**
         * 화면의 데이터 파라미터 처리
         */
        pub.makeParam = function() {
        	var mainParam = {};
        	var param = {};        	
        	var main_data = {}; 
        	
        	if($.isPlainObject(page.this_page_data.main_data)) {
        		console.log(" ========================= 데이터 필드를 유지하기위함 ===========================");
        		main_data = page.this_page_data.main_data;
        	}
        	
        	/**
        	 * 기본정보
        	 */
        	page.this_page_data.change_yn = "Y";
        	page.this_page_data.TRCODE = "MCSOFT_SUCCESS_CLIENT_MAIN_REG";
        	
        	main_data.user_id = pcs.html.localStorage.get('login_info', 'user_id');
        	main_data.client_nm = page.view.getClient_nm();
        	main_data.client_section = page.view.getClient_section();
        	main_data.client_birth = page.view.getClient_birth();
        	main_data.client_tadate = page.view.getClient_tadate();
        	main_data.client_tainterval = page.view.getClient_tainterval();  
            
        	console.log(tag + " ::: client_tab_01_page 의 info_save 에 이벤트가 호출되었습니다. make 01" + JSON.stringify(page.this_page_data));
        	console.log("==================<><><>");
            if($.isPlainObject(pcs.html._param)) {
            	main_data.main_seq = pcs.html._param.mainParam.main_seq;
            	page.this_page_data.main_seq = pcs.html._param.mainParam.main_seq;
            	mainParam.main_seq = pcs.html._param.mainParam.main_seq;
            } else {
            	main_data.main_seq = '';
            	page.this_page_data.main_seq = '';
            	mainParam.main_seq = '';
            }
            console.log("==================<><><>1");
            console.log("==================<><><>2");
            
            console.log(tag + " ::: client_tab_01_page 의 info_save 에 이벤트가 호출되었습니다. make 02" + JSON.stringify(main_data));
            /**
             * 기본정보 전화번호, 주소정보
             */
            
            var arrTellObj = [];
        	var intCnt = 0;
        	
        	$('._new_list_item_tell_added', page.dom).each(function() {
        		
        		var tellObj = {};        		
        		tellObj.tell_section = $('._tell_section', $(this)).val();
        		tellObj.tell_address = $('._tell_address', $(this)).val();        
        		
        		if(tellObj.tell_address != "" && tellObj.tell_address != undefined) {
        			arrTellObj[intCnt] = tellObj;
	        		console.log("========================================= > " + JSON.stringify(tellObj));
	        		console.log("========================================= > " + intCnt);
	        		intCnt++;
        		}
        	});
        	
        	
        	var arrAddressObj = [];
        	intCnt = 0;
        	$('._new_list_item_address_added', page.dom).each(function() {
        		
        		var addressObj = {};        		
        		addressObj.addr_section = $('._addr_section', $(this)).val();
        		addressObj.addr_address = $('._addr_address', $(this)).val();        
        		
        		if(addressObj.addr_address != "" && addressObj.addr_address != undefined) {
        			arrAddressObj[intCnt] = addressObj;
	        		console.log("========================================= > " + JSON.stringify(addressObj));
	        		console.log("========================================= > " + intCnt);
	        		intCnt++;
        		}
        	});
        	
        	var arrEmailObj = [];
        	intCnt = 0;
        	$('._new_list_item_email_added', page.dom).each(function() {
        		
        		var emailObj = {};        		
        		emailObj.email_section = $('._email_section', $(this)).val();
        		emailObj.email_address = $('._email_address', $(this)).val();        
        		
        		if(emailObj.email_address != "" && emailObj.email_address != undefined) {
        			arrEmailObj[intCnt] = emailObj;
	        		console.log("========================================= > " + JSON.stringify(emailObj));
	        		console.log("========================================= > " + intCnt);
	        		intCnt++;
        		}
        	});
            
            /*
            var tell_data = {};
            if(page.view.getTell_address() != '') {
	            tell_data.tell_section = page.view.getTell_section();
	            tell_data.tell_address = page.view.getTell_address();
            }
            
            var address_data = {};
            if(page.view.getAddr_address() != '') {
	            address_data.addr_section = page.view.getAddr_section();
	            address_data.addr_address = page.view.getAddr_address();
            }
            
            console.log(tag + " ::: client_tab_01_page 의 info_save 에 이벤트가 호출되었습니다. make 03" + JSON.stringify(page.this_page_data));*/
            
            /*param.main_data = main_data;
            param.address_data = address_data;
            param.tell_data = tell_data;*/
            
            page.this_page_data.main_data = main_data;
            page.this_page_data.tell_data = arrTellObj;
            page.this_page_data.address_data = arrAddressObj;
            page.this_page_data.email_data = arrEmailObj;
            page.this_page_data.mainParam = mainParam;
            
            console.log(tag + " ::: client_tab_01_page 의 info_save 에 이벤트가 호출되었습니다. make 04" + JSON.stringify(page.this_page_data));
        	
        };

        pub.init = function() {

        	// 삭제하지 마세요.
            page.model.init();
            page.view.init();
            
            page.this_page_data = pcs.html._param;
            
            
            // 전화번호, 주소, 이메일
            page.model.getTellList(function() { page.view.getTellList();}, function() { alert("error"); }, "");
            page.model.getAddressList(function() { page.view.getAddressList();}, function() { alert("error"); }, "");
            page.model.getEmailList(function() { page.view.getEmailList();}, function() { alert("error"); }, "");
            
            // 저장 이벤트 호출
            page.view.onClickInfoSave(function() {
            	console.log(tag + " ::: client_tab_01_page 의 info_save 에 이벤트가 호출되었습니다.");
            	pub.makeParam();
                var param = page.this_page_data;
                
                console.log(tag + " ::: client_tab_01_page 의 info_save 에 이벤트가 호출되었습니다. save" + JSON.stringify(param));         
                
                var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
                var http_json = JSON.parse(http_str);
                console.log(tag +"::::  response data - real : " + http_json);
                
                if($.isPlainObject(http_json)) {
                	if(http_json.result_status === "t") {
                		// 서버에서 받은 데이터가 일단 정상
                		var result_obj = http_json.result_data;
                		if(result_obj != null) {
	                		if(result_obj.job_status != null && result_obj.job_status === "success") {
	                			alert("고객정보를 저장하였습니다.");
	                			param = null;
	                			pcs.html.startActivity("../client/client_list.html", null);
	                		} else {
	                    		alert("정보저장에 실패하였습니다.");
	                        	return false;
	                    	}
                		}  else {
                    		alert("정보저장에 실패하였습니다.");
                        	return false;
                    	}
                	} else {
                		alert("정보저장에 실패하였습니다.");
                    	return false;
                	}
                } else {
                	alert("정보저장에 실패하였습니다.");
                	return false;
                }
                
            });
            
            // 취소 이벤트 호출
            page.view.onClickInfoExit(function() {
            	console.log(tag + " ::: client_tab_01_page 의 info_exit 에 이벤트가 호출되었습니다.");            	
                pcs.html.startActivity("../client/client_list.html", null);
            	//pcs.html.finish();
            });
            
            // 상세정보
            page.view.onClickClientDetail(function() {
            	console.log(tag + " ::: client_tab_01_page 의 onClickClientDetail 에 이벤트가 호출되었습니다.0");  
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_02.html", page.this_page_data);
            });
            
            // 재무정보
            page.view.onClickClientIncome(function() {
            	console.log(tag + " ::: client_tab_01_page 의 onClickClientIncome 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_03.html", page.this_page_data);
            });
            
            // 계약정보
            page.view.onClickClientContract(function() {
            	console.log(tag + " ::: client_tab_01_page 의 onClickClientContract 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_04.html", page.this_page_data);
            });
            
            
            page.view.onClickTell_add(function() {
            	console.log(tag + " ::: client_tab_01_page 의 onClickTell_add 에 이벤트가 호출되었습니다.");            	
            	page.view.addTell();
            });
            
            page.view.onClickAddress_add(function() {
            	console.log(tag + " ::: client_tab_01_page 의 onClickAddress_add 에 이벤트가 호출되었습니다.");            	
            	page.view.addAddress();
            });
            
            page.view.onClickEmail_add(function() {
            	console.log(tag + " ::: client_tab_01_page 의 onClickEmail_add 에 이벤트가 호출되었습니다.");            	
            	page.view.addEmail();
            });
            
            page.view.onClickListItemDel(function(obj) {
            	console.log(tag + " ::: client_tab_01_page 의 onClickListItemDel 에 이벤트가 호출되었습니다.");            	
            	page.view.getListItemDel(obj);
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
    	// 조회를 시도한다.
    	console.log(tag + " ::: onstart() ---- " + JSON.stringify(pcs.html._param));
    	console.log(tag + " ::: onstart() ---- " + JSON.stringify(data));
    	page.this_page_data = data;
    	
    	page.view.getData();
    });
    // pcs.html.startActivity() 에 의하여 페이지가 이동되기 직전에 호출된다.
    // 페이지를 이동하기 전에 처리해야 할 작업(ex 현재 화면의 데이터를 저장)을 위한 코드를 작성한다.
    page.dom.bind("onStop", function() {
        // TODO 코드 작성
    	common.back.removeEvent(page.dom);
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
    	common.back.removeEvent(page.dom);
    });
});
