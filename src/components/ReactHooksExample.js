import React, {
  useState
} from 'react';

function ReactHooksExample() {
  const [count, setCount] = useState(['o']);
  console.log(count);
  return(
    <div>
      <p>H
      {
        count.map(o => o)
      }
      ks</p>
      <div className="flex">
        <button className="green" onClick={() => setCount([...count, 'o'])} title="Click to Increment">
        +</button>
        <button onClick={() => setCount(['o'])} title="Click to Reset">
        {
          count.length
        } </button>
        <button className="red" onClick={() => {
          count.pop();
          setCount([...count]);
        }} title="Click to Decrement">
        -</button>
      </div>
    </div>
  )
}

export default ReactHooksExample;