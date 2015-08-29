
$("#main_fullmenu_page").live("pageinit", function() {

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
    	sel.client_card = $('._client_card', page.dom);   // 고객카드
    	sel.ta_list = $('._ta_list', page.dom);   // TA List
    	sel.sit_plan = $('._sit_plan', page.dom);   // Sit Plan
    	sel.sp_client_cal_list = $('._sp_client_cal_list', page.dom);   // 고객일정목록
    	sel.sp_per_cal_list = $('._sp_per_cal_list', page.dom);   // 개인일정목록
    	sel.sp_repeat_list = $('._sp_repeat_list', page.dom);   // 재시도목록
    	sel.post_it = $('._post_it', page.dom);   // post-it
    	sel.pi_user_memo = $('._pi_user_memo', page.dom);   // 사용자메모
    	sel.pi_client_memo = $('._pi_client_memo', page.dom);   // 고객메모
    	sel.crm = $('._crm', page.dom);   // crm
    	sel.crm_gift_shop = $('._crm_gift_shop', page.dom);   // 선물가게 
    	sel.crm_library = $('._crm_library', page.dom);   // 자료실
    	sel.crm_client_analysis = $('._crm_client_analysis', page.dom);   // 고객분석
    	sel.result_analysis = $('._result_analysis', page.dom);   // 성과분석
    	sel.ra_year_plan = $('._ra_year_plan', page.dom);   // 연간계획
    	sel.ra_month_analysis = $('._ra_month_analysis', page.dom);   // 월간분석
    	sel.ra_week_analysis = $('._ra_week_analysis', page.dom);   // 주간분석
    	sel.rainking = $('._rainking', page.dom);   // 랭킹
    	sel.line = $('._line', page.dom);   // 동선관리
    	sel.pointandclient = $('._pointandclient', page.dom);   // 포인트및고객
    	sel.setup = $('._setup', page.dom);   // 설정
    	sel.help = $('._help', page.dom);   // 도움말
    	sel.push_message_room = $('._push_message_room', page.dom);   // 푸시 메시지 보관함
    	sel.li = $('li', page.dom); // 모든 li
    	
    	var pub = {};        
    	
    	// 고객카드 이벤트
        sel.client_card.unbind('click');
        pub.onClickClientCard = function(callback) {        	
        	console.log(tag + " ::: 고객카드 ::  client_card 에 이벤트가 바인드되었습니다.");
            sel.client_card.unbind('click').bind('click', function() {
                callback();
            });
        };
        // TA 이벤트
        sel.ta_list.unbind('click');
        pub.onClickTaList = function(callback) {        	
        	console.log(tag + " ::: TA List ::  ta_list 에 이벤트가 바인드되었습니다.");
        	sel.ta_list.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // Sit Plan 이벤트
        sel.sit_plan.unbind('click');
        pub.onClickSitPlan = function(callback) {        	
        	console.log(tag + " ::: Sit Plan ::  sit_plan 에 이벤트가 바인드되었습니다.");
        	sel.sit_plan.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 고객일정목록 이벤트
        sel.sp_client_cal_list.unbind('click');
        pub.onClickSpClientCalList = function(callback) {        	
        	console.log(tag + " ::: 고객일정목록 ::  sp_client_cal_list 에 이벤트가 바인드되었습니다.");
        	sel.sp_client_cal_list.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 개인일정목록 이벤트
        sel.sp_per_cal_list.unbind('click');
        pub.onClickSpPerCalList = function(callback) {        	
        	console.log(tag + " ::: 개인일정목록 ::  sp_per_cal_list 에 이벤트가 바인드되었습니다.");
        	sel.sp_per_cal_list.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 재시도목록 이벤트
        sel.sp_repeat_list.unbind('click');
        pub.onClickSpRepeatList = function(callback) {        	
        	console.log(tag + " ::: 재시도목록 ::  sp_repeat_list 에 이벤트가 바인드되었습니다.");
        	sel.sp_repeat_list.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // post-it 이벤트
        sel.post_it.unbind('click');
        pub.onClickPostIt = function(callback) {        	
        	console.log(tag + " ::: Post-it ::  post_it 에 이벤트가 바인드되었습니다.");
        	sel.post_it.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 사용자메모 이벤트
        sel.pi_user_memo.unbind('click');
        pub.onClickPiUserMemo = function(callback) {        	
        	console.log(tag + " ::: 사용자메모 ::  pi_user_memo 에 이벤트가 바인드되었습니다.");
        	sel.pi_user_memo.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 고객메모 이벤트
        sel.pi_client_memo.unbind('click');
        pub.onClickPiClientMemo = function(callback) {        	
        	console.log(tag + " ::: 고객메모 이벤트 ::  pi_client_memo 에 이벤트가 바인드되었습니다.");
        	sel.pi_client_memo.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // crm 이벤트
        sel.crm.unbind('click');
        pub.onClickCrm = function(callback) {        	
        	console.log(tag + " ::: crm ::  crm 에 이벤트가 바인드되었습니다.");
        	sel.crm.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 선물가게 이벤트
        sel.crm_gift_shop.unbind('click');
        pub.onClickCrmGiftShop = function(callback) {        	
        	console.log(tag + " ::: 선물가게 ::  crm_gift_shop 에 이벤트가 바인드되었습니다.");
        	sel.crm_gift_shop.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 자료실 이벤트
        sel.crm_library.unbind('click');
        pub.onClickCrmLibrary = function(callback) {        	
        	console.log(tag + " ::: 자료실 ::  crm_library 에 이벤트가 바인드되었습니다.");
        	sel.crm_library.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 고객분석 이벤트
        sel.crm_client_analysis.unbind('click');
        pub.onClickCrmClientAnalysis = function(callback) {        	
        	console.log(tag + " ::: 고객분석 ::  crm_client_analysis 에 이벤트가 바인드되었습니다.");
        	sel.crm_client_analysis.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 성과분석 이벤트
        sel.result_analysis.unbind('click');
        pub.onClickResultAnalysis = function(callback) {        	
        	console.log(tag + " ::: 성과분석 ::  result_analysis 에 이벤트가 바인드되었습니다.");
        	sel.result_analysis.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 연간계획 이벤트
        sel.ra_year_plan.unbind('click');
        pub.onClickRaYearPlan = function(callback) {        	
        	console.log(tag + " ::: 연간계획 ::  ra_year_plan 에 이벤트가 바인드되었습니다.");
        	sel.ra_year_plan.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 월간분석 이벤트
        sel.ra_month_analysis.unbind('click');
        pub.onClickRaMonthAnalysis = function(callback) {        	
        	console.log(tag + " ::: 월간분석 ::  ra_month_analysis 에 이벤트가 바인드되었습니다.");
        	sel.ra_month_analysis.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 주간분석 이벤트
        sel.ra_week_analysis.unbind('click');
        pub.onClickRaWeekAnalysis = function(callback) {        	
        	console.log(tag + " ::: 주간분석 ::  ra_week_analysis 에 이벤트가 바인드되었습니다.");
        	sel.ra_week_analysis.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 랭킹 이벤트
        sel.rainking.unbind('click');
        pub.onClickRanking = function(callback) {        	
        	console.log(tag + " ::: 랭킹 ::  rainking 에 이벤트가 바인드되었습니다.");
        	sel.rainking.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 동선관리 이벤트
        sel.line.unbind('click');
        pub.onClickLine = function(callback) {        	
        	console.log(tag + " ::: 동선관리 ::  line 에 이벤트가 바인드되었습니다.");
        	sel.line.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 포인트및고객 이벤트
        sel.pointandclient.unbind('click');
        pub.onClickPointAndClient = function(callback) {        	
        	console.log(tag + " ::: 포인트및고객 ::  pointandclient 에 이벤트가 바인드되었습니다.");
        	sel.pointandclient.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 설정 이벤트
        sel.setup.unbind('click');
        pub.onClickSetup = function(callback) {        	
        	console.log(tag + " ::: 설정 ::  setup 에 이벤트가 바인드되었습니다.");
        	sel.setup.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 도움말 이벤트
        sel.help.unbind('click');
        pub.onClickHelp = function(callback) {        	
        	console.log(tag + " ::: 도움말 ::  help 에 이벤트가 바인드되었습니다.");
        	sel.help.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        // 푸시 메시지 보관함 이벤트
        sel.push_message_room.unbind('click');
        pub.onClickPushMessageRoom = function(callback) {        	
        	console.log(tag + " ::: 푸시 메시지 보관함 이벤트 ::  push_message_room 에 이벤트가 바인드되었습니다.");
        	sel.push_message_room.unbind('click').bind('click', function() {
        		callback();
        	});
        };
        
        /**
         * sit plan 리스트 다운
         */
        pub.sitPlanListDown = function() {
        	sel.sit_plan.next().slideToggle();
        };
        /**
         * post_it 리스트 다운
         */
        pub.postItListDown = function() {
        	sel.post_it.next().slideToggle();
        };
        /**
         * crm 리스트 다운
         */
        pub.crmListDown = function() {
        	sel.crm.next().slideToggle();
        };
        /**
         * result_analysis 리스트 다운
         */
        pub.resultAnalysisListDown = function() {
        	sel.result_analysis.next().slideToggle();
        };
        
        /**
         * 화면 리셋
         */
        pub.defaultInfoReset = function() {
        	// 모든 리스트 닫기
        	sel.li.removeClass();
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
            
            page.view.defaultInfoReset();
            
            // 고객카드
            page.view.onClickClientCard(function() {
            	console.log(tag + " ::: 고객카드 의 client_card 에 이벤트가 호출되었습니다.0");  
                pcs.html.startActivity("../client/client_list.html", page.this_page_data);
            });
            // TA List
            page.view.onClickTaList(function() {
            	console.log(tag + " ::: TA List 의 ta_list 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../talist/05_talist_tab1_blank.html", page.this_page_data);
            });
            // Sit Plan
            page.view.onClickSitPlan(function() {
            	console.log(tag + " ::: Sit Plan 의 sit_plan 에 이벤트가 호출되었습니다.0");  
            	page.view.sitPlanListDown();
            });
            // 고객일정목록
            page.view.onClickSpClientCalList(function() {
            	console.log(tag + " ::: 고객일정목록 의 sp_client_cal_list 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../sitplan/07_sitplan_list1.html", page.this_page_data);
            });
            // 개인일정목록
            page.view.onClickSpPerCalList(function() {
            	console.log(tag + " ::: 개인일정목록 의 sp_per_cal_list 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../sitplan/07_sitplan_list2.html", page.this_page_data);
            });
            // 재시도목록
            page.view.onClickSpRepeatList(function() {
            	console.log(tag + " ::: 재시도목록 의 sp_repeat_list 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../sitplan/07_sitplan_list3.html", page.this_page_data);
            });
            // post-it
            page.view.onClickPostIt(function() {
            	console.log(tag + " ::: Post-it 의 post_it 에 이벤트가 호출되었습니다.0");  
            	page.view.postItListDown();
            });
            // 사용자메모
            page.view.onClickPiUserMemo(function() {
            	console.log(tag + " ::: 사용자메모 의 pi_user_memo 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../postit/06_postit.html", page.this_page_data);
            });
            // 고객메모
            page.view.onClickPiClientMemo(function() {
            	console.log(tag + " ::: 고객메모 의 pi_client_memo 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../postit/06_memo.html", page.this_page_data);
            });
            // crm
            page.view.onClickCrm(function() {
            	console.log(tag + " ::: crm 의 crm 에 이벤트가 호출되었습니다.0");  
            	page.view.crmListDown();
            });
            // 선물가게
            page.view.onClickCrmGiftShop(function() {
            	console.log(tag + " ::: 선물가게 의 crm_gift_shop 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../crm/09_crm_tab2.html", page.this_page_data);
            });
            // 자료실
            page.view.onClickCrmLibrary(function() {
            	console.log(tag + " ::: 자료실 의 crm_library 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../crm/09_crm_tab3.html", page.this_page_data);
            });
            // 고객분석
            page.view.onClickCrmClientAnalysis(function() {
            	console.log(tag + " ::: 고객분석 의 crm_client_analysis 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../crm/09_crm_tab4.html", page.this_page_data);
            });
            // 성과분석
            page.view.onClickResultAnalysis(function() {
            	console.log(tag + " ::: 성과분석 의 result_analysis 에 이벤트가 호출되었습니다.0");  
            	page.view.resultAnalysisListDown();
            });
            // 연간계획
            page.view.onClickRaYearPlan(function() {
            	console.log(tag + " ::: 연간계획 의 ra_year_plan 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../analysis/10_analysis_tab2.html", page.this_page_data);
            });
            // 월간분석
            page.view.onClickRaMonthAnalysis(function() {
            	console.log(tag + " ::: 월간분석 의 ra_month_analysis 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../analysis/10_analysis_tab3.html", page.this_page_data);
            });
            // 주간분석
            page.view.onClickRaWeekAnalysis(function() {
            	console.log(tag + " ::: 주간분석 의 ra_week_analysis 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../analysis/10_analysis_tab4.html", page.this_page_data);
            });
            // 랭킹
            page.view.onClickRanking(function() {
            	console.log(tag + " ::: 랭킹 의 rainking 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../ranking/12_ranking_default.html", page.this_page_data);
            });
            // 동선관리
            page.view.onClickLine(function() {
            	console.log(tag + " ::: 동선관리 의 line 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../line/08_line.html", page.this_page_data);
            });
            // 포인트및고객
            page.view.onClickPointAndClient(function() {
            	console.log(tag + " ::: 포인트및고객 의 pointandclient 에 이벤트가 호출되었습니다.0");  
            	pcs.html.startActivity("../pointandclient/13_point_list.html", page.this_page_data);
            });
            // 설정
            page.view.onClickSetup(function() {
            	console.log(tag + " ::: 설정 의 setup 에 이벤트가 호출되었습니다.0");  
            	//pcs.html.startActivity("../client/client_tab_02.html", page.this_page_data);
            });
            // 도움말
            page.view.onClickHelp(function() {
            	console.log(tag + " ::: 도움말 의 help 에 이벤트가 호출되었습니다.0");  
            	//pcs.html.startActivity("../client/client_tab_02.html", page.this_page_data);
            });
            // 푸시 메시지 보관함 이벤트
            page.view.onClickPushMessageRoom(function() {
            	console.log(tag + " ::: 푸시 메시지 보관함 이벤트 의 push_message_room 에 이벤트가 호출되었습니다.0");  
            	//pcs.html.startActivity("../client/client_tab_02.html", page.this_page_data);
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
