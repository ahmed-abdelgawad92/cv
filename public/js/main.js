$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('#logo').addClass('small-logo');
    }else{
      $('#logo').removeClass('small-logo');

    }
  });
});
