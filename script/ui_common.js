// calender
var uiCommon = {
  datepickerOption : {
      autoclose: 1,
      forceParse: 0,
      showMeridian: 1,
  }
};

(function($){
 // 달력 아이콘
  $.fn.icoTrigger = function() {
      this.each(function(i){
          $(".ip_date").find('.ico_trig').on('click', function(){
              $(this).siblings('input').trigger('focus');
          });
      });
  };

  // 파일명 셋팅
  $.fn.fileReady = function() {
    this.each(function(i){
      $el = $(this);
      $el.find("input[type=file]").on("change", function(e){
        var val = $(this).val();
        $(this).parent().prev().val(val);
      });
    });
  };

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
