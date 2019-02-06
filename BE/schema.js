const { gql } = require("apollo-server");
const { GraphQLDate, GraphQLTime } = require("graphql-iso-date");

// GraphQLDate & GraphQLTime are Custom Scalars that are UTC strings

const typeDefs = gql`

  type Query {
    activites(userId: String!): [Activity!]
    timeSheet(userId: String!, day:GraphQLDate!): [TimeEvent!]
  }

  type Mutation {
      addActivity(userId: String!, activity: Activity!): ServerResponse
      editActivity(userId: String!, activity: Activity!): ServerResponse 
      addTimeEvent(userId: String! , timeEvent: TimeEvent!, day:GraphQLDate!): Server Response
  }

  union Mutate = Activity | TimeEvent
  
  type ServerResponse {
      success:Boolean!
      message: String,
      request: Mutate
  }

  type Activity {
      name: Float!,
      value: Float!
  }

  type TimeEvent {
    event: StartEnd!
    activity: Activity! 
    time: GraphQLTime!
  }

  enum StartEnd {
      start 
      end 
  }  
`;

module.exports = typeDefs;
