var custServiceBtn = $('.custServiceBtn:eq(0)');
var custService = $('.custService:eq(0)');
custServiceBtn.click(function (){
    custService.fadeIn();
});
custService.click(function (){
    custService.fadeOut();
    // console.log('this:',this);
});