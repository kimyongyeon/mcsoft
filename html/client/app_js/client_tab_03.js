
$("#client_tab_03_page").live("pageinit", function() {

    // 페이지 전역 변수 초기화 로그
    var page = {
        "dom" : $(this),
        "id" : $(this).attr("id"),
        "this_page_data" : {}        
    };

    
    page.model = ( function() {
      
        var pub = {};
        
        pub.getIncomeList01 = function(success_callback, error_callback, param) {
        	setTimeout(function() {success_callback();}, "500");
        };
        
        pub.getIncomeList02 = function(success_callback, error_callback, param) {
        	setTimeout(function() {success_callback();}, "500");
        };
        
        pub.getIncomeList03 = function(success_callback, error_callback, param) {
        	setTimeout(function() {success_callback();}, "500");
        };
        
        pub.getPropertyList01 = function(success_callback, error_callback, param) {
        	setTimeout(function() {success_callback();}, "500");
        };
        
        pub.getPropertyList02 = function(success_callback, error_callback, param) {
        	setTimeout(function() {success_callback();}, "500");
        };
        
        pub.getDreamList = function(success_callback, error_callback, param) {
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
    	sel.client_info_contract = $('._client_info_contract', page.dom);     // 계약정보 탭화면
    	
    	sel.client_month_income = $('._client_month_income', page.dom);     // 월소득
    	sel.client_add_income = $('._client_add_income', page.dom);     // 추가소득
    	sel.client_year_income = $('._client_year_income', page.dom);     // 연봉
    	
    	sel.client_income_list_01 = $('._client_income_list_01', page.dom); // 저축
    	sel.income_add_01 = $('._income_add_01', page.dom); // 저축 추가
    	
    	sel.client_income_list_02 = $('._client_income_list_02', page.dom); // 투자
    	sel.income_add_02 = $('._income_add_02', page.dom); // 투자 추가
    	
    	sel.client_income_list_03 = $('._client_income_list_03', page.dom); // 보험
    	sel.income_add_03 = $('._income_add_03', page.dom); // 보험 추가
    	
    	sel.client_property_list_01 = $('._client_property_list_01', page.dom); // 자산목록
    	sel.property_add_01 = $('._property_add_01', page.dom); // 자산 추가    	
    	sel.property_mount = $('._property_mount', page.dom); // 자산 및 부채 추가된 입력박스
    	
    	sel.client_property_list_02 = $('._client_property_list_02', page.dom); // 부채목록
    	sel.property_add_02 = $('._property_add_02', page.dom); // 부채 추가
    	
    	sel.client_dream_list = $('._client_dream_list', page.dom); // dream list
    	sel.dream_add = $('._dream_add', page.dom); // dream 추가
    	
    	sel.income_del = $('._income_del', page.dom);
    	
    	// pub start
    	var pub = {};
    	
    	pub.getClient_month_income = function() {
            return sel.client_month_income.val();
        };
        pub.getClient_add_income = function() {
            return sel.client_add_income.val();
        };
        pub.getClient_year_income = function() {
            return sel.client_year_income.val();
        };
    	
        // 저장 클릭이벤트 바인드
        sel.info_save.unbind('click');
        pub.onClickInfoSave = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  info_save 에 이벤트가 바인드되었습니다.");
            sel.info_save.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 취소 버튼 클릭 이벤트 바인드
        sel.info_exit.unbind('click');
        pub.onClickInfoExit = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page :: info_exit 에 이벤트가 바인드되었습니다.");
            sel.info_exit.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 기본정보탭
        sel.client_info_base.unbind('click');
        pub.onClickClientBase = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page :: client_info_base 에 이벤트가 바인드되었습니다.");
            sel.client_info_base.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 상세정보탭
        sel.client_info_detail.unbind('click');
        pub.onClickClientDetail = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page :: client_info_detail 에 이벤트가 바인드되었습니다.");
            sel.client_info_detail.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 계약정보탭
        sel.client_info_contract.unbind('click');
        pub.onClickClientContract = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page :: client_info_contract 에 이벤트가 바인드되었습니다.");
            sel.client_info_contract.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 저축추가
        sel.income_add_01.unbind('click');
        pub.onClickIncomeAdd01 = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  income_add_01 에 이벤트가 바인드되었습니다.");
            sel.income_add_01.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 투자추가
        sel.income_add_02.unbind('click');
        pub.onClickIncomeAdd02 = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  income_add_02 에 이벤트가 바인드되었습니다.");
            sel.income_add_02.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 보험추가
        sel.income_add_03.unbind('click');
        pub.onClickIncomeAdd03 = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  income_add_03 에 이벤트가 바인드되었습니다.");
            sel.income_add_03.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 자산추가
        sel.property_add_01.unbind('click');
        pub.onClickPropertyAdd01 = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  property_add_01 에 이벤트가 바인드되었습니다.");
            sel.property_add_01.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 부채추가
        sel.property_add_02.unbind('click');
        pub.onClickPropertyAdd02 = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  property_add_02 에 이벤트가 바인드되었습니다.");
            sel.property_add_02.unbind('click').bind('click', function() {
                callback();
            });
        };
        
        // 부채 및 자산의 숫자형태만 받기위함
        pub.onChangePropertyMount= function(callback) {
        	sel.property_mount.die("keyup");
        	console.log(tag + " ::: property_mount 의 change 이벤트가 바인드되었습니다.");
            sel.property_mount.die("keyup").live('keyup', function() {
                callback($(this));
            });
        };
        
        // dream 추가
        sel.dream_add.unbind('click');
        pub.onClickDreamAdd = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  dream_add 에 이벤트가 바인드되었습니다.");
            sel.dream_add.die('click').live('click', function() {
                callback();
            });
        };
        
        // 제거버튼
        sel.income_del.unbind('click');
        pub.onClickIncomeDel = function(callback) {        	
        	console.log(tag + " ::: client_tab_03_page ::  income_del 에 이벤트가 바인드되었습니다.");
            sel.income_del.die('click').live('click', function() {            	
            	callback($(this));
            });
        };
        
        pub.defaultInfo = function(data) {
        	console.log("tab 03 : default info setting ::" + JSON.stringify(page.this_page_data));
        	
        	var mainData = page.this_page_data.main_data;
        	
        	if(mainData != null && $.isPlainObject(mainData)) {
	        	sel.client_month_income.val(mainData.client_month_income);
	        	sel.client_add_income.val(mainData.client_add_income);
	        	sel.client_year_income.val(mainData.client_year_income);
        	} else {
        		sel.client_month_income.val('');
	        	sel.client_add_income.val('');
	        	sel.client_year_income.val('');;
        	}
        };
                
        // 리스트 아이템을 추가한다.
        pub.getIncomeList01 = function() { 
        	console.log(" === 여기 호출 되었나요? ===== 01 ::: " + JSON.stringify(page.this_page_data.income_data_01));
        	sel.client_income_list_01.empty();        	
        	sel.client_income_list_01.pcs_list('addItems', page.this_page_data.income_data_01);
        };
        pub.getIncomeListAdd01 = function() {
        	console.log(" === 추가합니다. =====");     
        	var tmpData = [{"income_name":"","income_mount":""}];        	
        	sel.client_income_list_01.pcs_list('addItems', tmpData);
        };
        
        pub.getIncomeList02 = function() {        	
        	console.log(" === 여기 호출 되었나요? =====02 ::: " + JSON.stringify(page.this_page_data.income_data_02));
        	sel.client_income_list_02.empty();
        	sel.client_income_list_02.pcs_list('addItems', page.this_page_data.income_data_02);
        };
        pub.getIncomeListAdd02 = function() {
        	console.log(" === 추가합니다. =====");     
        	var tmpData = [{"income_name":"","income_mount":""}];        	
        	sel.client_income_list_02.pcs_list('addItems', tmpData);
        };
        
        pub.getIncomeList03 = function() {       
        	console.log(" === 여기 호출 되었나요? =====03 ::: " + JSON.stringify(page.this_page_data.income_data_03));
        	sel.client_income_list_03.empty();
        	sel.client_income_list_03.pcs_list('addItems', page.this_page_data.income_data_03);
        };
        pub.getIncomeListAdd03 = function() {
        	console.log(" === 추가합니다. =====");     
        	var tmpData = [{"income_name":"","income_mount":""}];        	
        	sel.client_income_list_03.pcs_list('addItems', tmpData);
        };
        
        pub.getPropertyList01 = function() {       
        	console.log(" === 여기 호출 되었나요? ===== property 01 ::: " + JSON.stringify(page.this_page_data.property_data_01));
        	sel.client_property_list_01.empty();
        	sel.client_property_list_01.pcs_list('addItems', page.this_page_data.property_data_01);
        };
        pub.getPropertyListAdd01 = function() {
        	console.log(" === 추가합니다. =====");     
        	var tmpData = [{"property_name":"","property_mount":""}];        	
        	sel.client_property_list_01.pcs_list('addItems', tmpData);
        };
        
        pub.getPropertyList02 = function() {       
        	console.log(" === 여기 호출 되었나요? ===== property 02 ::: " + JSON.stringify(page.this_page_data.property_data_02));
        	sel.client_property_list_02.empty();
        	sel.client_property_list_02.pcs_list('addItems', page.this_page_data.property_data_02);
        };
        pub.getPropertyListAdd02 = function() {
        	console.log(" === 추가합니다. =====");     
        	var tmpData = [{"property_name":"","property_mount":""}];        	
        	sel.client_property_list_02.pcs_list('addItems', tmpData);
        };
        
        pub.getDreamList = function() { 
        	console.log(" === 여기 호출 되었나요? ===== dream 01 ::: " + JSON.stringify(page.this_page_data.dream_data));
        	sel.client_dream_list.empty();        	
        	sel.client_dream_list.pcs_list('addItems', page.this_page_data.dream_data);
        	
        	if($('._new_list_dream_item', page.dom).length === 0) {
            	page.view.getDreamListAdd();
            }
        };
        pub.getDreamListAdd = function() {
        	console.log(" === 추가합니다. dream =====");     
        	var tmpData = [{"dream_title":"","dream_conts":"", "dream_start_dt":"", "dream_end_dt":""}];        	
        	sel.client_dream_list.pcs_list('addItems', tmpData);        	
        };
        
        // 아이템 제거
        pub.getIncomeItemDel = function(obj) {
        	console.log(" === 항목을 제거합니다. =====" + obj);
        	console.log(" === 항목을 제거합니다. =====" + obj.parent().d);
        	obj.parent().empty();
        };
        
        
        pub.makeViewSum = function() {
        	console.log("화면에 정보를 뿌려봅니다. ==== 자산 부채");
        	var tot_plus = 0;
        	var tot_minus = 0;
        	var tot_pure_plus = 0;
        	
        	$('._new_list_property_item_01_add', page.dom).each(function() {            
            	tot_plus += Number($('._property_mount', $(this)).val());
        	});
        	
        	$('._new_list_property_item_02_add', page.dom).each(function() {
        		tot_minus += Number($('._property_mount', $(this)).val());
        	});
        	
        	/*if($.isPlainObject(page.this_page_data.property_data_01)) {
        		$('._new_list_property_item_01_add', page.dom).each(function() {            
                	tot_plus += Number($('._property_mount', $(this)).val());
            	});
        	}
        	
        	if($.isPlainObject(page.this_page_data.property_data_02)) {
            	$('._new_list_property_item_02_add', page.dom).each(function() {
            		tot_minus += Number($('._property_mount', $(this)).val());
            	});
        	}*/
        	
        	tot_pure_plus = tot_plus - tot_minus;
        	
        	$('._tot_plus', page.dom).text(tot_plus + "원");
        	$('._tot_minus', page.dom).text(tot_minus + "원");
        	$('._tot_pure_plus', page.dom).text(tot_pure_plus + "원");
        };
        
        
        pub.init = function() {
        	sel.client_income_list_01.pcs_list({
                'template' : '#_client_income_add_01_templet',
                'param' : function($item) {
                    return {                    	
                        'income_name': $('._income_name', $item),
                        'income_mount': $('._income_mount', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                	
                    param.income_name.attr('value', data.income_name);                    
                    param.income_mount.attr('value', data.income_mount);
                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_income_list_01 ._new_list_item_01').attr('class', '_new_list_item_01_add hbox jc');
                }
            });
        	
        	sel.client_income_list_02.pcs_list({
                'template' : '#_client_income_add_02_templet',
                'param' : function($item) {
                    return {                    	
                        'income_name': $('._income_name', $item),
                        'income_mount': $('._income_mount', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                	
                    param.income_name.attr('value', data.income_name);                    
                    param.income_mount.attr('value', data.income_mount);
                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_income_list_02 ._new_list_item_02').attr('class', '_new_list_item_02_add hbox jc');
                }
            });
        	
        	sel.client_income_list_03.pcs_list({
                'template' : '#_client_income_add_03_templet',
                'param' : function($item) {
                    return {                    	
                        'income_name': $('._income_name', $item),
                        'income_mount': $('._income_mount', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                	
                    param.income_name.attr('value', data.income_name);                    
                    param.income_mount.attr('value', data.income_mount);
                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_income_list_03 ._new_list_item_03').attr('class', '_new_list_item_03_add hbox jc');
                }
            });
        	
        	sel.client_property_list_01.pcs_list({
                'template' : '#_client_property_add_01_templet',
                'param' : function($item) {
                    return {                    	
                        'property_name': $('._property_name', $item),
                        'property_mount': $('._property_mount', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                	
                    param.property_name.attr('value', data.property_name);                    
                    param.property_mount.attr('value', data.property_mount);
                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_property_list_01 ._new_list_property_item_01').attr('class', '_new_list_property_item_01_add hbox jc');
                }
            });
        	
        	sel.client_property_list_02.pcs_list({
                'template' : '#_client_property_add_02_templet',
                'param' : function($item) {
                    return {                    	
                        'property_name': $('._property_name', $item),
                        'property_mount': $('._property_mount', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                	
                    param.property_name.attr('value', data.property_name);                    
                    param.property_mount.attr('value', data.property_mount);
                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_property_list_02 ._new_list_property_item_02').attr('class', '_new_list_property_item_02_add hbox jc');
                }
            });
        	
        	
        	sel.client_dream_list.pcs_list({
                'template' : '#_client_dream_add_templet',
                'param' : function($item) {
                    return {                    	
                        'dream_title': $('._dream_title', $item),
                        'dream_conts': $('._dream_conts', $item),
                        'dream_start_dt': $('._dream_start_dt', $item),
                        'dream_end_dt': $('._dream_end_dt', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                	
                    param.dream_title.attr('value', data.dream_title);                    
                    param.dream_conts.text(data.dream_conts);
                    param.dream_start_dt.attr('value', data.dream_start_dt);
                    param.dream_end_dt.attr('value', data.dream_end_dt);
                    
                },
                'onAddsFinish' : function() {
                	// 클래스명 변경
                	$('._client_dream_list ._new_list_dream_item').attr('class', '_new_list_dream_item_add');
                	
                }
            });
        	
        	
        	pub.makeViewSum();
        	
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
        	
        	main_data.client_month_income = page.view.getClient_month_income();
        	main_data.client_add_income = page.view.getClient_add_income();
        	main_data.client_year_income = page.view.getClient_year_income();        	
        	

        	var arrIncome01 = [];
        	var arrIncome02 = [];
        	var arrIncome03 = [];
        	var arrProperty01 = [];
        	var arrProperty02 = [];
        	var arrDream = [];
        	var incomeCnt = 0;
        	
        	$('._new_list_item_01_add', page.dom).each(function() {
        		
        		var income01Obj = {};
        		income01Obj.income_gb = $('._income_gb', $(this)).val();
        		income01Obj.income_name = $('._income_name', $(this)).val();
        		income01Obj.income_mount = $('._income_mount', $(this)).val();        
        		
        		if(income01Obj.income_name != "") {
        			arrIncome01[incomeCnt] = income01Obj;
	        		incomeCnt++;
        		}
        	});
        	
        	incomeCnt = 0;
        	$('._new_list_item_02_add', page.dom).each(function() {
        		
        		var income02Obj = {};
        		income02Obj.income_gb = $('._income_gb', $(this)).val();
        		income02Obj.income_name = $('._income_name', $(this)).val();
        		income02Obj.income_mount = $('._income_mount', $(this)).val();        
        		
        		if(income02Obj.income_name != "") {
        			arrIncome02[incomeCnt] = income02Obj;
	        		incomeCnt++;
        		}
        	});
        	
        	incomeCnt = 0;
        	$('._new_list_item_03_add', page.dom).each(function() {
        		
        		var income03Obj = {};
        		income03Obj.income_gb = $('._income_gb', $(this)).val();
        		income03Obj.income_name = $('._income_name', $(this)).val();
        		income03Obj.income_mount = $('._income_mount', $(this)).val();        
        		
        		if(income03Obj.income_name != "") {
        			arrIncome03[incomeCnt] = income03Obj;
	        		incomeCnt++;
        		}
        	});
        	
        	incomeCnt = 0;
        	$('._new_list_property_item_01_add', page.dom).each(function() {
        		
        		var property01Obj = {};
        		property01Obj.property_gb = $('._property_gb', $(this)).val();
        		property01Obj.property_name = $('._property_name', $(this)).val();
        		property01Obj.property_mount = $('._property_mount', $(this)).val();        
        		
        		if(property01Obj.property_name != "") {
        			arrProperty01[incomeCnt] = property01Obj;
	        		incomeCnt++;
        		}
        	});
        	
        	incomeCnt = 0;
        	$('._new_list_property_item_02_add', page.dom).each(function() {
        		
        		var property02Obj = {};
        		property02Obj.property_gb = $('._property_gb', $(this)).val();
        		property02Obj.property_name = $('._property_name', $(this)).val();
        		property02Obj.property_mount = $('._property_mount', $(this)).val();        
        		
        		if(property02Obj.property_name != "") {
        			arrProperty02[incomeCnt] = property02Obj;
	        		incomeCnt++;
        		}
        	});
        	
        	incomeCnt = 0;
        	$('._new_list_dream_item_add', page.dom).each(function() {
        		
        		var dreamObj = {};
        		dreamObj.dream_title = $('._dream_title', $(this)).val();
        		dreamObj.dream_conts = $('._dream_conts', $(this)).val();
        		dreamObj.dream_start_dt = $('._dream_start_dt', $(this)).val();
        		dreamObj.dream_end_dt = $('._dream_end_dt', $(this)).val();      
        		
        		if(dreamObj.dream_title != "" && dreamObj.dream_title != undefined) {
        			arrDream[incomeCnt] = dreamObj;
	        		incomeCnt++;
        		}
        		
        		console.log("이곳은 꿈이요......" + JSON.stringify(dreamObj));
        	});
        	
        	page.this_page_data.main_data = main_data;
        	
        	page.this_page_data.income_data_01 = arrIncome01;
        	page.this_page_data.income_data_02 = arrIncome02;
        	page.this_page_data.income_data_03 = arrIncome03;
        	
        	page.this_page_data.property_data_01 = arrProperty01;
        	page.this_page_data.property_data_02 = arrProperty02;
        	
        	page.this_page_data.dream_data = arrDream;
        	
        };
        
        pub.init = function() {
        	// 삭제하지 마세요.
            page.model.init();
            page.view.init();
            
            // 현재페이지에서 사용할 전역변수를 세팅합니다.
            page.this_page_data = pcs.html._param;
                        
            // 고객상세정보를 세팅합니다.
            page.view.defaultInfo();
            
            // 재무리스팅 시작
            page.model.getIncomeList01(function() { page.view.getIncomeList01();}, function() { alert("error"); }, "");
            page.model.getIncomeList02(function() { page.view.getIncomeList02();}, function() { alert("error"); }, "");
            page.model.getIncomeList03(function() { page.view.getIncomeList03();}, function() { alert("error"); }, "");
            
            page.model.getPropertyList01(function() { page.view.getPropertyList01();}, function() { alert("error"); }, "");
            page.model.getPropertyList02(function() { page.view.getPropertyList02();}, function() { alert("error"); }, "");
            
            page.model.getDreamList(function() { page.view.getDreamList();}, function() { alert("error"); }, "");
            
            // 저장 이벤트 호출
            page.view.onClickInfoSave(function() {
            	
            	pub.makeParam();
                var param = page.this_page_data;
                
                console.log(tag + " ::: client_tab_03_page 의 info_save 에 이벤트가 호출되었습니다." + JSON.stringify(param));         
                
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
            	console.log(tag + " ::: client_tab_03_page 의 info_exit 에 이벤트가 호출되었습니다.");            	
                pcs.html.startActivity("../client/client_list.html", null);
            	//pcs.html.finish();
            });
            
            // 기본정보
            page.view.onClickClientBase(function() {
            	console.log(tag + " ::: client_tab_03_page 의 onClickClientBase 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_01.html", page.this_page_data);
            });
            
            // 상세정보
            page.view.onClickClientDetail(function() {
            	console.log(tag + " ::: client_tab_03_page 의 onClickClientDetail 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_02.html", page.this_page_data);
            });
            
            // 계약정보
            page.view.onClickClientContract(function() {
            	console.log(tag + " ::: client_tab_03_page 의 onClickClientContract 에 이벤트가 호출되었습니다.");
            	// 파라미터를 재구성하여 세팅합니다.
            	pub.makeParam();
                pcs.html.startActivity("../client/client_tab_04.html", page.this_page_data);
            });
            
            // 저축추가
            page.view.onClickIncomeAdd01(function() {
            	console.log(tag + " ::: client_tab_03_page 의 getIncomeListAdd01 에 이벤트가 호출되었습니다.");            	
            	page.view.getIncomeListAdd01();
            });
            
            // 저축추가
            page.view.onClickIncomeAdd02(function() {
            	console.log(tag + " ::: client_tab_03_page 의 getIncomeListAdd02 에 이벤트가 호출되었습니다.");            	
            	page.view.getIncomeListAdd02();
            });
            
            // 보험추가
            page.view.onClickIncomeAdd03(function() {
            	console.log(tag + " ::: client_tab_03_page 의 getIncomeListAdd03 에 이벤트가 호출되었습니다.");            	
            	page.view.getIncomeListAdd03();
            });
            
            // 자산추가
            page.view.onClickPropertyAdd01(function() {
            	console.log(tag + " ::: client_tab_03_page 의 onClickPropertyAdd01 에 이벤트가 호출되었습니다.");            	
            	page.view.getPropertyListAdd01();
            });
            
            // 부채추가
            page.view.onClickPropertyAdd02(function() {
            	console.log(tag + " ::: client_tab_03_page 의 onClickPropertyAdd02 에 이벤트가 호출되었습니다.");            	
            	page.view.getPropertyListAdd02();
            });
            
            // 자산 및 부채의 숫자형태 키업
            page.view.onChangePropertyMount(function(obj) {
            	console.log(tag + " ::: client_tab_03_page 의 onChangePropertyMount 에 이벤트가 호출되었습니다.");            	
            	obj.keyup(
            				function(event) {
            					obj.val(obj.val().replace(/[^0-9]/g,''));
            					page.view.makeViewSum();
            				}
            	);
            });
            
            // dream 추가
            page.view.onClickDreamAdd(function() {
            	console.log(tag + " ::: client_tab_03_page 의 onClickDreamAdd 에 이벤트가 호출되었습니다.");            	
            	page.view.getDreamListAdd();
            });
            
            // 제거버튼
            page.view.onClickIncomeDel(function(obj) {
            	console.log(tag + " ::: client_tab_03_page 의 onClickIncomeDel 에 이벤트가 호출되었습니다.");            	
            	page.view.getIncomeItemDel(obj);
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
