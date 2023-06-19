
const contents = gsap.utils.toArray(".pin-content");

contents.forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: "top top",
    end: "top bottom",
    pin: true,
    pinSpacing: false,
    endTrigger: ".pin-section-final",
    id: i + 1,
    // markers: { indent: 150 * i }
  });
});
