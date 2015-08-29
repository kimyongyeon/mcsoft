
$("#client_tab_04_page").live("pageinit", function() {

    // 페이지 전역 변수 초기화 로그
    var page = {
        "dom" : $(this),
        "id" : $(this).attr("id"),
        "this_page_data" : {}        
    };

    
    page.model = ( function() {
      
        var pub = {};
        
        pub.getContractList = function(success_callback, error_callback, param) {
        	setTimeout(function() {success_callback();}, "500");
        };
        
        pub.init = function() {
        };
        return pub;
    }());

    page.view = ( function() {
        
    	// selector 등록
    	var sel = {};
    	sel.info_save = $('._info_save', page.dom);   // 정보저장
        sel.info_exit = $('._info_exit', page.dom);     // 이전화면
        
    	sel.client_info_base = $('._client_info_base', page.dom);     // 기본정보 탭화면
    	sel.client_info_detail = $('._client_info_detail', page.dom);     // 상세정보 탭화면
    	sel.client_info_income = $('._client_info_income', page.dom);     // 계약정보 탭화면
    	
    	sel.contract_title = $('._client_info_base', page.dom);     // 상품명
    	sel.contract_insurance = $('._contract_insurance', page.dom);     // 보험사
    	sel.contract_user = $('._contract_user', page.dom);     // 계약자
    	sel.contract_target_user = $('._contract_target_user', page.dom);     // 보험대상자
    	sel.contract_dt = $('._contract_dt', page.dom);     // 계약일
    	sel.contract_auto_dt = $('._contract_auto_dt', page.dom);     // 자동이체일
    	sel.contract_certificate_num = $('._contract_certificate_num', page.dom);     // 증권번호
    	sel.contract_mount = $('._contract_mount', page.dom);     // 보험료
    	sel.contract_conts = $('._contract_conts', page.dom);     // 보장내용
    	
    	sel.client_contract_list = $('._client_contract_list', page.dom); // list
    	
    	sel.contract_add = $('._contract_add', page.dom);     // 추가
    	sel.contract_del = $('._contract_del', page.dom);      // 제거
    	
    	// pub start
    	var pub = {};
    	
    	pub.getContract_title = function() {
            return sel.contract_title.val();
        };
        pub.getContract_insurance = function() {
            return sel.contract_insurance.val();
        };
        pub.getContract_user = function() {
            return sel.contract_user.val();
        };
        
        pub.getContract_target_user = function() {
            return sel.contract_target_user.val();
        };
        pub.getContract_dt = function() {
            return sel.contract_dt.val();
        };
        pub.getContract_auto_dt = function() {
            return sel.contract_auto_dt.val();
        };
        
        pub.getContract_certificate_num = function() {
            return sel.contract_certificate_num.val();
        };
        pub.getContract_mount = function() {
            return sel.contract_mount.val();
        };
        pub.getContract_conts = function() {
            return sel.contract_conts.val();
        };
    	
        // 저장 클릭이벤트 바인드
        sel.info_save.unbind('click');
        pub.onClickInfoSave = function(callback) {        	
        	console.log(tag + " ::: client_tab_04_page ::  info_save 에 이벤트가 바인드되었습니다.");
            sel.info_save.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 취소 버튼 클릭 이벤트 바인드
        sel.info_exit.unbind('click');
        pub.onClickInfoExit = function(callback) {        	
        	console.log(tag + " ::: client_tab_04_page :: info_exit 에 이벤트가 바인드되었습니다.");
            sel.info_exit.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 기본정보탭
        sel.client_info_base.unbind('click');
        pub.onClickClientBase = function(callback) {        	
        	console.log(tag + " ::: client_tab_04_page :: client_info_base 에 이벤트가 바인드되었습니다.");
            sel.client_info_base.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 상세정보탭
        sel.client_info_detail.unbind('click');
        pub.onClickClientDetail = function(callback) {        	
        	console.log(tag + " ::: client_tab_04_page :: client_info_detail 에 이벤트가 바인드되었습니다.");
            sel.client_info_detail.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 재무설계
        sel.client_info_income.unbind('click');
        pub.onClickClientIncome = function(callback) {        	
        	console.log(tag + " ::: client_tab_04_page :: client_info_income 에 이벤트가 바인드되었습니다.");
            sel.client_info_income.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 추가
        sel.contract_add.unbind('click');
        pub.onClickContractAdd = function(callback) {        	
        	console.log(tag + " ::: client_tab_04_page ::  contract_add 에 이벤트가 바인드되었습니다.");
            sel.contract_add.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 제거
        sel.contract_del.die('click');
        pub.onClickContractDel = function(callback) {        	
        	console.log(tag + " ::: client_tab_04_page ::  contract_del 에 이벤트가 바인드되었습니다.");
            sel.contract_del.die('click').live('click', function() {            	
            	callback($(this));
            });
        };
        
        // 추가
        pub.getContractListAdd = function() {
        	console.log(" === 추가합니다. contract =====");     
        	var tmpData = [{"contract_title":"","contract_insurance":"", "contract_user":"", "contract_target_user":"", "contract_dt":"", "contract_auto_dt":"", "contract_certificate_num":"", "contract_mount":"", "contract_conts":""}];        	
        	sel.client_contract_list.pcs_list('addItems', tmpData);        	
        };
        
        // 아이템 제거
        pub.delContract = function(obj) {
        	console.log(" === 항목을 제거합니다. =====" + obj);
        	obj.parent().empty();
        };
        
        // 리스트 아이템을 추가한다.
        pub.getContractList = function() { 
        	console.log(" === 여기 호출 되었나요? ===== 01 ::: " + JSON.stringify(page.this_page_data.contract_data));
        	sel.client_contract_list.empty();        	
        	sel.client_contract_list.pcs_list('addItems', page.this_page_data.contract_data);
        };
        
        pub.init = function() {
        	sel.client_contract_list.pcs_list({
                'template' : '#_client_contract_add_templet',
                'param' : function($item) {
                    return {                    	
                        'contract_title': $('._contract_title', $item),
                        'contract_insurance': $('._contract_insurance', $item),
                        'contract_user': $('._contract_user', $item),
                        'contract_target_user': $('._contract_target_user', $item),
                        'contract_dt': $('._contract_dt', $item),
                        'contract_auto_dt': $('._contract_auto_dt', $item),
                        'contract_certificate_num': $('._contract_certificate_num', $item),
                        'contract_mount': $('._contract_mount', $item),
                        'contract_conts': $('._contract_conts', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                	
                    param.contract_title.attr('value', data.contract_title);
                    param.contract_insurance.attr('value', data.contract_insurance);
                    param.contract_user.attr('value', data.contract_user);
                    param.contract_target_user.attr('value', data.contract_target_user);
                    param.contract_dt.attr('value', data.contract_dt);
                    param.contract_auto_dt.attr('value', data.contract_auto_dt);
                    param.contract_certificate_num.attr('value', data.contract_certificate_num);
                    param.contract_mount.attr('value', data.contract_mount);
                    param.contract_conts.text(data.contract_conts);
                    
                    console.log(JSON.stringify(data));
                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_contract_list ._new_list_contract_item').attr('class', '_new_list_contract_item_add ');
                }
            });
        };
                
        return pub;
    }());

    page.controller = ( function() {
        var pub = {};
        
        pub.makeParam = function() {
        	var main_data = {}; 
        	
        	if($.isPlainObject(page.this_page_data.main_data)) {
        		console.log(" ========================= 데이터 필드를 유지하기위함 main ==========================="  + JSON.stringify(page.this_page_data.main_data));
        		main_data = page.this_page_data.main_data;
        	}
        	
        	var arrContractData = [];
        	var intContract = 0;
        	
        	$('._new_list_contract_item_add', page.dom).each(function() {
        		
        		var contractObj = {};
        		contractObj.contract_title = $('._contract_title', $(this)).val();
        		contractObj.contract_insurance = $('._contract_insurance', $(this)).val();
        		contractObj.contract_user = $('._contract_user', $(this)).val();
        		contractObj.contract_target_user = $('._contract_target_user', $(this)).val();
        		contractObj.contract_dt = $('._contract_dt', $(this)).val();
        		contractObj.contract_auto_dt = $('._contract_auto_dt', $(this)).val();
        		contractObj.contract_certificate_num = $('._contract_certificate_num', $(this)).val();
        		contractObj.contract_mount = $('._contract_mount', $(this)).val();        		
        		contractObj.contract_conts = $('._contract_conts', $(this)).val();
        		
        		if(contractObj.contract_title != "" && contractObj.contract_title != undefined) {
        			arrContractData[intContract] = contractObj;
        			intContract++;
        		}
        		
        	});
        	
        	page.this_page_data.main_data = main_data;        	       	
        	page.this_page_data.contract_data = arrContractData;
        	
        };
        
        pub.init = function() {
        	// 삭제하지 마세요.
            page.model.init();
            page.view.init();
            
            // 현재페이지에서 사용할 전역변수를 세팅합니다.
            page.this_page_data = pcs.html._param;
            
            page.model.getContractList(function() { page.view.getContractList();}, function() { alert("error"); }, "");
            
            
            
            
            // 저장 이벤트 호출
            page.view.onClickInfoSave(function() {
            	
            	pub.makeParam();
                var param = page.this_page_data;
                
                console.log(tag + " ::: client_tab_04_page 의 info_save 에 이벤트가 호출되었습니다." + JSON.stringify(param));         
                
                var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
                var http_json = JSON.parse(http_str);
                
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
            	console.log(tag + " ::: client_tab_04_page 의 info_exit 에 이벤트가 호출되었습니다.");            	
                pcs.html.startActivity("../client/client_list.html", null);
            	//pcs.html.finish();
            });
            
            // 기본정보
            page.view.onClickClientBase(function() {
            	console.log(tag + " ::: client_tab_04_page 의 onClickClientBase 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_01.html", page.this_page_data);
            });
            
            // 상세정보
            page.view.onClickClientDetail(function() {
            	console.log(tag + " ::: client_tab_04_page 의 onClickClientDetail 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_02.html", page.this_page_data);
            });
            
            // 재무정보
            page.view.onClickClientIncome(function() {
            	console.log(tag + " ::: client_tab_04_page 의 onClickClientIncome 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_03.html", page.this_page_data);
            });
            
            
            page.view.onClickContractAdd(function() {
            	console.log(tag + " ::: client_tab_04_page 의 onClickContractAdd 에 이벤트가 호출되었습니다.");            	
            	page.view.getContractListAdd();
            });
            
            // 제거버튼
            page.view.onClickContractDel(function(obj) {
            	console.log(tag + " ::: client_tab_04_page 의 onClickContractDel 에 이벤트가 호출되었습니다.");            	
            	page.view.delContract(obj);
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
