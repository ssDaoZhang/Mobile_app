var picWarp = $('.rotatImg:eq(0)');
var picBox = $('.rotatImg:eq(0) ul:eq(0)');
// var leftBtn = $('.warpper:eq(0) .leftBtn:eq(0)');
// var rightBtn = $('.warpper:eq(0) .rightBtn:eq(0)');
// var dots =  $('.warpper:eq(0) .dotBox:eq(0) li');

var picWidth = parseInt(picBox.find('li:eq(0)').css('width'))
//图片向左动 按钮向右翻
//var dirleft = -1;
//图片向右动 按钮向左翻
// var diright = 1;

//首尾算一张图 实际看到几张图
var picNumber = 3;
var flag = true;

//触屏开始点的x轴位置
var touchStartX = '';
//触屏移动时的x轴位置
var touchMoveX = '';

function autoMove(dom, picWid, pNum){
	clearTimeout(dom.timel);
	dom.timel = setTimeout(function(){
		 moveLeft(dom, picWid, pNum);
		 autoMove(dom, picWid, pNum);
	},3000);
	
}

autoMove(picBox, picWidth, picNumber);

picWarp.on('touchstart',function(e){
	touchStartX = e.touches[0].clientX;
	clearInterval(picBox.timel);
	// leftBtn.animate({left:'10px'}, 20, 'swing');
	// rightBtn.animate({right:'10px'}, 20, 'swing');
	// console.log('触摸事件：', touchStartX);
})

picWarp.on('touchend', function(){
	autoMove(picBox, picWidth, picNumber);
	// leftBtn.animate({left:'-50px'}, 20, 'swing');
	// rightBtn.animate({right:'-50px'}, 20, 'swing');
})
picWarp.on('touchmove', function(e){
	if(flag){
		flag = false;
		touchMoveX = e.touches[0].clientX;
		if(touchMoveX >  touchStartX){
			moveRight(picBox, picWidth, picNumber);
			// console.log('右划：', touchMoveX >  touchStartX);
		}else{
			moveLeft(picBox, picWidth, picNumber);
			// console.log('左划：', touchMoveX >  touchStartX);
		}
	}
	// console.log('移动事件：', e.touches[0]);
})

// picWarp.swipeRight(function(){
// 	if(flag){
// 		flag = false;
// 		moveRight(picBox, picWidth, picNumber);
// 	}
// })

// picWarp.swipeLeft(function(){
// 	if(flag){
// 		flag = false;
// 		moveLeft(picBox, picWidth, picNumber);
// 	}
// })


// for(var i = 0; i < picNumber; i++){
// 	(function(index){
// 		dots.eq(index).click(function(){
// 			if(flag){
// 				flag = false;		
// 				dotMove(picBox, picWidth, index, picNumber);
// 			}
// 		}); 
// 	})(i);
// }

// picWarp.onmouseenter = function(){
// 	clearInterval(picBox.timel);
// }

// picWarp.onmouseleave = function(){
// 	autoMove(picBox, picWidth, picNumber);
// }

// leftBtn.onclick = function(){
// 	if(flag){
// 		flag = false;
// 		moveRight(picBox, picWidth, picNumber);
// 	}
// }

// rightBtn.onclick = function(){
// 	if(flag){
// 		flag = false;
// 		moveLeft(picBox, picWidth, picNumber);
// 	}
// }

// for(var i = 0; i < picNumber; i++){
// 	(function(index){
// 		dots[index].onclick = function(){
// 			if(flag){
// 				flag = false;		
// 				dotMove(picBox, picWidth, index, picNumber);
// 			}
// 		}
// 	})(i);
// }

