
( function() {

    // 의존성 체크: 반드시 jQuery 가 로드되어 있어야 한다.
    if(undefined === window.jQuery) {
        alert('jQuery 라이브러리가 로드되어 있어야 합니다.');
    }

    if(undefined == window.pcs) {
        window.pcs = {};
    }

    $.fn.pcs_list = function(options, cmd_param) {
        var opts = $.extend(true, $.fn.pcs_list.options, options);
        return this.each(function() {
            var sel = $(this);
            var size = 0;
            sel.data('size', size);

            if('string' === typeof (options)) {// command 모드
                if('list' != sel.data('MD_type')) {
                    console.log("pcs.list ::: list를 먼저 초기화 하고 사용해 주세요.");
                    return;
                }
                switch (options) {
                    case 'addItems':
                        console.log("pcs.list ::: pcs_list::addItem() start");
                        var max = cmd_param.length;
                        var container = sel.data('MD_itemContainer');
                        var adapter_param = sel.data('MD_param')(container);
                        var fn_adapter = sel.data('MD_adapter');
                        var result = '';
                        for(var i = 0; i < max; ++i) {
                            var ret = fn_adapter(container, cmd_param[i], adapter_param);
                            if(false !== ret) {
                                result += container[0].innerHTML;
                                size++;
                            }
                        }
                        sel.data('size', size);
                        $(result).appendTo(sel);
                        console.log("pcs.list ::: pcs_list::addItem() finish");
                        var fn_finish = sel.data('MD_onAddsFinish');
                        if($.isFunction(fn_finish)) {
                            console.log("pcs.list ::: pcs_list::onAddsFinish() start");
                            fn_finish(sel);
                            console.log("pcs.list ::: pcs_list::onAddsFinish() finish");
                        }
                        break;
                    default:
                        break;
                }
            } else {// builder 모드
                if(opts.template) {
                    // 사용자 정의 item list.
                    sel.data('MD_itemContainer', $(opts.template));
                    if(opts.adapter) {
                        sel.data('MD_adapter', opts.adapter);
                    }
                    if(opts.onAddsFinish) {
                        sel.data('MD_onAddsFinish', opts.onAddsFinish);
                    }
                    if(opts.param) {
                        sel.data('MD_param', opts.param);
                    }
                    sel.data('MD_type', 'list');
                } else {
                    alert("template container를 지정해 주세요.");
                }
            }
        });
    };
    // 현재는 사용하지 않는 옵션
    $.fn.pcs_list.options = {
        'param' : function() {
            return {};
        }
    };
}());
