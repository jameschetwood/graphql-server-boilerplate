const { GraphQLServer } = require("graphql-yoga");
const costAnalysis = require("graphql-cost-analysis").default;

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
  port: 1234,
  validationRules: req => [
    costAnalysis({
      variables: req.query.variables,
      maximumCost: 50,
      defaultCost: 1,
      onComplete(cost) {
        console.log(`Cost analysis score: ${cost}`);
      }
    })
  ]
};

server.start(options, () =>
  console.log(`Server is running on localhost:${options.port}`)
);
