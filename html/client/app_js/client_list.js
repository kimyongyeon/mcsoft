
$("#client_list_page").live("pageinit", function() {

    // 페이지 전역 변수 초기화 로그
    var page = {
        "dom" : $(this),
        "id" : $(this).attr("id")
    };

    
    page.model = ( function() {
      
    	var dummy_data = [{"client_tainterval":"1","client_section":"4","main_seq":3,"client_birth":"1976.12.30","user_id":"fox7601@gmail.com","client_nm":"홍길북","client_tadate":"2014.07.10"},{"client_tainterval":"1","client_section":"2","main_seq":2,"client_birth":"1976.01.01","user_id":"fox7601@gmail.com","client_nm":"홍길남","client_tadate":"2014.07.10"},{"client_tainterval":"1","client_section":"2","main_seq":1,"client_birth":"1976.01.01","user_id":"fox7601@gmail.com","client_nm":"홍길동","client_tadate":"2014.07.10"}];
    	
    	var dummy_data_gold = [{
    		"main_seq" : "1",
            "client_nm": "엄진영_gold",
            "client_tel" : "010-8431-7288"
        }, {
        	"main_seq" : "2",
            "client_nm": "홍길동_gold",
            "client_tel" : "010-8431-7289"
        }, {
        	"main_seq" : "3",
            "client_nm": "홍길서_gold",
            "client_tel" : "010-8431-7299"
        }];
    	
    	//var dummy_data_reg = [];
    	
        var pub = {};
        
        pub.getList = function(success_callback, error_callback, param) {
        	// 서버와의 통신을 시동한다.
        	//setTimeout(function() {success_callback(dummy_data);}, "1000");
        	var param = {};
            param.user_id = pcs.html.localStorage.get('login_info', 'user_id');
            param.new_yn = "Y";
            param.TRCODE = "MCSOFT_SUCCESS_CLIENT_MAIN_LIST";
            
            var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
            var http_json = JSON.parse(http_str);
            
        	var client_new_list;
        	if($.isPlainObject(http_json)) {
        		client_new_list = http_json.result_data.client_list;
        		//success_callback(client_new_list);
        	}
        	
        	setTimeout(function() {success_callback(client_new_list);}, "100");
        };
        
        pub.getListGold = function(success_callback, error_callback, param) {
        	// 서버와의 통신을 시도한다.
        	setTimeout(function() {success_callback(dummy_data_gold);}, "500");
        };
        
        pub.getListReg = function(success_callback, error_callback, param) {
        	// 서버와의 통신을 시동한다.
        	//setTimeout(function() {success_callback(dummy_data);}, "1000");
        	var param = {};
            param.user_id = pcs.html.localStorage.get('login_info', 'user_id');
            param.new_yn = "N";
            param.TRCODE = "MCSOFT_SUCCESS_CLIENT_MAIN_LIST";
            
            var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
            var http_json = JSON.parse(http_str);
            
        	var client_reg_list;
        	if($.isPlainObject(http_json)) {
        		client_reg_list = http_json.result_data.client_list;
        		//success_callback(client_new_list);
        	}
        	
        	setTimeout(function() {success_callback(client_reg_list);}, "100");
        };
        
        
        pub.clientDelete = function(success_callback, error_callback, rParam) {
        	// 서버와의 통신을 시동한다.
        	//setTimeout(function() {success_callback(dummy_data);}, "1000");
        	var param = {};
            param.user_id = pcs.html.localStorage.get('login_info', 'user_id');
            param.main_seq = rParam.main_seq;
            param.TRCODE = "MCSOFT_SUCCESS_CLIENT_MAIN_DELETE";
            
            var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
            var http_json = JSON.parse(http_str);
            
            if($.isPlainObject(http_json)) {
            	if(http_json.result_status === "t") {
            		var join_obj = http_json.result_data;
            		
            		if(join_obj != null) {
                		if(join_obj.job_status != null && join_obj.job_status === "success") {
                			success_callback(rParam);
                		}
            		} else {
            			error_callback();
            		}
            	} else {
        			error_callback();
        		}
            } else {
    			error_callback();
    		}
            
        };
        
        pub.init = function() {
        };
        return pub;
    }());

    page.view = ( function() {
        
    	// selector 등록
    	var sel = {};
    	sel.mainhome = $('._main_home', page.dom);
    	sel.client_add = $('._client_add', page.dom);             // 고객등록
    	sel.client_del = $('._client_del', page.dom); // 신규고객 목록에서 삭제처리 대상
    	
    	// 신규고객 selector
        sel.client_list_new = $('._client_list_new', page.dom);
        sel.client_list_item = $('._client_click_id',  page.dom);
                
    	// 황금노트 selector
        sel.client_list_gold = $('._client_list_gold', page.dom);
        
        // 고객목록
        sel.client_list_reg = $('._client_list_reg', page.dom);
        
        
        sel.client_search = $('._client_search', page.dom);             // 검색
        
        //sel.client_search.val(pcs.html.localStorage.get('login_info', 'user_id'));
        
        var pub = {};        
        // 메인홈 이벤트 바인드
        pub.onClickmainhome= function(callback) {
        	console.log(tag + " ::: client_list_page 의 홈버튼에 이벤트가 unbind");
        	sel.mainhome.unbind("click");
        	console.log(tag + " ::: client_list_page 의 홈버튼에 이벤트가 bind");        	
            sel.mainhome.bind('click', function() {
                callback();
            });
        };
        
        // 검색
        pub.onChangeClientSearch= function(callback) {
        	console.log(tag + " ::: _client_search 의 keyup 이벤트가 unbind");
        	sel.client_search.unbind("click");
        	console.log(tag + " ::: _client_search 의 keyup 이벤트가 바인드되었습니다.");
            sel.client_search.bind('keyup', function() {
                callback();
            });
        };
        
        
        // 고객등록
        pub.onClickClientAdd= function(callback) {
        	console.log(tag + " ::: client_list_page 의 고객등록버튼에 이벤트가 unbind");
        	sel.client_search.unbind("click");
        	console.log(tag + " ::: client_list_page 의 고객등록버튼에 이벤트가 바인드되었습니다.");
            sel.client_add.bind('click', function() {
                callback();
            });
        };
        
        // 신규 고객 삭제
        pub.onClickClientDel= function(callback) {
        	console.log(tag + " ::: client_list_page 의 고객삭제 버튼에 이벤트가 unbind.");
        	sel.client_del.unbind('click');
        	console.log(tag + " ::: client_list_page 의 고객삭제 버튼에 이벤트가 bind.");
            sel.client_del.bind('click', function() {
                callback();
            });
        };
        
        // list item을 클릭했을 때..
        pub.onClickListItem = function(callback) {
        	
        	console.log(tag + " ::: client_list_page 의 client_list_item 버튼에 이벤트가 unbind.");
        	sel.client_list_item.die('click');
        	console.log(tag + " ::: client_list_page 의 client_list_item 버튼에 이벤트가 bind.");
        	
            sel.client_list_item.live('click', function() {
            	console.log(tag + " ::: client_list_page 의 client_list_item =============" + $(this).attr('data-id'));
                callback( $(this).attr('data-id'));
            });
        };
        
        pub.clientDelete = function(data) {
        	data.delete_object.empty();
        };
        
        
        // 리스트 아이템을 추가한다. - 신규고객
        pub.addItem = function(data) {
            sel.client_list_new.pcs_list('addItems', data);
        };
        
        // 리스트 아이템을 추가한다. - 황금노트 고객
        pub.addItemGold = function(data) {
            sel.client_list_gold.pcs_list('addItems', data);
        };
        
        // 리스트 아이템을 추가한다. - 고객목록
        pub.addItemReg = function(data) {
            sel.client_list_reg.pcs_list('addItems', data);
        };
        
        
        pub.imgData = {};
        pub.imgData.v01 = "../../img/ico_cus1.png";
        pub.imgData.v02 = "../../img/ico_cus2.png";
        pub.imgData.v03 = "../../img/ico_cus3.png";
        pub.imgData.v04 = "../../img/ico_cus4.png";
        pub.imgData.v05 = "../../img/ico_cus5.png";
        pub.imgData.v06 = "../../img/ico_cus6.png";
        pub.imgData.v07 = "../../img/ico_cus7.png";
        pub.imgData.v08 = "../../img/ico_cus8.png";
        
        pub.init = function() {
        	
        	sel.client_list_new.pcs_list({
                'template' : '#_client_list_new_template',
                'param' : function($item) {
                    return {
                    	'new_list_item': $('._new_list_item', $item),
                    	'client_img': $('._client_img', $item),
                        'client_name' : $('._client_name', $item),
                        'client_tel' : $('._client_tel', $item),
                        'client_click_id': $('._client_click_id', $item),
                        'new_client_chk': $('._new_client_chk', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                    param.new_list_item.attr('id', '_new_list_item_'+data.main_seq);
                    param.client_click_id.attr('data-id', data.main_seq);              
                    param.client_img.attr('data-id', data.main_seq);
                    param.client_img.attr('src', '../../img/ico_cus_'+data.client_sex+data.client_section+'.png');
                    param.client_name.text(data.client_nm);
                    //param.client_tel.text(data.client_tel);
                    param.client_tel.text('');
                    param.new_client_chk.val(data.main_seq);
                    param.new_client_chk.attr('id', '_new_list_item_'+data.main_seq);
                },
                'onAddsFinish' : function() {
                }
            });
        	
        	sel.client_list_gold.pcs_list({
                'template' : '#_client_list_new_template',
                'param' : function($item) {
                    return {
                    	'new_list_item': $('._new_list_item', $item),
                        'client_name' : $('._client_name', $item),
                        'client_tel' : $('._client_tel', $item),
                        'client_click_id': $('.client_click_id', $item),
                        'new_client_chk': $('._new_client_chk', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                    param.new_list_item.attr('id', '_gold_list_item_'+data.main_seq);
                    param.client_click_id.attr('data-id', data.main_seq);
                    param.client_name.text(data.client_nm);
                  //param.client_tel.text(data.client_tel);
                    param.client_tel.text('');
                    param.new_client_chk.val(data.main_seq);
                    param.new_client_chk.attr('id', '_gold_list_item_'+data.main_seq);
                },
                'onAddsFinish' : function() {
                }
            });
        	
        	sel.client_list_reg.pcs_list({
                'template' : '#_client_list_new_template',
                'param' : function($item) {
                    return {
                    	'new_list_item': $('._new_list_item', $item),
                        'client_name' : $('._client_name', $item),
                        'client_tel' : $('._client_tel', $item),
                        'client_click_id': $('._client_click_id', $item),
                        'new_client_chk': $('._new_client_chk', $item)
                    };
                },
                'adapter' : function($item, data, param) {
                    param.new_list_item.attr('id', '_reg_list_item_'+data.main_seq);
                    param.client_click_id.attr('data-id', data.main_seq);
                    param.client_name.text(data.client_nm);
                    //param.client_tel.text(data.client_tel);
                    param.client_tel.text('');
                    param.new_client_chk.val(data.main_seq);
                    param.new_client_chk.attr('id', '_reg_list_item_'+data.main_seq);
                },
                'onAddsFinish' : function() {
                }
            });
        	
        };
        
        
        //리스트 초기화
        pub.initClient_list_item = function() {
            //리스트 삭제 
        	console.log("list init start");
            sel.client_list_new.empty();
            sel.client_list_gold.empty();
            sel.client_list_reg.empty();
            console.log("list init end");
        };
        
        return pub;
    }());

    page.controller = ( function() {
        var pub = {};

        pub.init = function() {

        	// 삭제하지 마세요.
            page.model.init();
            page.view.init();
            
            page.view.initClient_list_item();
            
            page.model.getList(function(data) {page.view.addItem(data);}, function() { alert("error");}, "");            
            page.model.getListGold(function(data) { page.view.addItemGold(data);}, function() { alert("error"); }, "");            
            page.model.getListReg(function(data) { page.view.addItemReg(data);}, function() { alert("error"); }, "");
            
            // 메인메뉴 스타트
            page.view.onClickmainhome(function() {
                pcs.html.startActivity("../main/main_menu.html");                
            });
            
            // 검색
            page.view.onChangeClientSearch(function() {
            	console.log(tag + " ::: _client_search 의 change 이벤트가 수행되었습니다. -- " + $('._client_search').val());
            });
            
            // 고객등록 이벤트
            page.view.onClickClientAdd(function() {
            	console.log("=-sdfsd-fsd-f-sdf-sd-f-sdf-sd-fs-df-sdf-sd-f");            	
            	var param = {};
            	param.change_yn = "N";
            	param.main_data = null;
            	param.tell_data = null;
            	param.address_data = null;
            	param.email_data = null;
            	param.detail_data = null;
            	param.income_data_01 = null;
            	param.income_data_02 = null;
            	param.income_data_03 = null;
            	param.property_data_01 = null;
            	param.property_data_02 = null;
            	param.dream_data = null;
            	param.contract_data = null;
            	param.mainParam = {};
            	param.mainParam.main_seq = '';
            	
            	console.log(tag + " ::: client_tab_01_page 의 info_save 에 이벤트가 호출되었습니다. make 04" + JSON.stringify(param));
                pcs.html.startActivity("../client/client_tab_01.html", param);                
            });
            
            // 신규 고객삭제 이벤트
            page.view.onClickClientDel(function() {
            	console.log(tag + " ::: client_list_page 의 고객삭제 이벤트가 호출되었습니다.");
            	var chkCount = 0;
            	$('._new_client_chk:checked').each(function() {
            		chkCount++;        
            		console.log("삭제 아이디 ::: " + $(this).val());
            		
            		var param = {};
                    param.user_id = pcs.html.localStorage.get('login_info', 'user_id');
                    param.main_seq = $(this).val();
                    param.delete_object = $('#'+$(this).attr('id')); 
            		
            		page.model.clientDelete(function(data) {page.view.clientDelete(data);}, function() { alert("error");}, param);
            		
            		//$('#'+$(this).attr('id')).empty();
            		//console.log("삭제 아이디 id ::: _new_list_item_" + $(this).val());
            		
        		});           
            	
            	if(chkCount < 1) {
            		alert("삭제 대상을 선택하세요.");
            		return;
            	}            	
            });
            
            // List Item을 클릭
            page.view.onClickListItem(function(item_id) {
            	var mainParam = {};
            	mainParam.main_seq = item_id;                
            	pcs.html.startActivity('client_tab_01.html', {'mainParam': mainParam});
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
    	page.view.initClient_list_item();
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
    	//page.controller.init();   	
    	
    });
    // pcs.html.finish() 에 의하여 페이지가 삭제되기 직전에 호출된다.
    // 페이지가 삭제되기 전에 처리할 작업을 위한 코드를 작성한다.
    page.dom.bind("onDestroy", function() {
        // TODO 코드 작성
    });
});
