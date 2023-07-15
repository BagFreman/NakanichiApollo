document.addEventListener('DOMContentLoaded', () => {


   gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
   ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content'
   })

   window.addEventListener('scroll', e => {
      document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
   })


   if (window.innerWidth > 992) {

      gsap.to(".page-main-offer-text__img-2", {
         y: 100,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 50%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".page-main-offer-text__img-1", {
         y: 50,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 50%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      window.addEventListener('load', function () {
         // выбираем все элементы, которым нужно добавить класс
         const elements = document.querySelectorAll('.page-main-menu-items a');
   
         // добавляем классы к элементам
         this.setTimeout(function () {
            elements.forEach(function (element, i) {
               element.classList.add('animate-' + ++i);
            });
         }, 1000);
   
      });


   }





})