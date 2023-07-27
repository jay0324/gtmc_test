$(function(){
    //當前打開的視窗
    var currentCoverBody,
    originalWidth,
    slide,
    $slide;

    var slidePadding = '30px';

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
            duration: 1,
            'top': '100%'
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
        .to($(".trans-card:not("+slide+")"), {
            'width': originalWidth,
            'height': '100%',
            'padding-left': slidePadding,
            'padding-bottom': slidePadding,
        },'s5')
        .to($slide, {
            duration: 0.5,
            'clip-path': transTo
        })
        .to($(".trans-card-wraper"), {
            'width': '100%',
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
            'padding-left': slidePadding,
            'padding-bottom': slidePadding
        },'s1')
        .to($slide, {
            'position':'relative',
            'left':'auto',
            'top': 'auto',
        },'s1')
        .to($("#pager"), {
            'opacity': 1,
        },'s1')
        .to($("#wrapwrap"), {
            scrollTo: slide
        },'s1')
        .to($(".trans-card-wraper"), {
            'padding-left': '8vw',
        },'s1')
        // .to($(".content", $slide), {
        //     duration: 0.5,
        //     'opacity': 0
        // })
        .to($(".content", $slide), {
            'opacity': 1
        })
        .to($("#wrapwrap"), {
            'overflow-y': 'auto'
        })
        .to($(".trans-card:not("+slide+")"), {
            'opacity': 1
        })
        .to('header,#navBar', {
            'top': 0
        },'hideNav')
        .call(function(){
            //加入暫停觸發標記
            $(".cover-item", $slide).removeClass('no-trigger');
        })

    });

    //trans-in
    $(".cover-item").on('click', function(e){
        e.preventDefault();

        if ($(this).hasClass('no-trigger')) return;

        slide = $(this).data('target');
        $slide = $(slide);
        originalWidth = `${100/3}%`;
        transform = $slide.css('transform');

        //加入暫停觸發標記
        $(this).addClass('no-trigger');

        //進行轉場動畫
        gsap.timeline()
        .to($("#wrapwrap"), {
            'overflow-y': 'hidden'
        })
        .to('header,#navBar', {
            'top': -200
        },'hideNav')
        .to($(".content", $slide), {
            'opacity': 0
        },'s1')
        .to($(".trans-card:not("+slide+")"), {
            'opacity': 0,
        },'s1')
        .to($(".trans-card-wraper"), {
            'padding': 0,
        },'s1')
        .to($("#wrapwrap"), {scrollTo: '#marketing_section'})
        .to($slide, {
            'display':'block',
            'clip-path': transTo,
            'z-index': '1',
            'width': '300px',
            'height': '300px',
            'padding-left': 0,
            'padding-bottom': 0
        },'swc')
        .to($(".trans-card-wraper"), {
            'width': '100vw',
            'height': '100vh',
            'right': 0,
            'bottom': 0,
        },'swc')
        .to($(".trans-card-wraper .swiper-wrapper"),{
            'transform': 'translate3d(0,0,0)',
        },'swc')
        .to($(".trans-card:not("+slide+")"), {
            'width': 0,
            'height': 0,
            'padding': 0
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
            'height': '100%',
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