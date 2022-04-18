var swiper = new Swiper( ".mySwiper", {
     scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          dragSize: 215,
          draggable: true,
     },
     slidesPerView: 5,
     width: 1300,

     spaceBetween: 20,
     breakpoints: {
          640: {
               slidesPerView: 2,
               spaceBetween: 20,
          },
          768: {
               slidesPerView: 4,
               spaceBetween: 40,
          },
          1024: {
               slidesPerView: 5,
               spaceBetween: 20,
          },
     }
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

animation.reveal( `.one,.stage-3`, {
     origin: 'left',
} )

animation.reveal( `.two , .stage-1 ,.previwe`, {
     origin: 'right',
     interval: 100,
} )
animation.reveal( `.two , .companys ,Footer`, {
     origin: 'bottom',
     interval: 100,
} )
