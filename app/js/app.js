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
         y: 250,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 50%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      gsap.to(".page-main-offer-text__img-1", {
         y: 150,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 50%",
            end: "bottom 100%",
            scrub: 2,
         }
      })

      window.addEventListener('load', function () {
         const elements = document.querySelectorAll('.page-main-menu-items a');
         this.setTimeout(function () {
            elements.forEach(function (element, i) {
               element.classList.add('animate-' + ++i);
            });
         }, 500);
      });

      // Создаем элемент для кастомной мыши
      var customCursor = document.createElement('div');
      customCursor.style.position = 'fixed';
      customCursor.style.transform = 'translate(-50%, -50%)'
      customCursor.style.width = '220px';
      customCursor.style.height = '220px';
      customCursor.style.opacity = '0';
      customCursor.style.transition = 'opacity .3s ease-in-out';
      customCursor.style.backgroundSize = 'cover';
      customCursor.style.pointerEvents = 'none';
      document.body.appendChild(customCursor);

      // Отслеживаем положение курсора мыши во время скролла
      document.body.addEventListener('mousemove', function (event) {
         customCursor.style.left = event.clientX + 'px';
         customCursor.style.top = event.clientY + 'px';
      });

   }

   var galleryImg1 = document.querySelector('.gallery-img__img-1');

   galleryImg1.addEventListener('mouseover', function () {
      customCursor.classList.add('gallery-img-1');
   });

   galleryImg1.addEventListener('mouseout', function () {
      customCursor.classList.remove('gallery-img-1');
   });

   var galleryImg2 = document.querySelector('.gallery-img__img-2');

   galleryImg2.addEventListener('mouseover', function () {
      customCursor.classList.add('gallery-img-2');
   });

   galleryImg2.addEventListener('mouseout', function () {
      customCursor.classList.remove('gallery-img-2');
   });

   var galleryImg3 = document.querySelector('.gallery-img__img-3');

   galleryImg3.addEventListener('mouseover', function () {
      customCursor.classList.add('gallery-img-3');
   });

   galleryImg3.addEventListener('mouseout', function () {
      customCursor.classList.remove('gallery-img-3');
   });

})

