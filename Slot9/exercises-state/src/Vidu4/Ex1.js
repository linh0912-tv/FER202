import React, { useState } from 'react';

function Counter (){
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={() => setCount(count+1)}>
                Increments
            </button>
            <p>Count : {count}</p>
        </div>
    )
}
export default Counter;