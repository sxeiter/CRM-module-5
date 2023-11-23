import {goods} from './modules/goods.js';
import {createRow, createId} from './modules/createElements.js';
import {closeModal} from './modules/modalControl.js';
import {calcModalTotalPrice, listener} from './modules/calcModal.js';
import getElements from './elements';

const {
  tableTotalPrice,
  tBody,
  form,
} = getElements;

const totalSum = () => {
  // const tableTotalPrice = document.querySelector('.cms__total-price');

  let total = 0;
  goods.forEach(item => {
    const price = item.price;
    const count = item.count;
    total += price * count;
  });
  tableTotalPrice.textContent = `₽ ${total}`;
};


const removeGoods = (dataId) => {// не могу импортировать
  goods.forEach((item, index, array) => {
    if (item.id === +dataId) {
      array.splice(index, 1);
    }
  });
  return goods;
};

const deleteRow = () => {// не могу импортировать
  // const tBody = document.querySelector('.table__body');
  tBody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__btn.table__btn_del')) {
      const closestRow = target.closest('tr');
      const rowProductId = +closestRow.firstElementChild.textContent;
      closestRow.remove();
      removeGoods(rowProductId);
      console.log(goods);
      totalSum();
    }
  });
};


const addItemPage = (newItem) => {
  // const tBody = document.querySelector('.table__body');
  tBody.append(createRow(newItem));
  goods.push(newItem);
  totalSum();
};

console.log(goods);

const addItem = () => {
  // const form = document.querySelector('.modal__form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = Object.fromEntries(formData);
    newItem.id = createId();
    addItemPage(newItem, goods);
    calcModalTotalPrice();
    form.reset();
    closeModal();
  });
};
addItem();

const renderGoods = (arr) => {// не могу импортировать
  const rows = arr.map(createRow);
  document.querySelector('.table__body').append(...rows);
};

{
  const init = () => {
    deleteRow(goods);
    totalSum();
    renderGoods(goods);
    listener();
  };
  window.crmInit = init;
}

