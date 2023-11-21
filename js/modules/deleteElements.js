import {goods} from '../modules/goods.js';
import {totalSum} from '../modules/calc.js';

const removeGoods = (dataId) => {
  goods.forEach((item, index, array) => {
    if (item.id === +dataId) {
      array.splice(index, 1);
    }
  });
  return goods;
};

const deleteRow = () => {
  const tBody = document.querySelector('.table__body');
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

export {
  removeGoods,
  deleteRow,
};
