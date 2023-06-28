
$(function(){
  // var $circle = $('.circle');
  var $follow = $('.circle-follow');

  function moveCircle(e) {
    // gsap.to($circle, 0.3, {
    //     x: e.clientX,
    //     y: e.clientY
    // });
      gsap.to($follow, 0.7, {
        x: e.clientX,
        y: e.clientY
    });  
  }

  $(".scroll-content").on('mousemove', moveCircle);
});