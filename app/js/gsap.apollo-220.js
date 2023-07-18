document.addEventListener('DOMContentLoaded', () => {

   if (window.innerWidth > 992) {

      gsap.to(".subwoofer-image", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".subwoofer-section",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".subwoofer-items-1", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".subwoofer-section",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".connect-phone-img", {
         y: 200,
         transition: "linear",
         scrollTrigger: {
            trigger: ".connect-phone",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".items1-watch-move", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".watch-move",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".smart-speaker-img-r", {
         scale: 1,
         transition: "linear",
         scrollTrigger: {
            trigger: ".smart-speaker-section",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".sounding-position img", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".sounding-section",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })
      
   }

})

