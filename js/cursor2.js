
$(function(){
  var $follow = $('.circle-follow');

  function moveCircle(e) {
      gsap.to($follow, 0.7, {
        x: e.clientX,
        y: e.clientY
    });  
  }

  $("body").on('mousemove', moveCircle);
});