function countDown(times, jQDom){
  var timer=null;
  timer=setInterval(function(){
    var day=0,
      hour=0,
      minute=0,
      second=0;//时间默认值
    if(times > 0){
      day = Math.floor(times / (60 * 60 * 24));
      hour = Math.floor(times / (60 * 60)) - (day * 24);
      minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
      second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (day <= 9) day = '0' + day;
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    //
    jQDom.text(day+"天 "+hour+"小时 "+minute+"分钟 "+second+"秒");
    times--;
  },1000);
  if(times<=0){
    clearInterval(timer);
  }
}

// var date = new Date();
// //设置某年(Number:年数的四位数字) 
// //    某月(Number:0-11) 
// //    某天(Number:1-31)
// date.setFullYear(2018,11,30);
// //设置某时(Number:0-23)
// //    某分(Number:0-59)
// //    某秒(Number:0-59)
// //    某微妙(Number:0-999)
// date.setHours(23,0,0,0);
// var date0 = new Date();
// var times = (date.getTime() - date0.getTime())/1000;
// console.log('当前时间：',  date0.getFullYear() + '年 ' + 
//                           (date0.getMonth() + 1) + '月 ' + 
//                           date0.getDate() + '日 ' + 
//                           date0.getHours() + '时 ' +  
//                           date0.getMinutes() + '分 ' +  
//                           date0.getSeconds() + '秒' 
//                           );
// console.log('目标时间：', date.getFullYear() + '年 ' + 
//                           (date.getMonth() + 1) + '月 ' + 
//                           date.getDate() + '日 ' + 
//                           date.getHours() + '时 ' +  
//                           date.getMinutes() + '分 ' +  
//                           date.getSeconds() + '秒' 
//                           );
// countDown(times);