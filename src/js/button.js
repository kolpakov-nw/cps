document.addEventListener('DOMContentLoaded', () => {
  const brandsBtn = document.querySelector('.read__more-btn');
  const brandsBlock = document.querySelector('.brends__slide-statik');

    if (brandsBtn && brandsBlock) {
      brandsBtn.addEventListener('click', () => {
      brandsBlock.classList.toggle('expanded');
    const img = brandsBtn.querySelector('img');
    if (img) {
      const expanded = brandsBlock.classList.contains('expanded');
      img.src = expanded ? './img/NoReadMore.svg' : './img/ReadMore.svg';
      img.alt = expanded ? 'свернуть' : 'показать все';
      }
    });
  }

  const tehnixBtn = document.querySelector('.tehnix__more-btn');
  const tehnixBlock = document.querySelector('.tehnix__slide-statik');

    if (tehnixBtn && tehnixBlock) {
      tehnixBtn.addEventListener('click', () => {
      tehnixBlock.classList.toggle('expanded');
    const img = tehnixBtn.querySelector('img');
    if (img) {
      const expanded = tehnixBlock.classList.contains('expanded');
      img.src = expanded ? './img/NoReadMore.svg' : './img/ReadMore.svg';
      img.alt = expanded ? 'свернуть' : 'показать все';
    }
  });
}

  const textBtn = document.getElementById('content__text-more');
  const textHidden = document.querySelector('.content__text-second');

    if (textBtn && textHidden) {
      const buttonText = textBtn.querySelector('.button__more-text');
      const icon = textBtn.querySelector('img');

    textBtn.addEventListener('click', () => {
    if (window.innerWidth >= 1120) return;
      textHidden.classList.toggle('expanded');
      const expanded = textHidden.classList.contains('expanded');
      buttonText.textContent = expanded ? 'Свернуть' : 'Читать далее';
      icon.src = './img/expand.png';
      icon.alt = expanded ? 'Свернуть' : 'Читать далее';
    });
  }
});