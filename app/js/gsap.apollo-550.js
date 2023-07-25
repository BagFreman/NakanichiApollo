document.addEventListener('DOMContentLoaded', () => {

   if (window.innerWidth > 992) {

      gsap.to(".power-apollo-550__img", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".power-apollo-550",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".subuffer-apollo550__img", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".subuffer-apollo550",
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

      gsap.to(".control-apollo550__item-1 img, .control-apollo550__item-2-bg", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".control-apollo550",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".section-coll-img__item1__img-1", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".section-coll-img",
            start: "top 80%",
            end: "bottom 80",
            scrub: 2,
         }
      })

      gsap.to(".section-coll-img__item1__img-2", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".section-coll-img",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })


      gsap.to(".section-coll-img__item2__img-1", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".section-coll-img",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".section-coll-img__item2__img-2", {
         x: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".section-coll-img",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".power-apollo-550__text2", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".power-apollo-550",
            start: "top 100%",
            end: "bottom 50%",
            scrub: 2,
         }
      })

      gsap.to(".subuffer-apollo550__text", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".subuffer-apollo550",
            start: "top 80%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".sub-apollo550__text", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".sub-apollo520",
            start: "top 100%",
            end: "bottom 30%",
            scrub: 2,
         }
      })

      gsap.to(".page-apollo520-connect-phone-text", {
         y: 0,
         transition: "linear",
         scrollTrigger: {
            trigger: ".connect-phone-2",
            start: "top 40%",
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

   }

})

