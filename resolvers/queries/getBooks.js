const getBooks = (root, args, ctx) => {
  return [
    {
      title: "War and stuff",
      author: {
        name: "Andy Smith"
      }
    }
  ];
};

module.exports = getBooks;
