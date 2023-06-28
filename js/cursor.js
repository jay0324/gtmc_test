
$(function(){
  var $circle = $('.circle'),
      $follow = $('.circle-follow');

  function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
        x: e.clientX,
        y: e.clientY
    });
      TweenLite.to($follow, 0.7, {
        x: e.clientX,
        y: e.clientY
    });  
  }

  $(".scroll-content").on('mousemove', moveCircle);
});