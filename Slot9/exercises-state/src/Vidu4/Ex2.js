import { useState } from 'react';

function Input() {
  const [input, setInput] = useState('abc');

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => {setInput(e.target.value);
          console.log(e.target.value)
        }} 
      />
      <p>Input text : {input}</p> 
    </div>
  );
}
  
export default Input;
