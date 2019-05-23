// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined
};

console.log(product);

const { label: productLabel, price, stock, rating } = product;

console.log(productLabel);
console.log(price);
console.log(stock);
console.log(rating);

console.log(product);
