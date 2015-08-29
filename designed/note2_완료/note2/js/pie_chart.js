var cst = {
    values:[40,30,10,10,5,5],
    f_colors:["#ee6995","#25c4f8","#85d039","#ffcf41", "#cb76cd","#7b7676"],
    s_color:"rgb(255,255,255)",
    s_width:3,
    center:{x:67,y:67},
    radius:64
};
var ctx;

(function(){
    var canvas = document.getElementById('canvas');
    if ( ! canvas || ! canvas.getContext ) { return false; }
    canvas.width = 134;
    canvas.height = 134;
    ctx = canvas.getContext('2d');
    draw(ctx,canvas);
    
    document.getElementById('form').onkeyup = function(){
	for(var i=0;i<cst.values.length;i++){
	    cst.values[i] = parseFloat(document.getElementById('text'+parseFloat(i+1)).value);
	    if(isNaN(cst.values[i])){
		cst.values[i] = 0;
	    }
	}
	draw(ctx,canvas);
    };
})();


function draw(ctx,canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    var sum = 0;
    for(var i=0;i<cst.values.length;i++){
	sum += cst.values[i];
    }
    if(sum>0){
	var drawFan = createDrawFan();
	for(var j=cst.values.length-1;j>=0;j--){
	    if(cst.values[j] > 0){
	       drawFan(ctx,360*cst.values[j]/sum,cst.f_colors[j]);
	    }
	}
    
	drawLine(ctx,90 * Math.PI / 180);
	drawCircle(ctx);
    }
}

function createDrawFan(){
  var begin = 0;
    return function(ctx,end,color){
	with(ctx){
	    var begin_rad = (90+begin) * Math.PI / 180;
	    var end_rad = (90+begin+end) * Math.PI / 180;
	    
	    fillFan(ctx,begin_rad,end_rad,color);
	    drawLine(ctx,begin_rad);
        }
	begin += end;
    };   
}

function fillFan(ctx,begin_rad,end_rad,color){
    with(ctx){
	beginPath();
	moveTo(cst.center.x,cst.center.y);
	arc(cst.center.x, cst.center.y, cst.radius, -begin_rad, -end_rad, true);
	closePath();
	fillStyle = color;
	fill();
    }    
}

function drawLine(ctx,rad){
    with(ctx){
	beginPath();
	moveTo(cst.center.x,cst.center.y);	
	lineTo(cst.center.x+cst.radius*Math.cos(-rad),cst.center.y+cst.radius*Math.sin(-rad));
	strokeStyle = cst.s_color;
	lineWidth = cst.s_width;
	lineJoin = "round";
	closePath();
	// stroke();
    }
}

function drawCircle(ctx){
    with(ctx){
	beginPath();
	arc(cst.center.x, cst.center.y, cst.radius, 0, 360 * Math.PI / 180, true);
	strokeStyle = cst.s_color;
	lineWidth = cst.s_width;
	stroke();
    }
}