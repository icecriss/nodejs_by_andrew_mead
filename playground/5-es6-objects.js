// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

// console.log(product);

// const {
//   label: productLabel,
//   price,
//   stock,
//   rating = 5
// } = product;

// console.log('productLabel', productLabel);
// console.log('price', price);
// console.log('stock', stock);
// console.log('rating', rating);

// console.log(product);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type + ": ");
  console.log("product: " + label);
  console.log("quantity: " + stock);
};

transaction("order", product);
// transaction("order");
