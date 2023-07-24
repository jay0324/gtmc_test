$(function(){
    if ($('#development').length > 0) {
        var $target = $('#development');
        var trigger_development = false;
        $("#wrapwrap").on('scroll', () => {
            var pos = $("#development_section").offset().top - $(window).height();
            if (pos < 0 && !trigger_development) {
                gsap.timeline()
                .from($target, {
                    opacity: 0
                })
                .from($("#center", $target), {
                    opacity: 0
                })
                .from($("#top_x5F_line", $target), {
                    opacity: 0
                })
                .from($("#word_x5F_top", $target), {
                    opacity: 0
                })
                .from($("#left_x5F_line", $target), {
                    opacity: 0
                })
                .from($("#word_x5F_left", $target), {
                    opacity: 0
                })
                .from($("#right_x5F_line_1_", $target), {
                    opacity: 0
                })
                .from($("#word_x5F_right", $target), {
                    opacity: 0
                })
                .from($("#bottom_x5F_line", $target), {
                    opacity: 0
                })
                .from($("#circle", $target), {
                    opacity: 0
                })
                .from($("#arraw", $target), {
                    opacity: 0
                }, 'rotate')
                .call(() => {
                    $("#arraw", $target).addClass('rotate');
                }, null, 'rotate')

                trigger_development = true;
            }
        });
    }
})