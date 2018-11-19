import React, {
  useState
} from 'react';

function UseState() {
  const [count, setCount] = useState(['O', 'O']);
  console.log(count);
  return(
   <fieldset>
  <legend>useState</legend>
      <div className="flex">
      <p>h
      {
        count.map(o => <strong>{o}</strong>)
      }
      ks</p>
        <button className="red" onClick={() => {
          count.pop();
          setCount([...count]);
        }} title="Click to Decrement">
        -</button>
        <button onClick={() => setCount(['O', 'O'])} title="Click to Reset">
        {
          count.length
        } </button>
        <button className="green" onClick={() => setCount([...count, 'O'])} title="Click to Increment">
        +</button>
      </div>
 </fieldset>
  )
}

export default UseState;