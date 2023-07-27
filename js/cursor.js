$(function(){
  // cursor
  $("#wrapwrap").append('<div class="circle-follow"></div>');
  $("body").on('mousemove', function moveCircle(e) {
      gsap.to($('.circle-follow'), 0.7, {
          x: e.clientX,
          y: e.clientY
      });  
  });
});