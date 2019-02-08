const { GraphQLDate, GraphQLTime } = require("graphql-iso-date");

const resolvers = {
  Query: {
    activities(parents, args, context) {
      const { userId } = args;
      return context.inMemory[userId].activities;
    },
    timeSheet(parents, args, context) {
      const { userId, day } = args;
      return context.inMemory[userId][day];
    }
  },
  Mutation: {
    addActivity(parent, args, context) {
      const { userId, activity } = args;
      const { name } = activity;

      const bool = context.inMemory[userId].activities.find(
        activity => activity.name === name
      );

      let res = {
        success: true,
        message: `successfully added ${name} to ${userId}'s activities`,
        request: activity
      };

      bool
        ? (res = {
            success: false,
            message: `failed to add ${name} to activities because it already exists`,
            request: activity
          })
        : context.inMemory[userId].activities.push(activity);

      return res;
    },
    editActivity(parents, args, context) {
      const { userId, activity } = args;
      const { name, value } = activity;
      const data = context.inMemory[userId];

      const bool = data.activities.find(activity => activity.name === name);

      let res = {
        success: true,
        message: `successfully edited ${name}'s value to ${value}`,
        request: activity
      };

      bool
        ? (data.activities = [...data.activities, ...[activity]])
        : (res = {
            success: false,
            message: `failed to edit, because it the activity does not exist in the database`,
            request: activity
          });
    },
    addTimeEvent(parents, args, context) {
      const { userId, timeEvent, day } = args;
      const date = context.inMemory[userId].day;

      const lastEvent = date.day.event;

      let res = {
        success: true,
        message: `you successfully added a new time event`,
        request: timeEvent
      };

      lastEvent === timeEvent.event
        ? (res = {
            success: false,
            message: `previous event matches this one`,
            request: timeEvent
          })
        : date.push(timeEvent);

      return res;
    }
  },
  ServerResponse: {
    success: parent => parent.success,
    message: parent => parent.message,
    request: parent => parent.request
  },
  Activity: {
    name: parent => parent.name,
    value: parent => parent.value
  },
  TimeEvent: {
    event: parent => parent.event,
    activity: parent => parent.activity,
    time: parent => parent.time
  },
  Mutate: {
    __resolveType(obj) {
      if (obj.name) {
        return "Activity";
      }
      if (obj.event) {
        return "TimeEvent";
      }

      return null;
    }
  },
  GraphQLDate: GraphQLDate,
  GraphQLTime: GraphQLTime
};

module.exports = resolvers;
