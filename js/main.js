import {calcModalTotalPrice} from './modules/calc.js';
import {renderGoods} from './modules/render.js';
import {deleteControl} from './modules/modalControl.js';
import {deleteRow} from './modules/deleteElements.js';
import {totalSum} from './modules/calc.js';
import {addNewItem} from './modules/render.js';
import {goods} from './modules/goods.js';

{
  const init = () => {
    const priceInput = document.querySelector('#price');
    const discountInput = document.querySelector('.modal__input_discount');

    discountInput.addEventListener('change', calcModalTotalPrice);
    priceInput.addEventListener('change', calcModalTotalPrice);

    renderGoods(goods);
    deleteControl();
    deleteRow(goods);
    totalSum();
    addNewItem();
  };
  window.crmInit = init;
}
