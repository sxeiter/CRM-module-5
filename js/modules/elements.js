export const getElements = () => {
  const modalCount = document.querySelector('#count');
  const priceInput = document.querySelector('#price');
  const discountInput = document.querySelector('.modal__input_discount');
  const modalTotalSum = document.querySelector('.modal__total-sum');
  const modalCheckbox = document.querySelector('.modal__checkbox');
  const tableTotalPrice = document.querySelector('.cms__total-price');
  const tBody = document.querySelector('.table__body');
  const form = document.querySelector('.modal__form');
  const buttonAdd = document.querySelector('.panel__add-goods');
  const modalOverlay = document.querySelector('.overlay');
  const modalTotalPrice = document.querySelector('.modal__total-price');
  const modalCloseBtn = document.querySelector('.modal__close');

  return {
    modalCount,
    priceInput,
    discountInput,
    modalTotalSum,
    modalCheckbox,
    tableTotalPrice,
    tBody,
    form,
    buttonAdd,
    modalOverlay,
    modalTotalPrice,
    modalCloseBtn,
  };
};

