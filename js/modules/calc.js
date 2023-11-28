import elements from './elements.js';
const {tableTotalPrice} = elements;

export const setDiscount = (discount) =>
  (discount ? (100 - discount) / 100 : 1);

export const getTotal = (price, count, discount) => {
  if (price <= 0 || count <= 0) {
    return 0;
  } else {
    return price * count * setDiscount(discount);
  }
};

// export const getTotalTable = (prices) => {
// prices.reduce(
// (acc, {count, price, discount}) => acc + getTotal(price, count, discount),
// 0);
// };

export const calculateTotalPrice = (tableData) => {
  tableData.reduce((total, item) => {
    const price = item.price;
    const count = item.count;

    const totalSum = total + (price * count);
    return tableTotalPrice.textContent = totalSum;
  }, 0);
};


