$(function(){
    if ($('#development').length > 0) {
        var $target = $('#development');
        gsap.timeline({
            scrollTrigger: {
                trigger: $("#development_section"),
                start: "top center",
                end: "top top",
            }
        })
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
    }
})