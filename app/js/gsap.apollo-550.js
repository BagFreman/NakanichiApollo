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


   }

})

