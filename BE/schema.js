const { gql } = require("apollo-server-micro");

// GraphQLDate & GraphQLTime are Custom Scalars that are UTC strings

const typeDefs = gql`
  scalar GraphQLDate
  scalar GraphQLTime

  type Query {
    activities(userId: String!): [Activity!]
    timeSheet(userId: String!, day: GraphQLDate!): [TimeEvent!]
  }

  type Mutation {
    addActivity(userId: String!, activity: ActivityInput!): ServerResponse
    editActivity(userId: String!, activity: ActivityInput!): ServerResponse
    addTimeEvent(
      userId: String!
      timeEvent: TimeEventInput!
      day: GraphQLDate!
    ): ServerResponse
  }

  input ActivityInput {
    name: String!
    value: Float!
  }

  input TimeEventInput {
    event: StartEnd!
    activity: String!
    time: GraphQLTime!
  }

  type ServerResponse {
    success: Boolean!
    message: String
    request: Activity
  }

  type Activity {
    name: String!
    value: Float!
  }

  type TimeEvent {
    event: StartEnd!
    activity: String!
    time: GraphQLTime!
  }

  enum StartEnd {
    start
    end
  }

  union Mutate = Activity | TimeEvent
`;

module.exports = typeDefs;
