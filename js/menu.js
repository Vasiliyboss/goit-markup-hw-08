(() => {
  const refs = {
    openMenuBtn: document.querySelector('.is-open'),
    closeMenuBtn: document.querySelector('.btn-close'),
    menu: document.querySelector('.menu-container'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();