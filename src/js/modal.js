const overlay = document.querySelector('.overlay'),
      modal = document.querySelector('.modal'), 
      closeBtn = document.querySelectorAll('[data-close]'),
      btn = document.querySelectorAll('#btn');

const stateOfModal = (modal, display, overlow) => {
  modal.style.display = `${display}`;
  document.body.style.overflow = `${overlow}`;
};

const overlayFunc = (element, display) => {
  element.style.display = `${display}`;
}

const openModalFunc = (elementsOfModal, element) => {
  elementsOfModal.forEach(btns => {
    btns.addEventListener('click', () => {
        stateOfModal(element, 'block', 'hidden');
        overlayFunc(overlay, 'block');
    });
  });
};

const closeModalFunc = (closeElement, element) => {
  closeElement.forEach(item => {
    item.addEventListener('click', () => {
      stateOfModal(element, 'none', '');
      overlayFunc(overlay, 'none');
    });
  });
};

overlay.addEventListener('click', (e) => {
if (e.target === overlay) {
  stateOfModal(modal, 'none', '');
  overlayFunc(overlay, 'none');
}
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape') {
  stateOfModal(modal, 'none', '');
  overlayFunc(overlay, 'none');
}
});

openModalFunc(btn, modal);
closeModalFunc(closeBtn, modal);