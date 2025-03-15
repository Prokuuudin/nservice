import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiperFeedback() {
    new Swiper (".swiper", {
      direction: 'horizontal',
      slidesPerView: 1.3,
      spaceBetween: 40,
      loop: true,
      
      
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