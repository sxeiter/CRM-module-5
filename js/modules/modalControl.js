const modalControl = () => {
  const buttonAdd = document.querySelector('.panel__add-goods');
  const modalOverlay = document.querySelector('.overlay');
  const modalTotalPrice = document.querySelector('.modal__total-price');
  const openModal = () => {
    modalOverlay.classList.add('overlay__active');
    modalTotalPrice.textContent = '0';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('overlay__active');
  };

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

const deleteControl = () => {// не могу импортировать
  const modalCloseBtn = document.querySelector('.modal__close');
  const modalOverlay = document.querySelector('.overlay');
  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('overlay__active');
  });
};
deleteControl();
export {

  closeModal,
  deleteControl,
};
