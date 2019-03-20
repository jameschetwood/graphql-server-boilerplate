// import { GraphQLServer } from "graphql-yoga";
const { GraphQLServer } = require("graphql-yoga");

const sampleItems = [
  { name: "Apple" },
  { name: "Banana" },
  { name: "Orange" },
  { name: "Melon" }
];

const resolvers = {
  Query: {
    items: () => sampleItems
  }
};

const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers });

server.start(() => console.log("Server is running on localhost:4000"));
