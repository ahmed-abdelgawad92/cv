$(document).ready(function(){
  // Das ist füt mehrere img vorzuladen
  // $.fn.preload = function() {
  //   this.each(function(){
  //       $('<img />')[0].src = this;
  //   });
  // }
  // $(['img1.jpg','img2.jpg','img3.jpg']).preload();
  $('<img src="img/logo_icon.png"/>');
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('#logo').addClass('small-logo');
      $('#logo').attr('src','img/logo_icon.png');
    }else{
      $('#logo').removeClass('small-logo');
      $('#logo').attr('src','img/logo.png');
    }
  });
});
