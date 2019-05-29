const getAuthors = (root, args, ctx) => {
  return [
    {
      name: "Andy Smith",
      books: [
        {
          title: "dsfds"
        }
      ]
    }
  ];
};

module.exports = getAuthors;
