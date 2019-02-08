import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import ColorContext from "./contexts/color";

const App = ({ route }) => (
  <ColorContext.Provider value={"orange"}>
    <h2>Links are here baby</h2>

    <div>
      <Link to="/record"> Record </Link>
      <Link to="/activities"> Activities List </Link>
      <Link to="/schedule"> Schedule </Link>
    </div>

    {renderRoutes(route.routes)}
  </ColorContext.Provider>
);

export default App;

/* 

using a history context to move around the website??

*/
