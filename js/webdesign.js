$(function(){
    if ($('#webdesign').length > 0) {
        var $target = $('#webdesign');
        var trigger_webdesign = false;
        $("#wrapwrap").on('scroll', () => {
            var pos = $("#webdesign_section").offset().top - $(window).height();
            if (pos < 0 && !trigger_webdesign) {
                gsap.timeline()
                .from($target, {
                    opacity: 0
                })
                .from($("#center", $target), {
                    opacity: 0
                })
                .from($("#top", $target), {
                    opacity: 0
                })
                .from($("#left", $target), {
                    opacity: 0
                })
                .from($("#right", $target), {
                    opacity: 0
                })

                trigger_webdesign = true
            }
        });
    }
})