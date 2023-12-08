import {goods} from './modules/goods.js';
import {renderGoods} from './modules/render.js';
import {deleteRow, getTotalTable, openNewWindowBtn} from './modules/table.js';
import {
  deleteControl,
  addItem,
  modalSum,
  getDiscount} from './modules/modal.js';


{
  const init = () => {
    renderGoods(goods);
    deleteRow();
    openNewWindowBtn();

    getTotalTable();
    deleteControl();
    addItem();
    modalSum();
    getDiscount();
  };
  window.crmInit = init;
}
