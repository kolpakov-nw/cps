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
    const toggleBtn = document.querySelector('.read__more-btn'); 
    const brendsSlideStatik = document.querySelector('.brends__slide-statik'); 
  
    toggleBtn.addEventListener('click', () => {
      brendsSlideStatik.classList.toggle('expanded'); 
  
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

  function checkWidthAndOpenMenu() {
    if (window.innerWidth <= 1120) {
      burgerMenu.classList.add('burger-menu--open');
      overlay.classList.add('overlay--visible');
    } else {
      burgerMenu.classList.remove('burger-menu--open');
      overlay.classList.remove('overlay--visible');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');
    const openBtn = document.getElementById('burger-open');
    const closeBtn = document.getElementById('burger-close');

    function openMenu() {
      burgerMenu.classList.add('burger-menu--open');
      overlay.classList.add('overlay--visible');
    }

    function checkWidthAndOpenMenu() {
      if (window.innerWidth >= 1120) {
        burgerMenu.classList.add('burger-menu--open');
        overlay.classList.add('overlay--visible');
      } else {
        burgerMenu.classList.remove('burger-menu--open');
        overlay.classList.remove('overlay--visible');
      }
    }

    function closeMenu() {
      burgerMenu.classList.remove('burger-menu--open');
      overlay.classList.remove('overlay--visible');
    }

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

  checkWidthAndOpenMenu();
  window.addEventListener('resize', checkWidthAndOpenMenu);
});



