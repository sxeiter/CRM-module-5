import {createRow} from '../modules/createElements';
import {createId} from '../modules/createElements';
import {goods} from '../modules/goods.js';
import {totalSum} from '../modules/calc.js';
import {calcModalTotalPrice} from '../modules/calc.js';
import {closeModal} from '../modules/modalControl.js';

const renderGoods = (arr) => {
  const rows = arr.map(createRow);
  document.querySelector('.table__body').append(...rows);
};

const addItemPage = (newItem) => {
  const tableBody = document.querySelector('.table__body');
  tableBody.append(createRow(newItem));
  goods.push(newItem);
  totalSum();
  console.log(goods);
};


const addNewItem = () => {
  const form = document.querySelector('.modal__form');
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

export {
  renderGoods,
  addItemPage,
  addNewItem,
};
