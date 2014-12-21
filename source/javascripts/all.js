//= require_tree .

$().ready(function() {
  resetBodyHeight();
  $(window).resize(function() {
    resetBodyHeight();
  });
  function resetBodyHeight(){
    var bodyHeight = $('body').height();
    console.log(bodyHeight)
    var windowHeight = $(window).height();
    console.log(windowHeight)
    if(bodyHeight<windowHeight){
      $('footer').addClass('fixed-bottom');
    }else{
      $('footer').removeClass('fixed-bottom');
    }
  }


  $('#menu').click(function() {
    $('nav').toggleClass('is_active');
  });

});