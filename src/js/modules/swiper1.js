import Swiper1 from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiper1() {
    new Swiper1 (".mySwiper1", {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: true,
    speed: 3000,
    
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection:	false,
      },
      
    // breakpoints: {
    //   850: {
    //     slidesPerView: 2,
    // },
    //   1201: {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    // }
  });
}
export default getSwiper1;