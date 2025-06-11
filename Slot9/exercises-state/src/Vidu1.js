import React, { useState } from 'react';

/**
 * A React component that displays a counter with a button.
 * Clicking the button increments the counter and updates the displayed count.
 */

function Counters() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Counters;
