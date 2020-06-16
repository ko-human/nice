var uiCommon = {
  datepickerOption : {
      // orientation: "bottom right",
      // autoclose: true,
      // templates: {
      //     leftArrow: '<i class="fa fa-long-arrow-left"></i>',
      //     rightArrow: '<i class="fa fa-long-arrow-right"></i>'
      // },
      // pickerPosition: "bottom-left",
      // weekStart: 1,
      // todayBtn:  1,
      autoclose: 1,
      // todayHighlight: 1,
      // startView: 2,
      forceParse: 0,
      showMeridian: 1,
      daysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  }
};

// 삭제예정
$(function(){
  // datepicker
  /*
  $( ".ip_date input" ).datepicker({
    showOn: "button",
    buttonImage: "../../images/ip_date.png",
    buttonImageOnly: true,
    buttonText: "Select date",
    dateFormat: "yy-mm-dd",
    onSelect : function(){

      if($(this).siblings("i").length>0) {
        $(this).siblings("i").addClass("on");
      }

    },
    beforeShow : function(input, inst) {
    }
  });
  */

});


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
