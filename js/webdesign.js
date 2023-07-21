$(function(){
    if ($('#webdesign').length > 0) {
        var $target = $('#webdesign');
        gsap.timeline({
            scrollTrigger: {
                trigger: $("#webdesign_section"),
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
        .from($("#top", $target), {
            opacity: 0
        })
        .from($("#left", $target), {
            opacity: 0
        })
        .from($("#right", $target), {
            opacity: 0
        })
        
    }
})