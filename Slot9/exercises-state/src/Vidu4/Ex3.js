import { useState } from 'react';

function Toggle(){
    const[show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show)
    };
    return(
        <div>
            <button onClick={handleClick}>
                {show ? "Show" : "Hide"}
            </button>
            <div>
                {show ? "" : " Toggle Me" }
            </div>
        </div>
    )
}
export default Toggle;