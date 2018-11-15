import React, { useState, useEffect } from "react";
// import "./styles.css";

function UseEffect() {
  let [names, setNames] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://uinames.com/api/?amount=25&region=nigeria")
      .then(response => response.json())
      .then(data => {
        setNames(data);
        setLoading(false);
      });
  }, []);

  return (
   <fieldset>
  <legend>useEffect</legend>

      <div className='list'>
      {
        loading && <center  className="loading">loading...</center>
      }
        {names.map((item, i) => (
          <div key={i} className="name">
            {item.name} {item.surname}
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default UseEffect;