//宣告scrollbar
let bodyScrollBar = Scrollbar.init(document.getElementById('scrollContent'), {
  damping: 0.05,
  delegateTo: document,
});

bodyScrollBar.addListener((status) => {
  bodyScrollBar.limit.x = 0
});

ScrollTrigger.scrollerProxy(".scroller", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  },
});
bodyScrollBar.addListener(ScrollTrigger.update);


//sectionWraper
gsap.to("#sectionWraper", {
  'top': 0, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#FirstContent",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    pinSpacing:false,
    scroller: ".scroller",
  }
});

//caseContent
gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
var images = gsap.utils.toArray(".panel:not(:last-child)");
images.forEach((image, i) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".pin-section-middle",
      scroller: ".scroller",
      start: () => "top -" + (window.innerHeight*(i+0.5)),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,
    },
  });

  tl.to(image, { 
    'clip-path': 'polygon(0 0, 100% 0%, 100% 0%, 0% 0%)'
   });
});

ScrollTrigger.create({
  trigger: ".pin-section-middle",
  scroller: ".scroller",
  scrub: true,
  // markers: true,
  pin: true,
  start: () => "top top",
  end: () => "+=" + (images.length + 1) * window.innerHeight,
  invalidateOnRefresh: true,
  onLeave: () => {
    gsap.to("#caseContent", {
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".panel:last-child",
        start: "bottom bottom",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing:true,
        scroller: ".scroller",
        // markers: true,
      }
    });
  },
});


gsap.to('#pager',{
  scrollTrigger: {
    trigger: "#caseContent",
    start: "bottom bottom",
    end: "bottom top",
    pin: true,
    pinSpacing:true,
    scroller: ".scroller",
    onEnter: () => {
      gsap.to("#pager", {
        'left': '-100px',
      });
    },
    onEnterBack: () => {
      gsap.to("#pager", {
        'left': '-100px',
      });
    },
    onLeave: () => {
      gsap.to("#pager", {
        'left': '0',
      });
    },
    onLeaveBack: () => {
      gsap.to("#pager", {
        'left': '0',
      });
    },
  }
});

//sectionWraper


//layer移動 (往上蓋)
// let panels = gsap.utils.toArray(".trans_panel");
// let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
//     pin: true, 
//     pinSpacing: false,
//     scroller: ".scroller",
//     // markers: true
//   });
// });

// ScrollTrigger.create({
//   snap: {
//     snapTo: (progress, self) => {
//       let panelStarts = tops.map(st => st.start),
//           snapScroll = gsap.utils.snap(panelStarts, self.scroll());
//       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
//     },
//     duration: 0.5
//   }
// });

//layer移動 (往上翻)
// gsap.to(".trans_panel:not(:last-child)", {
//   yPercent: -100, 
//   ease: "none",
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: "#transContainer",
//     start: "top top",
//     end: "+=100%",
//     scrub: true,
//     pin: true,
//     scroller: ".scroller",
//   }
// });

// gsap.set(".trans_panel", {zIndex: (i, target, targets) => targets.length - i});