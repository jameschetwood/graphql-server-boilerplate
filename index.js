const { GraphQLServer } = require("graphql-yoga");

const queries = require("./resolvers/queries");
const mutations = require("./resolvers/mutations");
const Author = require("./resolvers/author");
const Book = require("./resolvers/book");

const resolvers = {
  Query: queries,
  Mutation: mutations,
  Author,
  Book
};

const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers });

const options = {
  port: 1234
};

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
);
