import React, { useState, useEffect } from "react";

const Activities = () => {
  const [showForm, setState] = useState(false);
  const [list, setList] = useState([]);
  const [act, setAct] = useState({
    name: "",
    rating: 0
  });

  useEffect(() => {
    //graphql Query to get them activities baby
    // then set them to the state
    setList([{ name: "sleep", rating: 10 }]);
  });

  const toggleActivity = () => {
    setState(!showForm);
  };

  const handleActivity = event => {
    setAct({ ...act, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    // send Graphql mutation with Act
    toggleActivity();
  };

  return (
    <div className="activities">
      <h1>Activities</h1>

      {showForm || (
        <button onClick={() => toggleActivity()}>Add a new Activity</button>
      )}

      {!showForm || (
        <form>
          <input
            name="name"
            type="text"
            value={act.name}
            onChange={handleActivity}
          />
          <input
            name="rating"
            type="number"
            value={act.rating}
            max={10}
            min={0}
            onChange={handleActivity}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}

      <h1> Activities List </h1>
      {list.map(el => row(el))}
      <style jsx>{`
        .activities {
          display: flex;
          flex-direction: column;
          justify-content: top;
          align-items: center;
          background-color: #f1f1f1;
          width: 80%;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

const row = ({ name, rating }) => {
  return (
    <div className="row">
      <span>{name}</span>
      <span>{rating}</span>
      <style jsx>{`
        .row {
          display: flex;
          justify-content: space-between;
          width: 200px;
          background-color: purple;
        }
        span {
          color: white;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

// get an array of activites objects and pass them as
// arguments to the rows and render that page baby

export default Activities;
