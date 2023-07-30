document.addEventListener('DOMContentLoaded', () => {

   if (window.innerWidth > 992) {

      gsap.to(".page-main-offer-text__wr", {
         y: '60vw',
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 40%",
            end: "bottom 100%",
            scrub: 1,
            once: true
         }
      })

      gsap.to(".page-main-offer-text__img-1", {
         bottom: '70vw',
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 40%",
            end: "bottom 100%",
            scrub: 1,
            once: true
         }
      })

      gsap.to(".page-main-offer-text__img-2", {
         top: '40vw',
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 40%",
            end: "bottom 100%",
            scrub: 1,
            once: true
         }
      })

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 60%",
            end: "bottom 100%",
            scrub: 2,
            once: true
         }
      });

      tl.to(".page-main-offer-text__text-bgc", {
         y: -80,
         duration: 2,
         ease: "linear"
      })
         .to(".page-main-offer-text__text-bgc", {
            opacity: 0,
            duration: 1,
            ease: "linear"
         });

      gsap.to(".page-main-offer-text__img", {
         opacity: 1,
         duration: 1,
         transition: "linear",
         scrollTrigger: {
            trigger: ".page-main-offer-text",
            start: "top 28%",
            end: "bottom 80%",
            scrub: 1,
            once: true
         }
      })

      window.addEventListener('load', function () {
         const elements = document.querySelectorAll('.page-main-menu-items a');
         this.setTimeout(function () {
            elements.forEach(function (element, i) {
               element.classList.add('animate-' + ++i);
            });
         }, 100);
      });

      // Создаем элемент для кастомной мыши
      var customCursor = document.createElement('div');
      customCursor.classList.add('mouse');
      customCursor.style.position = 'fixed';
      customCursor.style.transform = 'translate(-50%, -50%)'
      customCursor.style.width = '220px';
      customCursor.style.height = '220px';
      customCursor.style.scale = '.7';
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


   const elements = document.querySelectorAll('.gallery-img__img-element');

   elements.forEach(function (element) {
      element.addEventListener('mouseover', function () {
         element.classList.add('gallery-img__img-element-active');
      });
   });

})

