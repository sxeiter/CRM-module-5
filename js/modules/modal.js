import {goods} from './goods.js';
import {createId} from './render.js';
import {createRow} from './render.js';
import {getTotal} from './calc.js';
import elements from './elements.js';
import {getTotalTable} from './table.js';

const {
  priceInput,
  modalCount,
  discountInput,
  form,
  tBody,
  buttonAdd,
  modalOverlay,
  modalTotalPrice,
  modalCloseBtn,
  modalCheckbox} = elements;


const modalControl = () => {
  const openModal = () => {
    modalOverlay.classList.add('overlay__active');
    modalTotalPrice.textContent = '$ 0';
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
    openModal,
  };
};

const {closeModal, openModal} = modalControl();

export const deleteControl = () => {
  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('overlay__active');
  });
};


const addItemPage = (newItem) => {
  tBody.append(createRow(newItem));
  goods.push(newItem);
};


export const addItem = () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = Object.fromEntries(formData);
    newItem.id = createId();
    addItemPage(newItem, goods);
    form.reset();
    closeModal();
    getTotalTable(goods);
  });
};

export const getDiscount = () => {
  modalCheckbox.addEventListener('change', () => {
    if (modalCheckbox.checked) {
      discountInput.disabled = false;
    } else {
      discountInput.value = '';
      discountInput.disabled = true;
    }
  });
};

export const modalSum = () => {
  form.addEventListener('change', () => {
    const price = priceInput.value;
    const count = modalCount.value;
    const discount = discountInput.value;

    modalTotalPrice.textContent =
    `$ ${getTotal(price, count, discount)}`;
  });
};


export {
  closeModal,
  openModal,
  addItemPage,
};
