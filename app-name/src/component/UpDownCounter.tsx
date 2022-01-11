import React, { useState } from "react";
import "./UpDownCounter.css"

function UpDownCounter() {
    const [upDownCounter, setUpDownCounter] = useState<number>(0);
        return(
        <div className="UpDownCounter">

            <button onClick={() => setUpDownCounter((count)=> count+1)}>Up</button>
            <h2>Count: {upDownCounter}</h2>
            <button onClick={() => setUpDownCounter((count)=> count-1)}>Down</button>
            
        </div>
    );
};

export default UpDownCounter;

//another way or doing it
/// ***** BUT when you called functions in App.tsx we have to call it 3 times!!!
/*

function UpDownCounter() {
    const [upDownCounter, setUpDownCounter] = useState<number>(0);
        function plusOne() {
            setUpDownCounter(upDownCounter+1);
        };
        function minusOne() {
            setUpDownCounter(upDownCounter-1)
        }
    return(
        <div className="UpDownCounter">

            <button onClick={() => plusOne()}>Up</button>
            <h2>Count: {upDownCounter}</h2>
            <button onClick={() => minusOne())}>Down</button>
            
        </div>
    );
};


*/