import React, { useState, useEffect } from "react";

const Activities = () => {
  const [showForm, setState] = useState(false);
  const [list, setList] = useState([]);
  const [act, setAct] = useState({
    name: "type your activity name here",
    rating: 0
  });

  useEffect(() => {
    //graphql Query to get them activities baby
    // then set them to the state
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
    <div className="activites">
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
            onChange={handleActivity}
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
      <h1> Activities List </h1>
      {list.map(el => row(el))}
    </div>
  );
};

const row = ({ name, value }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};

// get an array of activites objects and pass them as
// arguments to the rows and render that page baby

export default Activities;
