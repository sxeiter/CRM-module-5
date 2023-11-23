import getElements from './elements';

const {modalCount,
  priceInput,
  discountInput,
  modalTotalSum,
  modalCheckbox,
} = getElements;


export const calcModalTotalPrice = (getElements) => {
  // const modalCount = document.querySelector('#count');
  // const priceInput = document.querySelector('#price');
  // const discountInput = document.querySelector('.modal__input_discount');
  // const modalTotalSum = document.querySelector('.modal__total-price');
  // const modalCheckbox = document.querySelector('.modal__checkbox');
  const count = modalCount.value;
  const price = priceInput.value;
  const discount = modalCheckbox.checked ? discountInput.value : 0;

  let totalSum;
  if (modalCheckbox.checked) {
    discountInput.disabled = false;
    totalSum = (price - (price * discount / 100)) * count;
  } else {
    discountInput.value = '';
    discountInput.disabled = true;
    totalSum = price * count;
  }

  modalTotalSum.innerHTML = totalSum;
};

export const listener = () => {
  // const priceInput = document.querySelector('#price');
  // const discountInput = document.querySelector('.modal__input_discount');
  // const modalCheckbox = document.querySelector('.modal__checkbox');
  discountInput.addEventListener('change', calcModalTotalPrice);
  priceInput.addEventListener('change', calcModalTotalPrice);
  modalCheckbox.addEventListener('change', calcModalTotalPrice);
};
