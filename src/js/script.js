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