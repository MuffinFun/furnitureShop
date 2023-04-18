new Swiper('.real-slider', {
    slidesPerView: 1.4,
    spaceBetween: 32,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      autoplay: {
        delay: 3000
      },
});

const swiper1 = new Swiper('.second-swiper',{
    slidesPerView: 2.4,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: true,
    slideActiveClass: 'second-swiper__active-slide',
    navigation: {
      nextEl: '.sec-swip-button-next',
    },
     autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.second-pagination',
      type: 'bullets',
    },
});