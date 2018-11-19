import React, { useContext } from "react";
// import ReactDOM from "react-dom";

const JediContext = React.createContext();

function Display() {
  const value = useContext(JediContext);
  console.log(useContext(JediContext), JediContext);
  return <div> Hey {value.name}, I am using hooks.</div>;
}

function UseContext() {
  return (
    <fieldset>
    <legend>useContext</legend>
      <JediContext.Provider value={{
        name: "Kaleem"
        }}>
        <Display />
      </JediContext.Provider>
    </fieldset>
  );
}

export default UseContext;