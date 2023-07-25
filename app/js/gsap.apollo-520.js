document.addEventListener('DOMContentLoaded', () => {

   if (window.innerWidth > 992) {

      gsap.to(".page-apollo520-tv__img-1, .page-apollo520-tv__img-2", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-apollo520-tv",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".page-apollo520-connect-phone-img", {
         y: 150,
         transition: "linear",
         scrollTrigger: {
            trigger: ".connect-phone",
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

      gsap.to(".page-apollo520t__img-1, .page-apollo520t__img-2", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-apollo520t",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".page-apollo520-connect-phone-text", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".connect-phone-2",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".page-apollo520-connect-col__img", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-apollo520-connect-col",
            start: "top 40%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".page-apollo520-connect-col__text", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-apollo520-connect-col",
            start: "top 40%",
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

      gsap.to(".sounding-position-items-2", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".sounding-section-2",
            start: "top 20%",
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

      s4.to('.presets-flex-item-one', { y: 0, duration: .2, transition: "linear" });
      s4.to('.presets-flex-item-two', { y: 0, duration: .4, transition: "linear" });
      s4.to('.presets-flex-item-three', { y: 0, duration: .6, transition: "linear" });
      s4.to('.presets-flex-item-four', { y: 0, duration: .8, transition: "linear" });


   }

})

