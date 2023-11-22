const modalCount = document.querySelector('#count');
const priceInput = document.querySelector('#price');
const discountInput = document.querySelector('.modal__input_discount');
const modalTotalPrice = document.querySelector('.modal__total-price');
const modalCheckbox = document.querySelector('.modal__checkbox');

export const calcModalTotalPrice = () => {
  const count = modalCount.value;
  const discount = discountInput.value;
  const price = priceInput.value;
  const priceWithDiscount = (price - (price * discount / 100)) * count;
  modalTotalPrice.innerHTML = priceWithDiscount;
  return {priceWithDiscount};
};

discountInput.addEventListener('change', calcModalTotalPrice);
priceInput.addEventListener('change', calcModalTotalPrice);

modalCheckbox.addEventListener('change', () => {
  if (modalCheckbox.checked) {
    discountInput.disabled = false;
  } else {
    discountInput.value = '';
    discountInput.disabled = true;
  }
});

