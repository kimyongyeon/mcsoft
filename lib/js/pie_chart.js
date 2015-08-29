var cst = {
    values:[10,20,20,30,10,10,20,120],
    f_colors:["rgb(255,204,0)","rgb(204,153,0)","rgb(153,102,0)","rgb(102,51,0)", "rgb(51,0,0)","rgb(102,0,0)","rgb(153,0,0)","rgb(204,0,0)"],
    s_color:"rgb(0,0,0)",
    s_width:1,
    center:{x:110,y:110},
    radius:100
};
var ctx;

(function(){
    var canvas = document.getElementById('world');
    if ( ! canvas || ! canvas.getContext ) { return false; }
    canvas.width = 220;
    canvas.height = 220;
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
	stroke();
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