import React, {useEffect, useState} from 'react';
import "../TimeCounter/TimeCounter.css";

const TimeCounter = () => {

    const [counter,setCounter] = useState(0);


    useEffect(()=>{
        setTimeout(()=>{
            setCounter(counter => counter + 1);
        },1500)
    },[counter])

    return (
        <div className="timeContainer">
            <h1> You have spent {counter} seconds on this website !</h1>
        </div>
    )
}
export default TimeCounter;