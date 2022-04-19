var swiper = new Swiper( ".mySwiper", {
     scrollbar: {
          el: ".swiper-scrollbar",
          dragSize: 215,
          draggable: true,
     },
     slidesPerView: 7,
     spaceBetween: 20,
     breakpoints: {
          300: {
               slidesPerView: 1,
               spaceBetween: 10,
          },
          400: {
               slidesPerView: 1,
               spaceBetween: 10,
          },
          550: {
               slidesPerView: 1,
               spaceBetween: 10,
          },
     }
} )
var swiper2 = new Swiper( ".mySwiper-2", {
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
     },

} )
new TypeIt( "#element", {
     lifeLike: false,
     speed: 100,
     loop:true
} )
     .pause( 1200 )
     .pause( 1421 )
     .delete( 100 )
     .go();

const animation = ScrollReveal( {
     distance: '100px',
     duration: 3000,
} )


animation.reveal( `.hangouts,.stage-2`, {
     origin: 'top',
     interval: 100,
} )

animation.reveal( `.one,.stage-3 ,Footer`, {
     origin: 'left',
} )

animation.reveal( `.two , .stage-1 ,.previwe`, {
     origin: 'right',
     interval: 100,
} )
animation.reveal( `.two , .companys `, {
     origin: 'bottom',
     interval: 100,
} )
