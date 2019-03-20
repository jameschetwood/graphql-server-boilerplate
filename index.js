const { GraphQLServer } = require("graphql-yoga");

const queries = require("./resolvers/queries");

const resolvers = {
  Query: queries
};

const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers });

server.start(() => console.log("Server is running on localhost:4000"));
