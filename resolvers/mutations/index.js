const { ApolloError } = require("apollo-server");

// Happy path
const addProduct1 = (root, args, ctx) => {
  return {
    name: "Mock product",
    price: 99
  };
};

// Throw a default error
const addProduct2 = (root, args, ctx) => {
  throw Error({
    message: "Oh nooooo",
    code: 123
  });
};
/*
{
  "data": {
    "addProduct2": null
  },
  "errors": [
    {
      "message": "[object Object]",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "addProduct2"
      ]
    }
  ]
}
 */

// ApolloError
const addProduct3 = (root, args, ctx) => {
  throw new ApolloError("Ooops", 400, "additionalProperties");
};
/*
{
  "data": {
    "addProduct3": null
  },
  "errors": [
    {
      "message": "Ooops",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "addProduct3"
      ],
      "extensions": {
        "code": 400
      }
    }
  ]
}
 */

const addProduct4 = (root, { price }, ctx) => {
  if (price === 0) {
    return {
      product: {
        name: "Mock product 4",
        price: 0
      }
    };
  }
  return {
    failures: [
      {
        message: "Im not going to allow that for reason x",
        type: "INVALID_VOUCHER"
      }
    ]
  };
};
/*
{
  "data": {
    "addProduct4": {
      "product": null,
      "failures": [
        {
          "message": "Im not going to allow that for reason x",
          "type": "INVALID_VOUCHER"
        }
      ]
    }
  }
}
 */

module.exports = {
  addProduct1,
  addProduct2,
  addProduct3,
  addProduct4
};
