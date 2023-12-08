import {goods} from './goods.js';
import {calculateTotalPrice} from './calc.js';
import elements from './elements.js';
const {tBody, tableTotalPrice} = elements;

export const getTotalTable = () => {
  tableTotalPrice.textContent = calculateTotalPrice(goods);
};


const removeGoods = (dataId) => {
  goods.forEach((item, index, array) => {
    if (item.id === +dataId) {
      array.splice(index, 1);
    }
  });
  return goods;
};

export const deleteRow = () => {
  tBody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.table__btn.table__btn_del')) {
      const closestRow = target.closest('tr');
      const rowProductId = +closestRow.firstElementChild.textContent;
      closestRow.remove();

      removeGoods(rowProductId);
      getTotalTable(goods);
      console.log(goods);
    }
  });
};


const getPicture = () => {
  const newWindow = window.open(
      'about:blank',
      '',
      `popup,width=600,
      height=600,
      top=${screen.height / 2 - 400},
      left=${screen.width / 2 - 200}`,
  );
  const btnPick = document.getElementById('btnPic');
  const imageUrl = btnPick.getAttribute('data-pic');
  newWindow.document.body.style.backgroundImage = `url(${imageUrl})`;
};

export const openNewWindowBtn = () => {
  tBody.addEventListener('click', e => {
    const target = e.target;
    if (target.matches('.table__btn.table__btn_pic')) {
      getPicture();
    }
  });
};
