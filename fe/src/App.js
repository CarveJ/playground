import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import ColorContext from "./contexts/color";

const App = ({ route }) => (
  <ColorContext.Provider value={"orange"}>
    <div className="app-wrapper">
      <h2>Links are here baby</h2>

      <div className="theLinks">
        <Link className="link" to="/record">
          Record
        </Link>
        <Link className="link" to="/activities">
          Activities List
        </Link>
        <Link className="link" to="/schedule">
          Schedule
        </Link>
      </div>

      {renderRoutes(route.routes)}
      <style jsx>{`
        .app-wrapper {
          height: 100vh;
          width: 100vw;
          background-color: lightblue;
          display: flex;
          flex-direction: column;
          justify-content: top;
          align-items: center;
        }

        .theLinks {
          background-color: pink;
          display: flex;
          justify-content: space-between;
          width: 30%;
        }

        .link {
          margin: 1px;
          padding: 1px;
          font-size: 30px;
        }
      `}</style>
    </div>
  </ColorContext.Provider>
);

export default App;

/* 

using a history context to move around the website??

*/
