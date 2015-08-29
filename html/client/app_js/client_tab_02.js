
$("#client_tab_02_page").live("pageinit", function() {

    // 페이지 전역 변수 초기화 로그
    var page = {
        "dom" : $(this),
        "id" : $(this).attr("id"),
        "this_page_data" : {}        
    };

    
    page.model = ( function() {
      
        var pub = {};
        
        pub.getFamiliyList = function(success_callback, error_callback, param) {
        	// 서버와의 통신을 시도한다.
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
        
    	sel.client_info_base = $('._client_info_base', page.dom);     // 상세정보 탭화면
    	sel.client_info_income = $('._client_info_income', page.dom);     // 계약정보 탭화면
    	sel.client_info_contract = $('._client_info_contract', page.dom);     // 계약정보 탭화면
    	
    	sel.client_sex = $('._client_sex', page.dom);     // 고객 성별
    	sel.client_marray = $('._client_marray', page.dom);     // 고객 결혼유무
    	sel.client_marray_dt = $('._client_marray_dt', page.dom);     // 고객 결혼기념일
    	sel.client_birth_month = $('._client_birth_month', page.dom);     // 고객 생월
    	sel.client_age = $('._client_age', page.dom);     // 고객 연령대
    	sel.client_job = $('._client_job', page.dom);     // 고객 직업
    	sel.client_income = $('._client_income', page.dom);     // 고객 소득
    	sel.client_property = $('._client_property', page.dom);     // 고객 자산
    	sel.client_together = $('._client_together', page.dom);     // 고객 맞벌이
    	
    	/**
    	 * 가족정보 : 차후에 배열로 만든다.
    	 */
    	sel.client_family_list = $('._client_family_list', page.dom); // 적용하려는 대상
    	
    	sel.family_gb = $('._family_gb', page.dom);     // 가족관계
    	sel.family_name = $('._family_name', page.dom);     // 이름
    	sel.family_birth = $('._family_birth', page.dom);     // 생일
    	sel.family_add = $('._family_add', page.dom); // 추가
    	sel.family_del = $('._family_del', page.dom); // 삭제
    	
    	
    	// pub start
    	var pub = {};
    	
    	pub.getClient_sex = function() {
            return sel.client_sex.val();
        };
        pub.getClient_marray = function() {
            return sel.client_marray.val();
        };
        pub.getClient_marray_dt = function() {
            return sel.client_marray_dt.val();
        };
        pub.getClient_birth_month = function() {
            return sel.client_birth_month.val();
        };
        pub.getClient_age = function() {
            return sel.client_age.val();
        };
        pub.getClient_job = function() {
            return sel.client_job.val();
        };
        pub.getClient_income = function() {
            return sel.client_income.val();
        };
        pub.getClient_property = function() {
            return sel.client_property.val();
        };
        pub.getClient_together = function() {
            return sel.client_together.val();
        };
        
        pub.getFamily_gb = function() {
            return sel.family_gb.val();
        };
        pub.getFamily_name = function() {
            return sel.family_name.val();
        };
        pub.getFamily_birth = function() {
            return sel.family_birth.val();
        };
    	 
        // 저장 클릭이벤트 바인드
        sel.info_save.unbind('click');
        pub.onClickInfoSave = function(callback) {        	
        	console.log(tag + " ::: client_tab_02_page ::  info_save 에 이벤트가 바인드되었습니다.");
            sel.info_save.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 취소 버튼 클릭 이벤트 바인드
        sel.info_exit.unbind('click');
        pub.onClickInfoExit = function(callback) {        	
        	console.log(tag + " ::: client_tab_02_page :: info_exit 에 이벤트가 바인드되었습니다.");
            sel.info_exit.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 상세정보탭
        sel.client_info_base.unbind('click');
        pub.onClickClientBase = function(callback) {        	
        	console.log(tag + " ::: client_tab_02_page :: client_info_base 에 이벤트가 바인드되었습니다.");
            sel.client_info_base.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 재무설계
        sel.client_info_income.unbind('click');
        pub.onClickClientIncome = function(callback) {        	
        	console.log(tag + " ::: client_tab_02_page :: client_info_income 에 이벤트가 바인드되었습니다.");
            sel.client_info_income.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 계약정보탭
        sel.client_info_contract.unbind('click');
        pub.onClickClientContract = function(callback) {        	
        	console.log(tag + " ::: client_tab_02_page :: client_info_contract 에 이벤트가 바인드되었습니다.");
            sel.client_info_contract.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 가족추가버튼
        sel.family_add.unbind('click');
        pub.onClickFamily_add = function(callback) {        	
        	console.log(tag + " ::: client_tab_02_page ::  family_add 에 이벤트가 바인드되었습니다.");
            sel.family_add.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 가족제거 버튼
        sel.family_del.unbind('click');
        pub.onClickFamily_del = function(callback) {        	
        	console.log(tag + " ::: client_tab_02_page ::  family_del 에 이벤트가 바인드되었습니다.");
            sel.family_del.die('click').live('click', function() {
            	callback($(this));
            });
        };
        
        pub.defaultInfo = function(data) {
        	
        	//var mainData = data.main_data;
        	console.log("defaultInfo call ::: " + JSON.stringify(page.this_page_data));
        	var mainData = page.this_page_data.main_data;
        	var detailData = page.this_page_data.detail_data;
        	
        	if(mainData != null && $.isPlainObject(mainData)) {
	        	sel.client_sex.val(mainData.client_sex);
	        	sel.client_marray.val(mainData.client_marray);
	        	sel.client_marray_dt.val(mainData.client_marray_dt);
	        	sel.client_birth_month.val(mainData.client_birth_month);
	        	sel.client_age.val(mainData.client_age);       
	        	sel.client_job.val(mainData.client_job);
	        	sel.client_income.val(mainData.client_income);
	        	sel.client_property.val(mainData.client_property);
	        	sel.client_together.val(mainData.client_together);
        	} else {
        		sel.client_sex.val('0');
	        	sel.client_marray.val('0');
	        	sel.client_marray_dt.val('');
	        	sel.client_birth_month.val('0');
	        	sel.client_age.val('0');       
	        	sel.client_job.val('0');
	        	sel.client_income.val('0');
	        	sel.client_property.val('0');
	        	sel.client_together.val('0');
        	}
        };
        
        pub.getFamiliyListAdd = function() {
        	console.log(" === 가족을 추가합니다. =====");     
        	var tmpData = [{"family_gb":"0","family_name":"","family_birth":""}];        	
        	sel.client_family_list.pcs_list('addItems', tmpData);
        };
        
        pub.getFamiliyListDel = function(obj) {
        	console.log(" === 가족을 제거합니다. =====" + obj);     
        	obj.parent().empty();
        };
        
        // 리스트 아이템을 추가한다. - 가족을 리스팅한다.
        pub.getFamiliyList = function() {
        	console.log(" === 여기 호출 되었나요? =====" + JSON.stringify(page.this_page_data.detail_data));        	
        	$('._client_family_list').empty();
        	sel.client_family_list.pcs_list('addItems', page.this_page_data.detail_data);
        };
                
        pub.init = function() {
        	sel.client_family_list.pcs_list({
                'template' : '#_client_familiy_add_templet',
                'param' : function($item) {
                    return {                    	
                    	'new_list_item': $('._new_list_item', $item),
                        'family_gb': $('._family_gb', $item),
                        'family_name': $('._family_name', $item),
                        'family_birth': $('._family_birth', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                    param.family_gb.val(data.family_gb);
                    param.family_name.val(data.family_name);
                    param.family_name.attr('value', data.family_name);
                    param.family_birth.val(data.family_birth);
                    param.family_birth.attr('value', data.family_birth);
                    
                    console.log("list item value param.family_name.val()  ::: " + param.family_name.val());
                    console.log("list item value param.family_birth.val()  ::: " + param.family_birth.val());
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_family_list ._new_list_item').attr('class', '_new_list_item_added hbox jc');
                }
            });
        };
                
        return pub;
    }());

    page.controller = ( function() {
        var pub = {};
        
        pub.makeParam = function() {
        	var main_data = {}; 
        	var detail_data = {};
        	
        	if($.isPlainObject(page.this_page_data.main_data)) {
        		console.log(" ========================= 데이터 필드를 유지하기위함 main ==========================="  + JSON.stringify(page.this_page_data.main_data));
        		main_data = page.this_page_data.main_data;
        	}
        	
        	main_data.client_sex = page.view.getClient_sex();
        	main_data.client_marray = page.view.getClient_marray();
        	main_data.client_marray_dt = page.view.getClient_marray_dt();
        	main_data.client_birth_month = page.view.getClient_birth_month();
        	main_data.client_age = page.view.getClient_age();
        	main_data.client_job = page.view.getClient_job();
        	main_data.client_income = page.view.getClient_income();
        	main_data.client_property = page.view.getClient_property();
        	main_data.client_together = page.view.getClient_together();
        	
        	/*if($.isPlainObject(page.this_page_data.detail_data)) {
        		console.log(" ========================= 데이터 필드를 유지하기위함 detail ==========================="  + JSON.stringify(page.this_page_data.detail_data));
        		detail_data = page.this_page_data.detail_data;
        	} */
        	
        	var arrFamObj = [];
        	var famCnt = 0;
        	
        	$('._new_list_item_added', page.dom).each(function() {
        		
        		var famObj = {};
        		famObj.family_gb = $('._family_gb', $(this)).val();
        		famObj.family_name = $('._family_name', $(this)).val();
        		famObj.family_birth = $('._family_birth', $(this)).val();        
        		
        		if(famObj.family_name != "") {
	        		arrFamObj[famCnt] = famObj;
	        		console.log("========================================================================= > " + JSON.stringify(famObj));
	        		console.log("========================================================================= > " + famCnt);
	        		famCnt++;
        		}
        	});
        	
        	
        	page.this_page_data.main_data = main_data;
        	page.this_page_data.detail_data = arrFamObj;
        	//page.this_page_data.detail_data = detail_data;
        };
        

        pub.init = function() {
        	// 삭제하지 마세요.
            page.model.init();
            page.view.init();
            
            // 현재페이지에서 사용할 전역변수를 세팅합니다.
            page.this_page_data = pcs.html._param;
            
            // 고객상세정보를 세팅합니다.
            page.view.defaultInfo();
            
            // 가족정보 리스팅
            page.model.getFamiliyList(function() { page.view.getFamiliyList();}, function() { alert("error"); }, "");
            
            // 저장 이벤트 호출
            page.view.onClickInfoSave(function() {
            	console.log(tag + " ::: client_tab_02_page 의 info_save 에 이벤트가 호출되었습니다.");
                
            	pub.makeParam();
                var param = page.this_page_data;
                
                console.log(tag + " ::: client_tab_02_page 의 info_save 에 이벤트가 호출되었습니다." + JSON.stringify(param));         
                
                var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
                var http_json = JSON.parse(http_str);
                console.log(tag +"::::  response data - real : " + JSON.stringify(http_json));
                
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
            	console.log(tag + " ::: client_tab_02_page 의 info_exit 에 이벤트가 호출되었습니다.");            	
                pcs.html.startActivity("../client/client_list.html", null);
            	//pcs.html.finish();
            });
            
            // 기본정보
            page.view.onClickClientBase(function() {
            	console.log(tag + " ::: client_tab_02_page 의 onClickClientBase 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_01.html", page.this_page_data);
            });
            
            // 재무정보
            page.view.onClickClientIncome(function() {
            	console.log(tag + " ::: client_tab_02_page 의 onClickClientIncome 에 이벤트가 호출되었습니다.");
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
            
            // 가족추가
            page.view.onClickFamily_add(function() {
            	console.log(tag + " ::: client_tab_02_page 의 onClickFamily_add 에 이벤트가 호출되었습니다.");            	
            	page.view.getFamiliyListAdd();
            });
            
            // 가족제거
            page.view.onClickFamily_del(function(obj) {
            	console.log(tag + " ::: client_tab_02_page 의 onClickFamily_del 에 이벤트가 호출되었습니다.");            	
            	page.view.getFamiliyListDel(obj);
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
