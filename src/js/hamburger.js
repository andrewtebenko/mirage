const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      link = document.querySelectorAll('.menu__link a');

const overflowFunc = (value) => {
    document.body.style.overflow = value;
};

const openModal = () => {
    menu.classList.add('active');
    overflowFunc('hidden');
};

const closeModal = () => {
    menu.classList.remove('active');
    overflowFunc('visible');
};

hamburger.addEventListener('click', openModal);

close.addEventListener('click', closeModal);

link.forEach(links => {
    links.addEventListener('click', closeModal);
});

menu.addEventListener('click', (event) => {
    if (event.target !== menu) {
        closeModal();
    }
});