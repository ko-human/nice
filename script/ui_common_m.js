var uiCommon = {
  checkOS : function() {
    var varUA = navigator.userAgent.toLowerCase(); //userAgent
    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }
  },
  datepickerOption : {
    showOn: "button",
    buttonImage: "../../images/ip_date.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "yy-mm-dd"
  }
};


(function($){

  // 텍스트삭제
  $.fn.inputTextFocus = function() {
    this.each(function(i){
      var $el = $(this);
      var $ip = $el.find(".ip_txt");
      valCheck($ip.val());
      $ip.on("change keyup paste", function(e){
        var val = $(this).val();
        valCheck(val);
      });
      $el.find(".btn_txt_del").on("click", function(e){
        $ip.val("");
        $el.removeClass("focus");
        e.preventDefault();
      });
      function valCheck(val){
        val == "" ? $el.removeClass("focus") : $el.addClass("focus");
      }
    });

  };


})(jQuery);

function scrollTop(){
    $("body").append("<a href=\"#none\" id=\"btnTop\" class=\"btn_top\">위로가기</a>");

    $(window).on('scroll', function () {
       var scT = $(this).scrollTop();
       if (scT > 0) {
          $("#btnTop").fadeIn("fast");
       } else {
          $("#btnTop").fadeOut("slow");
       }
   })

   $('.btn_top').on('click', function(){
       moveTop();
   });

    // MOVE TO TOP
    function moveTop(){
        moveScroll(0);
    }

    function moveScroll(scroll){
        $("html, body").stop(true,true).animate({
            "scrollTop":scroll
        },500);
    }
}
// 터치 스와이프
// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);
//
// var xDown = null;
// var yDown = null;
//
// function getTouches(evt) {
//   return evt.touches ||             // browser API
//          evt.originalEvent.touches; // jQuery
// }
//
// function handleTouchStart(evt) {
//     const firstTouch = getTouches(evt)[0];
//     xDown = firstTouch.clientX;
//     yDown = firstTouch.clientY;
// };
//
// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }
//
//     var xUp = evt.touches[0].clientX;
//     var yUp = evt.touches[0].clientY;
//
//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
//
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
//         if ( xDiff > 0 ) {
//             /* left */
//         } else {
//             /* right */
//         }
//     } else {
//         if ( yDiff > 0 ) {
//            $(".quick_wrap").addClass("on");
//         } else {
//             $(".quick_wrap").removeClass("on");
//         }
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;
// };
