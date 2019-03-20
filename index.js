// import { GraphQLServer } from "graphql-yoga";
const { GraphQLServer } = require("graphql-yoga");

const sampleOrders = [
  {
    userName: "Fake user",
    products: [
      {
        name: "Fake product",
        price: 100000
      }
    ]
  }
];

const resolvers = {
  Query: {
    orders: () => sampleOrders
  }
};

const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers });

server.start(() => console.log("Server is running on localhost:4000"));
