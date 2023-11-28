import {goods} from './modules/goods.js';
import {renderGoods} from './modules/render.js';
import {deleteRow} from './modules/table.js';


{
  const init = () => {
    renderGoods(goods);
    deleteRow();
  };
  window.crmInit = init;
}
