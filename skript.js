const brandsSwiper = new Swiper('.brands__slider.swiper', {
    slidesPerView: 'auto',
    slidesOffsetBefore: 16, 
    slidesOffsetAfter: 16,
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
  });

  const tehnixSwiper = new Swiper('.tehnix__slider.swiper', {
    slidesPerView: 'auto',
    slidesOffsetBefore: 16, 
    slidesOffsetAfter: 16,
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
  });

  const priceSwiper = new Swiper('.price__slider.swiper', {
    slidesPerView: 'auto',
    slidesOffsetBefore: 16, 
    slidesOffsetAfter: 16,
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
  });

  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.read__more-btn'); // Кнопка
    const brendsSlideStatik = document.querySelector('.brends__slide-statik'); // Блок с логотипами
  
    toggleBtn.addEventListener('click', () => {
      brendsSlideStatik.classList.toggle('expanded'); // Переключаем класс
  
      // Меняем иконку в кнопке
      const img = toggleBtn.querySelector('img');
  
      if (brendsSlideStatik.classList.contains('expanded')) {
        img.src = './img/NoReadMore.svg';
        img.alt = 'свернуть';
      } else {
        img.src = './img/ReadMore.svg';
        img.alt = 'читать далее';
      }
    });
  });