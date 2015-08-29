// jQM 환경설정
$(document).bind("mobileinit", function() {
    // DOM Cache 사용
    $.mobile.page.prototype.options.domCache = true;
    // transition 효과 삭제
    $.mobile.defaultPageTransition = "none";
    $.mobile.defaultDialogTransition = "none";

    pcs.html._base_directory = $.mobile.path.parseUrl(location.href).directory;
});

// //////////////////////////////
( function($) {
    if(undefined === window.pcs) {
        window.pcs = {};
    }
    
    var log = {};
    var TAG = "pcs.html";
    
    // private functions
    var _setMVC = function(page_id, type, data) {
        if("string" !== typeof (page_id)) {
        	console.log(TAG + " ::: pcs.html.get" + type + "()의 파라메터로 입력받은 page_id가 string type이 아닙니다.");
        } else {
            window.pcs.html._mvc_data[type][page_id] = data;
        }
    };
    var _getMVC = function(page_id, type) {
        if("string" !== typeof (page_id)) {
        	console.log(TAG + " ::: pcs.html.get" + type + "()의 파라메터로 입력받은 page_id가 string type이 아닙니다.");
        } else {
            return window.pcs.html._mvc_data[type][page_id];
        }
        return undefined;
    };

    window.pcs.html = {
    	"_is_dev_yn" : "Y",	
    	"_is_server_data" : "",
    	"_is_login" : false,
        "_base_directory" : null,
        "_backtrace_target" : null,
        "_param" : undefined,
        "_result" : undefined,
        "_page_map" : {},
        "_mvc_data" : {
            "model" : {},
            "view" : {},
            "controller" : {}
        },
        "_active_page_id" : "",
        "_flag_setResult" : false,
        "_prev_page_id" : undefined,
        "_refresh_data" : {},        
        "startActivity" : function(url, param) {
            if("string" === typeof (url)) {
                this._param = param;
                $.mobile.changePage(url);
            } else {
            	console.log(TAG + " ::: pcs.html.startActivity(url, param) : url 파라메터는 문자열 타입이어야 합니다.");
            }
        },
        "openDialog" : function(url, param) {
            if("string" === typeof (url)) {
                var $dialog = $('#pcs-dialog');
                if(1 > $dialog.length) {
                    $dialog = $('<a id="pcs-dialog" data-rel="dialog"></a>').appendTo('body');
                }
                $dialog.attr('href', url);
                this._param = param;
                $dialog.trigger('click');
            } else {
            	console.log(TAG + " ::: pcs.html.startActivity(url, param) : url 파라메터는 문자열 타입이어야 합니다.");
            }
        },
        "finish" : function(result) {
            if(undefined !== result) {
                this._result = result;
            } else if(true !== this._flag_setResult) {
                this._result = undefined;
            }
            history.back();
        },
        "backTrace" : function(page_id, result) {
            if(undefined !== result) {
                this._result = result;
            } else if(true !== this._flag_setResult) {
                this._result = undefined;
            }
            // A 페이지에서 backTrace(A)페이지를 호출할 경우: 페이지 이동 없이 onRestart()만 호출된다.
            if(this._active_page_id === page_id) {
            	console.log(TAG + ":::" +  page_id + " -> Event::onRestart()");
            	console.log(TAG + " ::: onRestart() parameter -> ", this._result);
                $("#" + page_id).trigger("onRestart", [this._result, this._prev_page_id, false]);
            } else {
                this._backtrace_target = page_id;
                history.back();
            }
        },
        "setResult" : function(result) {
        	console.log(TAG + " ::: deprecated", "pcs.html.setResult(result): Getter 와 setter가 구현된 pcs.html.result()를 사용해 주세요. ");
            this._flag_setResult = true;
            this._result = result;
        },
        "result" : function(result) {
            if(undefined !== result) {
                this._flag_setResult = true;
                this._result = result;
            }
            return this._result;
        },
        "setPageMapping" : function(object_id_by_url) {
            // ex) object_id_by_url = {"page1_id": "page1_url", "page2_id": "page2_url"}
            if($.isPlainObject(object_id_by_url)) {
                this._page_map = object_id_by_url;
            } else {
            	console.log(TAG + " ::: pcs.html.setPageMapping(object_id_by_url) : object_id_by_url 파라메터는 object 타입이어야 합니다.");
            }
        },
        "getPageUrlById" : function(page_id) {
            if("string" !== typeof (page_id)) {
            	console.log(TAG + " ::: pcs.html.getPageUrlById(page_id) : page_id 파라메터는 string 타입이어야 합니다.");
                return undefined;
            }
            var result = this._page_map[page_id];
            if(undefined === result) {
            	console.log(TAG + " ::: pcs.html.getPageUrlById(page_id) : page_id가 '" + page_id + "'인 페이지에 대한 정보가 없습니다. pcs.html.setPageMapping() 함수를 이용하여 페이지를 등록할 수 있습니다. 현재 등록된 page mapping 정보는 다음과 같습니다.", this._page_map);
            }
            return this._base_directory + result;
        },
        "getPageIdByUrl" : function(page_url) {
            if("string" !== typeof (page_url)) {
            	console.log(TAG + " ::: pcs.html.getPageIdByUrl(page_url) : page_url 파라메터는 string 타입이어야 합니다.");
                return undefined;
            }
            var url;
            var each;
            for(each in this._page_map) {
                if(this._page_map.hasOwnProperty(each)) {
                    url = this._page_map[each];
                    if(page_url === url) {
                        return each;
                    }
                }
            }
            console.log(TAG + " ::: pcs.html.getPageIdByUrl(page_url) : page_url이 '" + page_url + "'인 페이지에 대한 정보가 없습니다. pcs.html.setPageMapping() 함수를 이용하여 페이지를 등록할 수 있습니다. 현재 등록된 page mapping 정보는 다음과 같습니다.", this._page_map);
            return undefined;
        },
        "setModel" : function(page_id, data) {
            _setMVC(page_id, "model", data);
        },
        "setView" : function(page_id, data) {
            _setMVC(page_id, "view", data);
        },
        "setController" : function(page_id, data) {
            _setMVC(page_id, "controller", data);
        },
        "getModel" : function(page_id) {
            return _getMVC(page_id, "model");
        },
        "getView" : function(page_id) {
            return _getMVC(page_id, "view");
        },
        "getController" : function(page_id) {
            return _getMVC(page_id, "controller");
        },
        "refresh" : function(restart) {
            if(restart) {
            	console.log(TAG + ":::" +  this._active_page_id + " -> Event::onRestart()");
                $.mobile.activePage.trigger("onRestart");
                return;
            }
            // 첫페이지에서는 새로고침 즉시 수행
            if($.mobile.firstPage.attr("id") === this._active_page_id) {
                location.reload();
            } else {
                //var current_page_url = $.mobile.urlHistory.getActive().pageUrl;
                var current_page_url = urlHistory.getActive().pageUrl;
                this._refresh_data.param = this._param;
                this._refresh_data.page_url = current_page_url;
                this._refresh_data.page_id = this._active_page_id;
                this._refresh_data.is_refresh = true;
                pcs.html.finish();
            }
        }
    };

    $('div[data-role=page], div[data-role=dialog]').live("pagebeforeshow", function(event, data) {
        var $this = $(this);
        var page_id = $(this).attr("id");
        if(undefined !== data.prevPage) {
            this._prev_page_id = data.prevPage.attr("id");
        }
        if(undefined === $.mobile.navigate.history.getNext()) {
        //if(undefined ===  $.mobile.urlHistory.getNext()) {
            pcs.html._result = undefined;
            //log.i(TAG, page_id + " -> Event::onCreate()");
            console.log(TAG + ":::" +  page_id + " -> Event::onCreate()");
            $this.trigger("onCreate");
            console.log(TAG + ":::" +  page_id + " -> Event::onStart()");
            console.log(TAG + " ::: onStart() parameter -> " + pcs.html._param);
            $this.trigger("onStart", [pcs.html._param, this._prev_page_id]);
            pcs.html._refresh_data.is_refresh = true;
            //pcs.html._refresh_data.is_refresh = false;
        } else {
            if(true !== pcs.html._refresh_data.is_refresh) {
            	console.log(TAG + ":::" +  page_id + " -> Event::onRestart()");
            	console.log(TAG + " ::: onRestart() parameter -> " +  pcs.html._result);
            	
            	console.log("이전페이지------->" + window.pcs.html._backtrace_target);
            	console.log("이전페이지------->" + pcs.html._backtrace_target);
            	
                if(null !== window.pcs.html._backtrace_target) {
                	console.log("이전페이지가 존재하냐?에서 있다.......");
                    if($this.attr("id") !== window.pcs.html._backtrace_target) {
                    	console.log("이전페이지가 존재하냐?에서 있다....... if");
                        $("body").hide();
                        $this.trigger("onRestart", [pcs.html._result, this._prev_page_id, true]);
                        window.pcs.html.finish(pcs.html._result);
                        return;
                    } else {
                        window.pcs.html._backtrace_target = null;
                        console.log("이전페이지가 존재하냐?에서 있다....... else");
                        $("body").show();
                    }
                }
                
                var result = pcs.html._result;
                pcs.html._result = undefined;
                $this.trigger("onRestart", [result, this._prev_page_id, false]);
            } else {
                setTimeout(function() {
                    pcs.html.startActivity(pcs.html._refresh_data.page_url, pcs.html._refresh_data.param);
                }, 1);
            }
        }
        pcs.html._active_page_id = page_id;
    });
    $('div[data-role=page], div[data-role=dialog]').live("pagebeforehide", function(event, data) {
        var $this = $(this);
        var page_id = $(this).attr("id");
                
        //if(undefined === $.mobile.urlHistory.getNext()) {
        if(undefined === $.mobile.navigate.history.getNext()) {
            if(true !== pcs.html._refresh_data.is_refresh) {
            	console.log(TAG + ":::" +  page_id + " -> Event::onStop()");
                $this.trigger("onStop");
            }
        } else {
            if(true !== pcs.html._refresh_data.is_refresh) {
            	console.log(TAG + ":::" +  page_id + " -> Event::onDestroy()");
                $this.trigger("onDestroy");
            }
            // 페이지 DOM에서 삭제
            setTimeout(function() {
                $("#" + page_id).die('pagebeforecreate pagecreate pageinit pageremove pagebeforeshow pageshow pagebeforehide pagehide').die('onCreate onStart onRestart onStop onDestroy').remove();
            }, 1);
            
            pcs.html._flag_setResult = false;            
        }
    });
    
    
    /**
     * localstorage
     */
    window.pcs.html.localStorage = (function(){
		if(undefined === window.localStorage) {
            console.log("window.localStorage 를 사용할 수 없습니다.");
            window.localStorage = {};
        }
        /*if(undefined === window.localStorage.pcs) {
            window.localStorage.pcs = "{}";
        }*/
        return {
            "set" : function(key, value) {                
                window.localStorage.setItem(key, value);
            },
            "get" : function(glovalKey, searchkey) {
            	var storageStr = window.localStorage.getItem(glovalKey);            	
            	var storageObj = JSON.parse(storageStr);
            	return storageObj[searchkey];
            	//return window.localStorage.getItem(key);
                //return storage_obj[key];
            },
            "del" : function(key) {
                window.localStorage.removeItem(key);
            }
        };
    }());
}(window.jQuery));
