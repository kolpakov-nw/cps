const swiper = new Swiper('.footer__slider.swiper', {
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
    const toggleBtn = document.querySelector('.read__more-btn');       // Кнопка
    const slideStatik = document.querySelector('.slide__statik');      // Блок с логотипами
  
    toggleBtn.addEventListener('click', () => {
      slideStatik.classList.toggle('expanded');  // Переключаем класс раскрытия
  
      // Меняем текст или иконку кнопки, если надо
      if (slideStatik.classList.contains('expanded')) {
        // Например, меняем иконку на "свернуть"
        toggleBtn.querySelector('img').src = './img/NoReadMore.svg';
        toggleBtn.querySelector('img').alt = 'свернуть';
      } else {
        // Возвращаем "читать далее"
        toggleBtn.querySelector('img').src = './img/ReadMore.svg';
        toggleBtn.querySelector('img').alt = 'читать далее';
      }
    });
  });