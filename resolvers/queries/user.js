const user = () => {
  return {
    name: "Sam"
  };
};

const location = () => {
  return {
    town: "Paris",
    user: user()
  };
};

const orders = (root, args, ctx) => {
  return {
    name: "Jimbo",
    location: location()
  };
};

module.exports = orders;
