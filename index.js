const { GraphQLServer } = require("graphql-yoga");

const queries = require("./resolvers/queries");

const resolvers = {
  Query: queries
};

const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers });

const options = {
  port: 1234
};

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
);
