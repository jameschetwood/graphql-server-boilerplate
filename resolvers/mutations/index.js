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

// import { AuthenticationError } from 'apollo-server'

module.exports = {
  addProduct1,
  addProduct2,
  addProduct3
};
