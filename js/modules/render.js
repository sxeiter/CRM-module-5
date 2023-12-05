import {getTotal} from './calc.js';
import {closeModal} from './modal.js';


export const createRow = ({id, title, price, category, count, units, discount}) => {
  const tr = document.createElement('tr');
  tr.classList.add('row');
  tr.insertAdjacentHTML('beforeend', `
    
    <td class="table__cell">${id}</td>
    <td class="table__cell table__cell_left table__cell_name">${title}</td>
    <td class="table__cell table__cell_left">${category}</td>
    <td class="table__cell">${units}</td>
    <td class="table__cell table__cell-count">${count}</td>
    <td class="table__cell table__cell-price">${price}</td>
    <td class="table__cell table__cell-total">
    ${getTotal(price, count, discount).toFixed(1)}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"
       data-pic="/img/reno.jpg"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
        
      `);

  return tr;
};

export const createId = () => {
  const id = Math.floor(Math.random() * 1000000);
  return id;
};


export const renderGoods = (arr) => {
  const rows = arr.map(createRow);
  document.querySelector('.table__body').append(...rows);
};


