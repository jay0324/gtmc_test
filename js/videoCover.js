    fnVideoCover();

    function fnVideoCover(){
        //影片背景
        $(".video-cover").each(function(){
            calcVideoRatio(this);
        });
        $(window).on('resize',function(){
            $(".video-cover").each(function(){
                calcVideoRatio(this);
            });
        })

        //計算影片比例
        function calcVideoRatio($this){
            let video = {
                width: $($this).data('width'),
                height: $($this).data('height')
            };
            let wrap = {
                width: $($this).width(),
                height: $($this).height()
            };
            let set = {
                width: 0,
                height: 0,
                top:0,
                left:0,
            };

            video.ratio = video.width/video.height;
            wrap.ratio = wrap.width/wrap.height;

            if (video.ratio > wrap.ratio){
                set.width = wrap.height*video.ratio;
                set.height = wrap.height;
                set.left = -((set.width - wrap.width)/2);
            }else{
                set.width = wrap.width;
                set.height = wrap.width*(video.height/video.width);
                set.top = -((set.height - wrap.height)/2);
            }

            $('.video-iframe,.video', $this)
            .width(set.width)
            .height(set.height)
            .css({
                top: `${set.top}px`,
                left: `${set.left}px`,
            });
        }
    }