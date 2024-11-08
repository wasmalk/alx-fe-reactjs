import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', maxWidth: '200px', margin: '20px auto' }}>
      <p style={{ fontSize: '2em', margin: '10px 0' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 15px', fontSize: '1em' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 15px', fontSize: '1em' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px 15px', fontSize: '1em', backgroundColor: 'lightcoral', color: 'white' }}>Reset</button>
    </div>
  );
}

export default Counter;
