const createRow = ({id, title, price, category, count, units, discount}) => {
  const tr = document.createElement('tr');
  tr.classList.add('row');
  tr.insertAdjacentHTML('beforeend', `
  
  <td class="table__cell">${id}</td>
  <td
    class="table__cell table__cell_left table__cell_name"
    data-id="24601654816512"
  >
    ${title}
  </td>
  <td class="table__cell table__cell_left">${category}</td>
  <td class="table__cell">${units}</td>
  <td class="table__cell">${count}</td>
  <td class="table__cell">${price}</td>
  <td class="table__cell table__cell-total">${count * price}</td>
  <td class="table__cell table__cell_btn-wrapper">
    <button class="table__btn table__btn_pic"></button>
    <button class="table__btn table__btn_edit"></button>
    <button class="table__btn table__btn_del"></button>
  </td>
    
  
    `);

  return tr;
};

const createId = () => {
  const id = Math.floor(Math.random() * 1000000);
  return id;
};

export {
  createRow,
  createId,
};
