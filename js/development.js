$(function(){
    if ($('#development').length > 0) {
        var $target = $('#development');
        var trigger_development = false;
        var circle_mask = document.getElementById('circle_mask_main');
        var circle_mask_length = circle_mask.getTotalLength();
        $('#circle_mask_main').css({
            'stroke-dasharray': circle_mask_length,
            'stroke-dashoffset': circle_mask_length,
        });
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
                .from($("#center_x5F_1", $target), {
                    opacity: 0
                })
                .from($("#center_x5F_2", $target), {
                    opacity: 0,
                    delay: 0.5
                })
                .from($("#center_x5F_3", $target), {
                    opacity: 0,
                    delay: 0.5
                })
                .from($("#top_x5F_line_x5F_body", $target), {
                    opacity: 0,
                    delay: 0.5,
                    transform: 'scaleY(0)',
                    'transform-origin': 'center'
                })
                .from($("#top_x5F_dot", $target), {
                    opacity: 0,
                })
                .from($("#word_x5F_top", $target), {
                    opacity: 0
                })
                .from($("#left_x5F_line_x5F_body", $target), {
                    opacity: 0,
                    transform: 'scaleX(0)',
                    'transform-origin': 'center'
                })
                .from($("#left_x5F_dot", $target), {
                    opacity: 0
                })
                .from($("#word_x5F_left", $target), {
                    opacity: 0,
                })
                .from($("#right_x5F_line_x5F_body", $target), {
                    opacity: 0,
                    transform: 'scaleX(0)',
                    'transform-origin': 'center'
                })
                .from($("#right_x5F_dot", $target), {
                    opacity: 0
                })
                .from($("#word_x5F_right", $target), {
                    opacity: 0
                })
                .from($("#bottom_x5F_line", $target), {
                    opacity: 0,
                    transform: 'scaleY(0)',
                    'transform-origin': 'center'
                })
                .to($("#circle_mask_main", $target), {
                    'stroke-dashoffset': 0,
                    duration: 5
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