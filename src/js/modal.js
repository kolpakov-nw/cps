document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  const root = document.getElementById('modal-root');
  const chat = root.querySelector('[data-modal="chat"]');
  const call = root.querySelector('[data-modal="call"]');
  const chatOpenBtns = document.querySelectorAll('[data-open="chat"]');
  const callOpenBtns = document.querySelectorAll('[data-open="call"]');
  const chatCloseBtn = chat.querySelector('[data-close], [close]');
  const callCloseBtn = call.querySelector('[data-close], [close]');

  if (!overlay || !root || !chat || !call) return;

  function openModal(modal) {
    root.classList.add('active');
    root.classList.remove('hidden');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('active'));
    overlay.classList.add('overlay--visible');
    document.body.classList.add('modal-open');
    modal.setAttribute('aria-hidden', 'false');
  }
  
  function closeModal(modal) {
    modal.classList.remove('active');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    root.classList.remove('active');
    root.classList.add('hidden');
    overlay.classList.remove('overlay--visible');
    document.body.classList.remove('modal-open');
  }

  chatOpenBtns.forEach(btn => btn.addEventListener('click', () => openModal(chat)));
  callOpenBtns.forEach(btn => btn.addEventListener('click', () => openModal(call)));
  chatCloseBtn?.addEventListener('click', () => closeModal(chat));
  callCloseBtn?.addEventListener('click', () => closeModal(call));
  overlay?.addEventListener('click', () => {
    closeModal(chat);
    closeModal(call);
  });
});