//= require_tree .

$().ready(function() {
  resetBodyHeight();
  $(window).resize(function() {
    resetBodyHeight();
  });
  function resetBodyHeight(){
    var bodyHeight = $('body').height();
    var windowHeight = $(window).height();
    if(bodyHeight<windowHeight){
      $('.footer').addClass('fixed-bottom');
    }else{
      $('.footer').removeClass('fixed-bottom');
    }
  }




});