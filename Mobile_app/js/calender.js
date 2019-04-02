var tBodyDom = $('#TdodyDom');
var leftBtn = $('.leftbtn:eq(0)'),
    rightBtn = $('.rightbtn:eq(0)');
var titleDoms = $('.item span'); 
//当前日期
var nowTimeNum = {},
    nowDateNum = new Date();
    nowTimeNum.dateObj = nowDateNum;
    nowTimeNum.year = nowDateNum.getFullYear();
    nowTimeNum.month = nowDateNum.getMonth() + 1;
    nowTimeNum.date = nowDateNum.getDate();
// 判断闰年
function isLeapYear (month) {
    if(month % 4 === 0 && month % 100 !== 0) {
        return true;
    }else {
        if (month % 400 === 0) {
            return true;
        }else {
            return false;
        }
    }
}
//判断每个月的天数
function getMonDateNum(monthNum){
    var dayNum; //记录一个月多少天
    if(monthNum === 1 || monthNum === 3 || monthNum === 5 || monthNum === 7 || monthNum === 8 || monthNum === 10 || monthNum === 12){
        dayNum = 31;
    }else if(monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11){
        dayNum = 30;
    }else if(monthNum === 2 && isLeapYear(monthNum) ) {
        dayNum = 29;
    }else{
        dayNum = 28;
    }
    return dayNum;
}
function createDay (oTd, index, dayNum, nowMonth, maxnum, minnum) {
    for ( var i = 0; i < dayNum; i++) {
        oTd.eq(i + index).text(i + 1);//创建的日期
        if((i + 1) === nowTimeNum.date && nowMonth === nowTimeNum.month){ //当前日期变红
            oTd.eq(i + index).addClass('bluestyle');
        }
        if((i + 1) <= maxnum && (i + 1) >= minnum){
            oTd.eq(i + index).addClass('redback');
        }
    }
}
function createTable(tbodyDom, dateObj){
    titleDoms.eq(0).text(dateObj.year);
    titleDoms.eq(1).text(dateObj.month);
    // console.log('当前年:', );
    for(var i = 0; i < 6; i++){
        var tbodyTr = $('<tr/>');
        for(var j = 0; j < 7; j++) {
            var tbodyTd = $('<td/>');
            tbodyTr.append(tbodyTd);
        }
        tbodyDom.append(tbodyTr);
    }
    //判断每个月的天数
    var dayNum = getMonDateNum(dateObj.month);
    var tdDoms = tbodyDom.find('td');//$("#TdodyDom td");
    var nowMonth = dateObj.month;
    dateObj.dateObj.setFullYear(dateObj.year);  // 设置当前日期
    dateObj.dateObj.setMonth(dateObj.month - 1); //月份要减一
    dateObj.dateObj.setDate(1);   //当前月份第一天   
    switch(dateObj.dateObj.getDay()){   //获取当前月份第一天是星期几  前面空几个格
        case 0:
                createDay(tdDoms, 6, dayNum, nowMonth, 20, 3);
                break;
        case 1:
                createDay(tdDoms, 0, dayNum, nowMonth, 20, 3);
                break;
        case 2:
                createDay(tdDoms, 1, dayNum, nowMonth, 20, 3);
                break;
        case 3:
                createDay(tdDoms, 2, dayNum, nowMonth, 20, 3);
                break;
        case 4:
                createDay(tdDoms, 3, dayNum, nowMonth, 20, 3);
                break;
        case 5:
                createDay(tdDoms, 4, dayNum, nowMonth, 20, 3);
                break;
        case 6:
                createDay(tdDoms, 5, dayNum, nowMonth, 20, 3);
                break;
    }
}
function bindEvent(){
    leftBtn.click(turnPage);
    rightBtn.click(turnPage);
}
function turnPage(e){
    var nowJqDomFlag = $(this).hasClass("leftbtn");
    var preMonth = parseInt(titleDoms.eq(1).text());
    var preYear = parseInt(titleDoms.eq(0).text());
    tBodyDom.html('');
    var nowTimeNum = {};
        nowTimeNum.dateObj = new Date();
    //点击左翻页
    if(nowJqDomFlag){
        if(preMonth === 1){
            nowTimeNum.year = preYear - 1;
            nowTimeNum.month = 12;
            createTable(tBodyDom, nowTimeNum);                    
        }else{
            nowTimeNum.year = preYear;
            nowTimeNum.month = preMonth - 1;
            createTable(tBodyDom, nowTimeNum);      
        }
    }else{
    //点击右翻页
        if(preMonth === 12){
            nowTimeNum.year = preYear + 1;
            nowTimeNum.month = 1;
            createTable(tBodyDom, nowTimeNum);                    
        }else{
            nowTimeNum.year = preYear;
            nowTimeNum.month = preMonth + 1;
            createTable(tBodyDom, nowTimeNum);      
        }	
    }
}
createTable(tBodyDom, nowTimeNum);
bindEvent();