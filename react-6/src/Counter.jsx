
import { useState } from "react"


function Counter () {

        let [count, setCount] =  useState(7)
    
         function increaseCounter () {
            if (count < 20) setCount(count + 1)
         }
    
         function decreaseCounter () {
            if (count > 0 ) setCount(count - 1)
         }


    return (
        <>
            <h3>Counter is :{count}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <br />
            <button onClick={decreaseCounter}>Decrese</button>
        </>
    )
}

export default Counter