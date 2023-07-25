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
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".sounding-section",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".connect-phone-text-anim", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".connect-phone",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".smart-speaker-text-item1", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".smart-speaker-section",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".control-section-buttoms-img", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".control-section-buttoms",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      const s4 = gsap.timeline({
         scrollTrigger: {
            trigger: ".presets-flex",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      });

      s4.to('.presets-flex-item-one', { y: 0, duration: 1, transition: "linear" });
      s4.to('.presets-flex-item-two', { y: 0, duration: 2, transition: "linear" });
      s4.to('.presets-flex-item-three', { y: 0, duration: 3, transition: "linear" });



      gsap.to(".sounding-position-items", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".sounding-position",
            start: "top 10%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".items2-watch-move", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".watch-move",
            start: "top 50%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".sub-section-img", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".sub-section",
            start: "top 50%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

   }

})

