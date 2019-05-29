const getAuthors = (root, args, ctx) => {
  return [
    {
      name: "Andy Smith",
      books: [
        {
          title: "War and stuff"
        }
      ]
    }
  ];
};

module.exports = getAuthors;
