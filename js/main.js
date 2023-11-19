'use strict';

const modalTitle = document.querySelector('.modal__title');
const modalCloseBtn = document.querySelector('.modal__close');
const vendorCodeId = document.querySelector('.vendor-code__id');
const modalForm = document.querySelector('.overlay__modal.modal');
const modalCheckbox = document.querySelector('.modal__checkbox');
const buttonAdd = document.querySelector('.panel__add-goods');
const form = document.getElementById('productForm');
// const discountInput = document.querySelector('.modal__input_discount');
const countInput = document.getElementById('count');
// const priceInput = document.getElementById('price');
// const modalTotalPrice = document.querySelector('.modal__total-price');
const tableBody = document.querySelector('.table__body');
const modalOverlay = document.querySelector('.overlay');
modalOverlay.classList.remove('overlay__active');


const goods = [
  {
    'id': 253842678,
    'title': 'Смартфон Xiaomi 11T 8/128GB',
    'price': 27000,
    'description': 'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    'category': 'mobile-phone',
    'discont': false,
    'count': 3,
    'units': 'шт',
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 296378448,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'price': 4000,
    'description': 'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    'category': 'toys',
    'discont': 5,
    'count': 1,
    'units': 'шт',
    'images': {
      'small': 'img/cheetancar-m.jpg',
      'big': 'img/cheetancar-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'ТВ приставка MECOOL KI',
    'price': 12400,
    'description': 'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    'category': 'tv-box',
    'discont': 15,
    'count': 4,
    'units': 'шт',
    'images': {
      'small': 'img/tvboxmecool-m.jpg',
      'big': 'img/tvboxmecool-b.jpg',
    },
  },
  {
    'id': 246258248,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'price': 22,
    'description': 'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    'category': 'cables',
    'discont': false,
    'count': 420,
    'units': 'v',
    'images': {
      'small': 'img/lan_proconnect43-3-25.jpg',
      'big': 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const createRow = ({id, title, price, category, count, units}) => {
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
  <td class="table__cell table__cell-total">${price * count}</td>
  <td class="table__cell table__cell_btn-wrapper">
    <button class="table__btn table__btn_pic"></button>
    <button class="table__btn table__btn_edit"></button>
    <button class="table__btn table__btn_del"></button>
  </td>
    
  
    `);
  return tr;
};

const renderGoods = (arr) => {
  const rows = arr.map(createRow);
  document.querySelector('.table__body').append(...rows);
};

renderGoods(goods);


buttonAdd.addEventListener('click', () => {
  modalOverlay.classList.add('overlay__active');
});

modalOverlay.addEventListener('click', e => {
  const target = e.target;
  if (target === modalOverlay ||
    target.closest('.modal__close')) {
    modalOverlay.classList.remove('overlay__active');
  }
});

modalCloseBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('overlay__active');
});


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
    }
  });
};
deleteRow(goods);


/*

const addItem = () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = Object.fromEntries(formData);

    form.reset();
  });
};
addItem();
*/
const modalCount = document.querySelector('#count');
const priceInput = document.querySelector('#price');
const discountInput = document.querySelector('.modal__input_discount');
const modalTotalPrice = document.querySelector('.modal__total-price');

modalCheckbox.addEventListener('change', () => {
  if (modalCheckbox.checked) {
    discountInput.disabled = false;
  } else {
    discountInput.value = '';
    discountInput.disabled = true;
  }
});

const calcModalTotalPrice = () => {
  const count = modalCount.value;
  const discount = discountInput.value;
  const price = priceInput.value;
  const priceWithDiscount = (price - (price * discount / 100)) * count;
  modalTotalPrice.innerHTML = priceWithDiscount;
};

discountInput.addEventListener('input', calcModalTotalPrice);
priceInput.addEventListener('input', calcModalTotalPrice);

const tableTotalPrice = document.querySelector('.cms__total-price');
const tableCellTotal = document.querySelector('.table__cell-total');

const calcTableTotalPrice = () => {
  let total = 0;

  for (let i = 0; i < tableCellTotal.length; i++) {
    const price = parseInt(tableCellTotal[i].innerHTML);
    total += price;
  }

  tableTotalPrice.innerHTML = total;
};

calcTableTotalPrice();


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newItem = Object.fromEntries(formData);

  createRow(newItem);


  form.reset();
});

