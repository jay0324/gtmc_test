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
        let trigger = document.querySelector(target).getBoundingClientRect().top + (($(window).height()*index) + ($(window).height()*0.5) + 5);
        let top = document.querySelector(target).getBoundingClientRect().top + (($(window).height()*(index+1)) + ($(window).height()*0.5));
        pannel_offset.push(top);
        pannel_offset_trigger.push(trigger);
    })

    //點擊事件，定位至存好的資料
    $("#pager button").on('click', function(){
        let index = $(this).index();
        bodyScrollBar.scrollTo(0, pannel_offset[index], 1000);
        $('#pager button').removeClass('active');
        $(this).addClass('active');
    });

    //捲動事件，定位至存好的資料
    bodyScrollBar.addListener((status) => {
        let dod = pannel_offset_trigger.filter(item => bodyScrollBar.scrollTop > item);
        let end = pannel_offset[pannel_offset.length-1] + $(window).height();
        $('#pager button').removeClass('active');
        if (dod.length > 0 && bodyScrollBar.scrollTop < end){
            $(`#pager button:nth-child(${dod.length})`).addClass('active');
        }
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
                scroller: ".scroller",
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
                scroller: ".scroller",
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
        loop:false,
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

        //移動目前視窗到最上面
        currentCoverBody.scrollTo(0,0,1*1000);

        //異步計時清除
        setTimeout(()=>currentCoverBody.destroy(), 1100);

        //轉場動畫
        gsap.timeline()
        .to($(".popup-content",$slide), {
            'margin-top': '200%'
        })
        .to($(".popup-content",$slide), {
            'display':'none',
            'height': '0',
            'width': '0',
        },'s5')
        .to($slide, {
            'width': '300px',
            'height': '300px',
            'clip-path': transTo
        },'s5')
        .to($slide, {
            duration: 0.2,
            'clip-path': transTo
        })
        .to($(".caseSwiper"), {
            'width': '80%',
            'height': '70vh',
            'right': '20px',
            'bottom':'10%',
        },'s2')
        .to($slide, {
            duration: 0.8,
            'clip-path': transTo,
        },'s2')
        .to($(".zoom-cover", $slide), {
            'height': '100%',
        },'s1')
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
            bodyScrollBar.updatePluginOptions('pause', { pause: false });
            caseSwiper.enable();
        })
        .to("#navBar", {
            'top': '0'
        })
    });

    //trans-in
    $(".cover-item").on('click', function(e){
        e.preventDefault();
        slide = $(this).data('target');
        $slide = $(slide);
        originalWidth = $slide.width();
        transform = $slide.css('transform');

        //定位到目標位置
        bodyScrollBar.scrollIntoView(document.querySelector('#caseContent'), 2000);

        //停止swiper
        caseSwiper.disable();
        
        //進行轉場動畫
        gsap.timeline()
        .call(function(){
            //執行擴充pause，trigger: true
            bodyScrollBar.updatePluginOptions('pause', { pause: true });
        },null,'s1')
        .to("#navBar", {
            'top': '-100px'
        },'s1')
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
        },'st')
        .to($slide, {
            'clip-path': transFrom
        },'st')
        .to($slide, {
            'width': '100%',
            'height': 'auto',
            'left': 0,
            'top': 0,
        },'s3')
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
            'top': '0',
            'margin-top': '0'
        },'s4')
        .to($(".popup-content",$slide), {
            duration: 1,
            'top': '0'
        })
        .call(function(){
            currentCoverBody = Scrollbar.init(document.querySelector(slide));
        })
        
    });

});