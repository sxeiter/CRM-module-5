const modalControl = () => {
  const modalOverlay = document.querySelector('.overlay');
  modalOverlay.classList.remove('overlay__active');


  const openModal = () => {
    const modalTotalPrice = document.querySelector('.modal__total-price');
    modalOverlay.classList.add('overlay__active');
    modalTotalPrice.textContent = '0';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('overlay__active');
  };
  const buttonAdd = document.querySelector('.panel__add-goods');
  buttonAdd.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === modalOverlay ||
     target.closest('.modal__close')) {
      closeModal();
    }
  });
  return {
    closeModal,
  };
};

const {closeModal} = modalControl();

const deleteControl = () => {
  const modalOverlay = document.querySelector('.overlay');
  const modalCloseBtn = document.querySelector('.modal__close');
  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('overlay__active');
  });
};

export {
  closeModal,
  modalControl,
  deleteControl,
};
