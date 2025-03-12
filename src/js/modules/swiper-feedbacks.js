import mySwiper from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiperFeedback() {
    new mySwiper (".swiper", {
      direction: 'horizontal',
      autoplay: true,
      loop: true,
      speed: 700,
      initialSlide: 0,
      freeMode: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,

      pagination: {
        el: '.swiper-pagination',
      },    
  });
}
export default getSwiperFeedback;