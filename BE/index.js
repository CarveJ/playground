const { router, get, post } = require("microrouter");
const { send } = require("micro");
const { ApolloServer, gql } = require("apollo-server-micro");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const inMemory = require("./model/index");

const graphQlHandler = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    inMemory
  })
}).createHandler({ path: "/q" });

const check = (req, res) => `X GON GIVE IT TO YA`;
module.exports = router(
  get("/", check),
  get("/q", graphQlHandler),
  post("/q", graphQlHandler)
);
