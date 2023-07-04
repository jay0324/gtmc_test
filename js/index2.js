$(function(){
    //FirstContent swiper
    var mySwiper = new Swiper(".mySwiper", {
        speed: 1500,
        slidesPerView: "auto",
        simulateTouch: true,
        shortSwipes: true,
        freeMode:{
            enabled: true,
            sticky: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //pager切換
    //把page的位置先存好
    const pannel_offset = [];
    const pannel_offset_trigger = [];
    $("#pager button").each(function(){
        let index = $(this).index();
        let target = $(this).data('target');
        let trigger = $(target).offset().top + (($(window).height()*index) + ($(window).height()*0.5) + 5);
        let top = $(target).offset().top + (($(window).height()*(index+1)) + ($(window).height()*0.5));
        pannel_offset.push(top);
        pannel_offset_trigger.push(trigger);
    })

    //點擊事件，定位至存好的資料
    $("#pager button").on('click', function(){
        let index = $(this).index();
        gsap.to(window, {scrollTo: pannel_offset[index]})
        $('#pager button').removeClass('active');
        $(this).addClass('active');
    });

    //捲動事件，定位至存好的資料
    $(window).on('scroll', function(e){
        let dod = pannel_offset_trigger.filter(item => $(this).scrollTop() > item);
        let end = pannel_offset[pannel_offset.length-1] + $(window).height();
        $('#pager button').removeClass('active');
        if (dod.length > 0 && $(this).scrollTop() < end){
            $(`#pager button:nth-child(${dod.length})`).addClass('active');
        }
        // console.log(bodyScrollBar.scrollTop, end);
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
});

// case 
$(function(){
    //case Swiper
    var caseSwiper = new Swiper(".caseSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop:true,
        autoplay:false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

    //當前打開的視窗
    var currentCoverBody, 
    originalWidth,
    slide, 
    $slide;

    //圖形轉換
    var transFrom = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
    var transTo = 'polygon(100% 0, 0 13%, 27% 57%, 53% 100%)';

    //trans-out
    $(".close-btn").on('click', function(e){
        e.preventDefault();
        slide = $(this).data('target');
        $slide = $(slide);

        //轉場動畫
        gsap.timeline()
        .to($slide, {scrollTo: 0},'bk2top')
        .to($slide, {
            'overflow-y': 'hidden'
        },'bk2top')
        .to($(".popup-content",$slide), {
            'display':'block',
            'top': '100%'
        })
        .to($(".popup-content",$slide), {
            duration: 1,
            'top': '100%'
        })
        .to($(".popup-content",$slide), {
            'display':'none',
            'height': '0',
            'width': '0',
        },'s3')
        .to($slide, {
            'width': '300px',
            'height': '300px',
            'clip-path': transTo
        },'s3')
        .to($slide, {
            duration: 0.5,
            'clip-path': transTo
        })
        .to($(".zoom-cover", $slide), {
            'height': '100%',
        },'s2')
        .to($(".caseSwiper"), {
            'width': '80%',
            'height': '70vh',
            'right': '20px',
            'bottom':'10%',
        },'s2')
        .to($slide, {
            duration: 0.8,
            'clip-path': transTo,
        })
        .to($slide, {
            'display':'flex',
            'clip-path': transFrom,
            'z-index': '1',
            'width': originalWidth,
            'height': '100%',
        },'s1')
        .to($slide, {
            'position':'relative',
            'left':'auto',
            'top': 'auto',
        },'s1')
        .to($(".caseSwiper .swiper-slide:not("+slide+")"), {
            'opacity': 1
        },'s1')
        .to($(".content", $slide), {
            duration: 0.5,
            'opacity': 0
        })
        .to($(".content", $slide), {
            'opacity': 1
        })
        .call(function(){
            caseSwiper.enable();
        })
        .to('body,html', {
            'overflow-y': 'auto'
        })
        .to('#navBar', {
            'top': 0
        },'hideNav')
        .to('#pager', {
            'left': 0
        },'hideNav')
    });

    //trans-in
    $(".cover-item").on('click', function(e){
        e.preventDefault();
        slide = $(this).data('target');
        $slide = $(slide);
        originalWidth = $slide.width();
        transform = $slide.css('transform');

        //停止swiper
        caseSwiper.disable();

        //進行轉場動畫
        gsap.timeline()
        .to('body,html', {
            'overflow-y': 'hidden'
        })
        .to('#navBar', {
            'top': -200
        },'hideNav')
        .to('#pager', {
            'left': -200
        },'hideNav')
        .to(window, {scrollTo: '#caseContent'})
        .to($(".content", $slide), {
            'opacity': 0
        },'s1')
        .to($(".caseSwiper .swiper-slide:not("+slide+")"), {
            'opacity': 0,
        },'s1')
        .to($slide, {
            'display':'block',
            'clip-path': transTo,
            'z-index': '1',
            'width': '300px',
            'height': '300px',
        },'swc')
        .to($(".caseSwiper"), {
            'width': '100vw',
            'height': '100vh',
            'right': 0,
            'bottom': 0,
        },'swc')
        .to($(".caseSwiper .swiper-wrapper"),{
            'transform': 'translate3d(0,0,0)',
        },'swc')
        .to($(".caseSwiper .swiper-slide:not("+slide+")"), {
            'width': '0px',
            'margin': '0px'
        })
        .to($slide, {
            duration: 0.8,
            'clip-path': transTo,
        },'s2')
        .to($slide, {
            'left':'40%',
            'top': '20%',
        },'s2')
        .to($slide, {
            duration: 0.5,
            'width': '300px',
            'height': '300px',
            'clip-path': transTo,
        })
        .to($slide, {
            'width': '100%',
            'height': 'auto',
            'left': 0,
            'top': 0,
            'clip-path': transFrom
        })
        .to($(".zoom-cover", $slide), {
            'height': '50vh',
            'top': 0
        },'s3')
        .to($(".popup-content",$slide), {
            'display':'block',
            'height': 'auto',
            'width': '100%',
        },'s3')
        .to($(".popup-content",$slide), {
            'top': '0'
        },'s4')
        .to($(".popup-content",$slide), {
            duration: 1,
            'top': '0'
        })
        .to($slide, {
            'overflow-y': 'auto'
        })
    });

});