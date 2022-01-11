import React, { useState } from "react";
import "./UpDownCounter.css"

function UpDownCounter() {
    const [upDownCounter, setUpDownCounter] = useState(0);
        return(
        <div className="UpDownCounter">

            <button onClick={() => setUpDownCounter((count)=> count+1)}>Up</button>
            <h2>Count: {upDownCounter}</h2>
            <button onClick={() => setUpDownCounter((count)=> count-1)}>Down</button>
            
        </div>
    );
};

export default UpDownCounter;