// function chanageStyle(num, leng){
// 	for(var i = 0; i < leng; i++){
// 		 if(i != num){
// 		 	dots[i].classList.remove('active');
// 		 }else{
// 		 	dots[i].classList.add('active');
// 		 }
// 	}
// }

function moveEle$($dom, $Tarpos, $callback){
	$dom.animate($Tarpos, 300, 'swing', $callback);
}

function moveLeft(dom, picWid, picNum){
	var nowPos = parseInt(dom.css('left'));
	if(- nowPos == picWid * picNum){
		dom.css('left', '0px');
	}

	var Tarpos = parseInt(dom.css('left')) - picWid;
	// if(- Tarpos == picWid * picNum){
	// 	chanageStyle(0, picNum);
	// }else{
	// 	chanageStyle(- Tarpos / picWid, picNum);
	// }
	moveEle$(dom, {left: Tarpos + 'px'}, chanFlag());
}

function moveRight(dom, picWid, picNum){
	var nowPos = parseInt(dom.css('left'));
	if(nowPos == 0){
		dom.css('left', - picNum *picWid + 'px');
		// dom.style.left = - picNum *picWid + 'px';
		// chanageStyle(0, picNum);
	}
	// var Tarpos = dom.offsetLeft + picWid;
	var Tarpos = parseInt(dom.css('left')) + picWid;
	// if(- Tarpos == picWid * picNum){
	// 	chanageStyle(0, picNum);
	// }else{
	// 	chanageStyle(- Tarpos / picWid, picNum);
	// }
	// moveEle(dom, Tarpos, chanFlag());
	moveEle$(dom, {left: Tarpos + 'px'}, chanFlag());
}

function dotMove(dom, picWid, index, picNum){
	var Tarpos = - index * picWid;
	// chanageStyle(index, picNum);
	// moveEle(dom, Tarpos, chanFlag());	
	moveEle$(dom, {left: Tarpos + 'px'}, chanFlag());
}

function chanFlag(){
	return function(){
		flag = true;
	}
}


// function moveEle(dom, tarPos, callback){
// 	clearInterval(dom.timer);
// 	var mSpeed;
// 	var oriPos;
// 	dom.timer = setInterval(function(){
// 		oriPos = parseInt(dom.offsetLeft);
// 		mSpeed = (tarPos - oriPos) / 10;
// 		mSpeed = mSpeed > 0 ? Math.ceil(mSpeed) : Math.floor(mSpeed);
// 		dom.style.left = oriPos + mSpeed + 'px';
// 		if(Math.floor(Math.abs(tarPos - oriPos)) == 0){
// 			callback();
// 			clearInterval(dom.timer);
// 		}	
// 	}, 10);
// }