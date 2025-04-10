import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiperFeedback() {
    new Swiper (".swiper", {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
      loop: true,     
      initialSlide: 0, 
      
      breakpoints: {
        990: {
          slidesPerView: 1.3,
          centeredSlides: false,                    
        },
        
      },
      pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },

   });
}
export default getSwiperFeedback;