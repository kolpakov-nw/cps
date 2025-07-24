document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const burgerMenu = document.querySelector('.burger-menu');
    const openBtn = document.getElementById('burger-open');
    const closeBtn = document.getElementById('burger-close');
  
    if (!overlay || !burgerMenu) return;
  
    function openMenu() {
      burgerMenu.classList.add('burger-menu--open');
      overlay.classList.add('overlay--visible');
    }
    function closeMenu() {
      burgerMenu.classList.remove('burger-menu--open');
      overlay.classList.remove('overlay--visible');
    }
  
    openBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);  
});