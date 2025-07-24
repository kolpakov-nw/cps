
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

  if (toggleBtn && brendsSlideStatik) {
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
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.tehnix__more-btn');
  const tehnixSlides = document.querySelectorAll('.tehnix__slide-statik .tehnix__slide');
  const step = 3;
  let currentIndex = step;
  let expanded = false;

  if (toggleBtn && tehnixSlides.length) {
    tehnixSlides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i >= step);
    });

    toggleBtn.addEventListener('click', () => {
      if (!expanded) {
        const nextIndex = currentIndex + step;
        for (let i = currentIndex; i < nextIndex && i < tehnixSlides.length; i++) {
          tehnixSlides[i].classList.remove('hidden');
        }
        currentIndex += step;

        if (currentIndex >= tehnixSlides.length) {
          toggleBtn.querySelector('img').src = './img/NoReadMore.svg';
          toggleBtn.querySelector('img').alt = 'свернуть';
          expanded = true;
        }
      } else {
        tehnixSlides.forEach((slide, i) => {
          slide.classList.toggle('hidden', i >= step);
        });
        currentIndex = step;
        toggleBtn.querySelector('img').src = './img/ReadMore.svg';
        toggleBtn.querySelector('img').alt = 'читать далее';
        expanded = false;
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById("content__text-more");
  const hiddenText = document.querySelector(".content__text-second");
  const buttonText = readMoreBtn.querySelector(".button__more-text");
  const icon = readMoreBtn.querySelector("img");

  readMoreBtn.addEventListener("click", () => {
    hiddenText.classList.toggle("expanded");

    if (hiddenText.classList.contains("expanded")) {
      buttonText.textContent = "Свернуть";
      icon.src = "./img/expand.png"; 
      icon.alt = "Свернуть";
    } else {
      buttonText.textContent = "Читать далее";
      icon.src = "./img/expand.png"; 
      icon.alt = "Читать далее";
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const overlay = document.querySelector('.overlay');
  const openBtn = document.getElementById('burger-open');
  const closeBtn = document.getElementById('burger-close');


  function checkWidthAndOpenMenu() {
    if (window.innerWidth >= 1120) {
      burgerMenu?.classList.add('burger-menu--open');
      overlay?.classList.add('overlay--visible');
    } else {
      burgerMenu?.classList.remove('burger-menu--open');
      overlay?.classList.remove('overlay--visible');
    }
  }

  function openMenu() {
    burgerMenu?.classList.add('burger-menu--open');
    overlay?.classList.add('overlay--visible');
  }

  function closeMenu() {
    burgerMenu?.classList.remove('burger-menu--open');
    overlay?.classList.remove('overlay--visible');
  }

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  checkWidthAndOpenMenu();
  window.addEventListener('resize', checkWidthAndOpenMenu);

});


(function () {
  const body  = document.body;
  const root  = document.getElementById('modal-root');
  if (!root) return;

  const overlay    = document.querySelector('.overlay');
  const burgerMenu = document.querySelector('.burger-menu');

  const modals = {
    chat: root.querySelector('[data-modal="chat"]'),
    call: root.querySelector('[data-modal="call"]')
  };

  const chatBtns = document.querySelectorAll('[data-open="chat"], .chat');
  const callBtns = document.querySelectorAll('[data-open="call"], .call');

  chatBtns.forEach(btn => btn.addEventListener('click', () => openModal('chat')));
  callBtns.forEach(btn => btn.addEventListener('click', () => openModal('call')));

  function openModal(type) {
    if (!modals[type]) return;
    root.classList.add('active');
    root.classList.remove('hidden');

    modals[type].classList.remove('hidden');
    requestAnimationFrame(() => modals[type].classList.add('active'));

    body.classList.add('modal-open');
    overlay?.classList.add('overlay--visible');
    modals[type].setAttribute('aria-hidden', 'false');
  }

  function closeModal(type) {
    if (!modals[type]) return;
    modals[type].classList.remove('active');

    setTimeout(() => {
      modals[type].classList.add('hidden');
      modals[type].setAttribute('aria-hidden', 'true');

      const allHidden = Object.values(modals).every(m => m.classList.contains('hidden'));
      if (allHidden) {
        root.classList.remove('active');
        root.classList.add('hidden');
        body.classList.remove('modal-open');
        overlay?.classList.remove('overlay--visible');
      }
    }, 500);
  }
  

  root.addEventListener('click', (e) => {
    const closer = e.target.closest('[data-close],[close]');
    if (closer) {
      const win = closer.closest('.modal-window');
      if (win?.dataset.modal) closeModal(win.dataset.modal);
    }
  });

})();
