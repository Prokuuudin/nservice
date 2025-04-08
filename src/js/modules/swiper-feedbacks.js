import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiperFeedback() {
    new Swiper (".swiper", {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      
      breakpoints: {
        960: {
          slidesPerView: 1.3,          
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