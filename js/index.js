$(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop:true,
        autoplay:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

    // color change by dark and light area
    let $logo = $(".logo-change");
    let $text = $(".text-change");
    let $darkSection = $(".dark-logo-section");
    let $lightSection = $(".light-logo-section");

    $darkSection.each(function(){
        gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "top top",
                end: "top top",
                scrub: 1,
            }
        }).to($logo, {
            fill: "#11274a"
        }).to($text, {
            color: "#11274a"
        });
    });

    $lightSection.each(function(){
        gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "top top",
                end: "top top",
                scrub: 1,
            }
        }).to($logo, {
            fill: "#ffffff"
        }).to($text, {
            color: "#ffffff"
        });
    });

    // each image efx
    $(".slide-in").each(function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                scroller: '.slide-in-wrapper',
                start: "top bottom",
                ease: "power4.out",
                markers: 0
            }
        }).set($(this), {
            x: -50,
        })
        .to($(this), {
            x: 0,
            duration: 2,
            ease: "power4.out"
        })
    });

    // $(window).on('load resize', function () {
    //     if ($(window).width() <= 900) {
    //         $(".img-efx").each(function () {
    //             gsap.timeline({
    //                 scrollTrigger: {
    //                     trigger: this,
    //                     start: "top bottom",
    //                     ease: "none",
    //                 }
    //             }).set($(this), {
    //                 x: '-50px',
    //             }).to($(this), {
    //                 x: 0,
    //                 duration: 1,
    //                 ease: "none"
    //             })
    //         });
    //     }
    // });
    
    // let lightLogo = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: $(".light-logo-section"),
    //         start: "top top",
    //         end: "top top",
    //         scrub: 1,
    //         markers: 1
    //     }
    // });
    // darkLogo.to(logoVoyage, {
    //     fill: "#11274a"
    // });
    // lightLogo.to(logoVoyage, {
    //     fill: "#ffffff"
    // });


    // let lines = '';
    // for(let i=0;i<20;i++){
    //     lines += `<polygon class="shape top top_line_${i}" points="0 0, 1 0, 1 1000, 0 1000"/>`;
    //     lines += `<polygon class="shape bottom bottom_line_${i}" points="0 0, 1 0, 1 1000, 0 1000"/>`;
    // }
    // lines += `<polygon class="mask top" points="0 0, 500 0, 500 1000, 0 1000"/>
    // <polygon class="mask bottom" points="0 0, 500 0, 500 1000, 0 1000"/>
    // <polygon class="triangle triangle-1" points="0 0, 1 0, 1 1000, 0 1000"/>
    // <polygon class="triangle triangle-2" points="0 0, 1 0, 1 1000, 0 1000"/>
    // <polygon class="triangle triangle-3" points="0 0, 1 0, 1 1000, 0 1000"/>`;
    // $("#myClip").html(lines);

    
})