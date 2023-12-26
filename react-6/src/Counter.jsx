
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
            <h3 className="counter">Counter is : <strong>{count}</strong></h3>
            <div>
            <button className="btn" onClick={increaseCounter}>Increase</button>
            <button className="btn" onClick={decreaseCounter}>Decrese</button>
            </div>
        </>
    )
}

export default Counter