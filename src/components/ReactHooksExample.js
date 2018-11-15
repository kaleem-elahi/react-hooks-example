import React, {
  useState
} from 'react';

function ReactHooksExample() {
  const [count, setCount] = useState(['O', 'O']);
  console.log(count);
  return(
    <div>
      <p>h
      {
        count.map(o => o)
      }
      ks</p>
      <div className="flex">
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
    </div>
  )
}

export default ReactHooksExample;