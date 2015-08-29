
var common;
if (!common) {
	var tag = "common";
	//var connect_url = "http://183.107.155.7:8080/MCSOFT_MOBILE";
	//var connect_url = "http://11.91.215.122:8081/MCSOFT_MOBILE"; // 회사
	var connect_url = "http://115.68.20.148:8080/MCSOFT_MOBILE"; // 실사
	//var connect_url = "http://175.204.211.51:8080/MCSOFT_MOBILE";   // 집
	common = {};    
	common.page = {
			'page_LIST_COUNT' : 10,
			'page_START_NUM' : 1,
			'page_END_NUM' : 10,
			'page_MAX_NUM' : 300,
			'TITLE' : 'PCS MOBILE'
	};
	
	common.code = {
			'login_office_type' : 6
	};
	
	common.http = {
			'request_tr' : null,
			doRequest : function(strTrcode, strJsonData, callback) {				
				//var obj  = window.NETUTIL.doRequest(CONNECT_URL, strTrcode, strJsonData, callback);				
				window.NETUTIL.doRequest(connect_url, strTrcode, strJsonData, callback);
			},
			doRequestString : function(strTrcode, strJsonData, callback) {				
				//var obj  = window.NETUTIL.doRequest(CONNECT_URL, strTrcode, strJsonData, callback);		
				
				if(undefined === window.NETUTIL) {
					
					/*var smsg = common.doRequestString.doSendRequest(
																			function(data) {
																				common.ajaxCallback.doCallback(data);
																			},
																			function(error) {
																				alert(error); return "";
																			}, 
																			strJsonData 
																			);*/
					
					return devCallData(connect_url, strJsonData);
					
			    } else {
			    	return window.NETUTIL.doRequestString(connect_url, strTrcode, strJsonData);
			    }
			},
			doResponse : function(rtnTrCode, rtnData) {
				alert("데이터를 받았습니다.");
				alert("RETURN TR_CODE :"  + rtnTrCode);
				alert("RETURN JSON DATA : " + rtnData);
				console.log(tag + "::: response data : " + rtnData);
				return rtnData;
			}
	};
	
	
	
	common.login_info = {
			"user_login_yn" : false,			
			"saveLoginInfo" : function(login_info) {
				if($.isPlainObject(login_info)) {
	                // 데이터를 localstorage 에 저장한다.
					localStorage.setItem("login_info", JSON.stringify(login_info));
					
					alert("localstorage login_info :" + JSON.stringify(login_info));
					return true;
	            } else {
	            	console.log(tag + " ::: 저장하려는 데이터타입이 Object 가 아닙니다.");
	            	return false;
	            }
	        },
	        "getLoginInfo" : function(login_id) {
	        	if("string" !== typeof (login_id)) {
	            	console.log(tag + " ::: login_id 는 String 타입이어야합니다.");
	                return undefined;
	            } else {
	            	// 데이터를 가지고 나온다.
	            }
	        }
	};
	
	
	common.doRequestString = {
			"doSend" : function (connect_url, strJsonData) {				
				$.ajax({
					'type' : 'post',
					'url' : connect_url,
					'data' : strJsonData,
					'dataType' : 'json',
					'contentType' : 'application/json;charset=utf-8',
					'success' : function(msg) {			
						console.log(tag +"::::  data : " + strJsonData);
						console.log(tag +"::::  response data : " + JSON.stringify(msg));						
						return common.ajaxCallback.doCallback(JSON.stringify(msg));
					},
					'error' : function(res) {
						return common.ajaxCallback.doCallback("");
					}
				});
			}			
	};
	
	
	if (true) {
		common.doRequestString.doSendRequest = function(successFn, errorFn, strJsonData) {
            $.ajax({
                'url': connect_url,
                'type': 'post',
                'cache': false,
                'contentType' : 'application/json;charset=utf-8',
                'dataType' : 'json',
                'data' : strJsonData,
                'success': function(msg) {
					console.log(tag +"::::  data : " + strJsonData);
					console.log(tag +"::::  response data : " + JSON.stringify(msg));
                    successFn(JSON.stringify(msg));
                },
                'error': function(xhr, textStatus, errorThrown) {
                    console.log('ajax::fail');
                    errorFn(textStatus);
                }
            });
        };
    }
	
	
	common.back = {
		    "removeEvent" : function(target){
				target.unbind();
		    }
	    };
	
	common.ajaxCallback = {			
			doCallback : function(strMsg) {
			    return window.pcs.html._is_server_data = strMsg;
			}
	};
	
	
	
	common.checker = {		
			doCheckValue : function(obj) {
				if($.isPlainObject(obj)) {
					return false;
				} else {
					// 여기다 뭘하지?
				}
			}
    };
	
	
	// 헤더 및 푸터 영역 전체에서 -webkit-tap-highlight-color 효과 제거
	(function($){
		 $('div[data-role=page]').live("pagebeforeshow", function(event, data) {
			 $(this).find('[data-role=header] a > span').css("-webkit-tap-highlight-color","rgba(0, 0, 0, 0)");
			 $(this).find('[data-role=footer] a > span').css("-webkit-tap-highlight-color","rgba(0, 0, 0, 0)");
	    });
	})(jQuery);
}

function devCallData(connect_url, strJsonData) {
	var rtn = "";
	$.ajax({
        'url': connect_url,
        'type': 'post',
        'cache': false,
        'async': false,
        'contentType' : 'application/json;charset=utf-8',
        'dataType' : 'json',
        'data' : strJsonData,
        'success': function(msg) {
			console.log(tag +"::::  data : " + strJsonData);
			console.log(tag +"::::  response data : " + JSON.stringify(msg));
			rtn = JSON.stringify(msg);
        },
        'error': function(xhr, textStatus, errorThrown) {
            console.log('ajax::fail');
            rtn = "";
        }
    });
	
	return rtn;
}
