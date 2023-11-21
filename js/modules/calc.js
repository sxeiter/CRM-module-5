import {goods} from '../modules/goods.js';

const calcModalTotalPrice = () => {
  const modalCount = document.querySelector('#count');
  const priceInput = document.querySelector('#price');
  const discountInput = document.querySelector('.modal__input_discount');
  const modalTotalPrice = document.querySelector('.modal__total-price');
  const count = modalCount.value;
  const discount = discountInput.value;
  const price = priceInput.value;

  const modalCheckbox = document.querySelector('.modal__checkbox');
  modalCheckbox.addEventListener('change', () => {
    if (modalCheckbox.checked) {
      discountInput.disabled = false;
    } else {
      discountInput.value = '';
      discountInput.disabled = true;
    }
  });

  const priceWithDiscount = (price - (price * discount / 100)) * count;
  modalTotalPrice.innerHTML = priceWithDiscount;
  return {priceWithDiscount};
};


const totalSum = () => {
  const tableTotalPrice = document.querySelector('.cms__total-price');


  let total = 0;
  goods.forEach(item => {
    const price = item.price;
    const count = item.count;
    total += price * count;
  });
  tableTotalPrice.textContent = `₽ ${total}`;
};

const priceInput = document.querySelector('#price');
const discountInput = document.querySelector('.modal__input_discount');

discountInput.addEventListener('change', calcModalTotalPrice);
priceInput.addEventListener('change', calcModalTotalPrice);

export {
  calcModalTotalPrice,
  totalSum,
};
