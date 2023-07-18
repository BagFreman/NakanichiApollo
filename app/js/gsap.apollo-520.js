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

   }

})

