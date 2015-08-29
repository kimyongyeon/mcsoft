
$("#private_join_ok_page").live("pageinit", function() {

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
        sel.join_ok = $('._join_ok', page.dom);
    	
        var pub = {};        
        // 회원가입 완료 후 확인버튼 이벤트 바인드
        pub.onClickJoinOk = function(callback) {        	
        	console.log(tag + " ::: private_join의 _join_ok 에 이벤트가 바인드되었습니다.");
            sel.join_ok.bind('click', function() {
                callback();
            });
        };
        
        var rcvParam = window.pcs.html._param;
        if(rcvParam !=  null) {
        	$('._user_nm').html(rcvParam.user_nm +" 님");
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
            
            
            // 확인버튼 이벤트
            page.view.onClickJoinOk(function() {
            	console.log(tag + " ::: private_join의 _join_ok 에 이벤트가 호출되었습니다.");            	
                pcs.html.startActivity("../private/private_login.html");
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
