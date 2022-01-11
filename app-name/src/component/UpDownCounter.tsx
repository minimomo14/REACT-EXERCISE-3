import React, { useState } from "react";
import "./UpDownCounter.css"


function count(num) {
    var s = "";
    for(var i = 1; i <= num; i++) {
      s += i;
  
      if (i < (num)) {
        s += ', ';
      }
    }
    return s;
  }

function UpDownCounter(num) {
    const [upDownCounter, setUpDownCounter] = useState(false);
    let clickButton = "";
    for (let i = 0, i<num; i++) {
        clickButton =+ 1;
    } if (upDownCounter === true) {
        //up by 1
    }
    // else (Down by 1);
    // create buttons that...
    // set Up by +1
    // set Down by -1
    return(
        <div className="UpDownCounter">
            {upDownCounter ?
            <button onClick={() => setUpDownCounter(true)}>Up</button>:
            <button onClick={() => setUpDownCounter(false)}>Down</button>
            }
        </div>
    );
};

export default UpDownCounter;