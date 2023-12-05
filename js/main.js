import {goods} from './modules/goods.js';
import {renderGoods} from './modules/render.js';
import {deleteRow, getTotalTable, foo} from './modules/table.js';
import {
  deleteControl,
  addItem,
  modalSum,
  getDiscount} from './modules/modal.js';


{
  const init = () => {
    renderGoods(goods);
    deleteRow();
    foo();
    getTotalTable();
    deleteControl();
    addItem();
    modalSum();
    getDiscount();
  };
  window.crmInit = init;
}
