
$("#private_login_page").live("pageinit", function() {

    // 페이지 전역 변수 초기화 로그
    var page = {
        "dom" : $(this),
        "id" : $(this).attr("id")
    };

    
    page.model = ( function() {
      
        var pub = {};        
        pub.init = function() {
        };
        return pub;
    }());

    page.view = ( function() {
        
    	// selector 등록
    	var sel = {};
    	sel.privateLogin = $('._private_login', page.dom);
        sel.privatejoin = $('._private_join', page.dom);        
        sel.private_login_id = $('._private_login_id', page.dom);
        sel.private_login_pw = $('._private_login_pw', page.dom);
    	
        var pub = {};        
        
        
        pub.userLogin = function(callback) {
        };
        
        // 로그인 이벤트 바인드
        pub.onClickPrivateLogin = function(callback) {
            sel.privateLogin.bind('click', function() {
                callback();
            });
        };
        // 회원가입 이벤트 바인드
        pub.onClickPrivateJoin = function(callback) {
            sel.privatejoin.bind('click', function() {
                callback();
            });
        };
        
        // title
        pub.getPrivateLoginId = function() {
            return sel.private_login_id.val();
        };
        // writer
        pub.getPrivateLoginPw = function(writer) {
        	return sel.private_login_pw.val();
        }
        
        
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
            
            
            // 로그인버튼 이벤트 콜
            page.view.onClickPrivateLogin(function() {
                // 서버와의 통신시도
            	var param = {};
                param.user_id = page.view.getPrivateLoginId();
                param.user_pw = page.view.getPrivateLoginPw();
                param.main_cd = common.code.login_office_type;
                param.user_section = "001";
                param.TRCODE = "MCSOFT_SUCCESS_LOGIN";
                
             
                /*var tmpJson = {};
                tmpJson.user_id = "fox7601";
				tmpJson.user_name = "엄진영";
				pcs.html.localStorage.set("login_info", JSON.stringify(tmpJson));
				pcs.html._is_login = true;
				pcs.html.startActivity("../main/main_menu.html");*/
                   
                console.log(JSON.stringify(param) + " <<<<<<< ");
                                                
                var http_str = common.http.doRequestString(param.TRCODE, JSON.stringify(param));
                var http_json = JSON.parse(http_str);
                console.log(tag +"::::  response data - real : " + http_json);
                
                /**
                 * 오브젝트 체크 및 기타 체크 시작 
                 */               
                if($.isPlainObject(http_json)) {
                	if(http_json.result_status === "t") {
                		// 서버에서 받은 데이터가 일단 정상
                		var login_obj = http_json.result_data;
                		
                		if(login_obj != null) {
	                		if(login_obj.user_id !== undefined && login_obj.user_id !== null && param.user_id === login_obj.user_id) {
	                			//alert("로그인 처리중입니다....");
	                			pcs.html.localStorage.set("login_info", JSON.stringify(login_obj));
	                			//alert(pcs.html.localStorage.get("login_info", "user_id")+"님 안녕하세요. 메인페이지로 이동합니다.");
	                			pcs.html._is_login = true;
	                			pcs.html.startActivity("../main/main_menu.html");
	                		} else {
	                			alert("로그인에 실패하였습니다.");
	                			return false;
	                		}
                		} else {
                			alert("로그인에 실패하였습니다.");
                    		return false;
                		}
                	} else {
                		alert("로그인에 실패하였습니다.");
                		return false;
                	}
                	
                } else {
                	alert("로그인에 실패하였습니다.");
                	return false;
                }                
               
            });
            
            // 회원가입버튼 이벤트 콜
            page.view.onClickPrivateJoin(function() {
                pcs.html.startActivity("../private/private_join.html");
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
    	// 로그인 여부를 체크하여 다이얼로그를 띄우고 메인으로 이동한다.
    	if(pcs.html._is_login === true) {
    		//pcs.html.startActivity("../main/main_menu.html");
    	}
    });
    // pcs.html.finish() 에 의하여 페이지가 삭제되기 직전에 호출된다.
    // 페이지가 삭제되기 전에 처리할 작업을 위한 코드를 작성한다.
    page.dom.bind("onDestroy", function() {
        // TODO 코드 작성
    });
});
