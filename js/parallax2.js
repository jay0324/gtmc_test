$(function(){
    gsap.utils.toArray(".content-wrap").forEach((section, i) => {
        gsap.fromTo(section, {
            'clip-path': 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
        }, {
            'clip-path': 'polygon(0 0, 100% 0%, 100% 0%, 0% 0%)',
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: () => i ? "top bottom" : "top top", 
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
                markers: true
            }
        });
      });
})