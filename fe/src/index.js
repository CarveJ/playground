import React from "react";
import ReactDOM from "react-dom";

// apollo stuff
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

//
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

const client = new ApolloClient({
  uri: "http://localhost:1234/q"
});

client.query({
  query: gql`
  {
    
  }`
});

ReactDOM.render(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
