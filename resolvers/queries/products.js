const sampleProducts = [
  {
    name: "Fake product 1",
    price: 100000
  },
  {
    name: "Fake product 2",
    price: 99
  }
];

const products = (root, args, ctx) => {
  return sampleProducts;
};

module.exports = products;
