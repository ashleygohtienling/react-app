import React, { useState } from 'react'

function CounterExample(){
    const [count, setCount] = useState(10)

    return(
        <div>
        <h1> {count} </h1>
        <button onClick={() => setCount(count+7)}>
            Plus 
        </button> <br></br>
        <button onClick={() => setCount(count -2)}>
            Minus
        </button>
        </div> 

    )
 


}

export default CounterExample