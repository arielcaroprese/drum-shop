import React, {useState} from "react";

import "./ItemCount.css";

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(parseInt(initial));

    const handleCounterUp = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const handleCounterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="ItemCount">
            <button className="button" onClick={handleCounterDown}>-</button>
            <p className="counter">{counter}</p>
            <button className="button" onClick={handleCounterUp}>+</button>
        </div>
    );
};
 
export default ItemCount;
