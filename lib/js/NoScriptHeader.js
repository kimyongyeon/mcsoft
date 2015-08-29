( function() {
    // 현재 directory depth 구하기
    var arrHead = document.getElementsByTagName("script");
    var i;
    var size = arrHead.length;
    var src;
    var depth = 0;
    for( i = 0; i < size; ++i) {
        src = arrHead[i].getAttribute("src");
        if(null !== src.match("header.js")) {
            var regex = /\.\./ig;
            var regResult = regex.exec(src);
            if(regResult) {
                depth = regResult.length;
            }
        }
    }
    
    var sourceDir = "";
    for( i = 0; i < depth; ++i) {
    	sourceDir += "../../";
    }

    document.write('<link rel="stylesheet" href="../../lib/css/nostyle.css" />');
    document.write('<link rel="stylesheet" href="' + sourceDir + 'lib/css/jquery.mobile.structure-1.4.2.css" />');    
    document.write('<script src="' + sourceDir + 'lib/js/jquery-1.7.1.min.js"></script>');    
    document.write('<script src="' + sourceDir + 'lib/js/jquery.mobile-1.4.2.js"></script>');        
    
}());
