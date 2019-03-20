const sampleOrder1 = [
  {
    userName: "User 1",
    products: [
      {
        name: "Fake product 1",
        price: 100000
      }
    ]
  }
];

const sampleOrder2 = [
  {
    userName: "User 2",
    products: [
      {
        name: "Fake product 2",
        price: 99
      }
    ]
  }
];

const orders = (root, { id }, ctx) => {
  if (id === "one") return sampleOrder1;
  if (id === "two") return sampleOrder2;
  if (id === "three") return [];
  throw Error("User does not exist");
};

module.exports = orders;
