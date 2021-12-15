import React, {useState} from "react";
import "./ItemCount.css";
import { FaShoppingCart } from "react-icons/fa";

const ItemCount = ({item, stock, initial, addItem}) => {

    const [counter, setCounter] = useState(initial);

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
            {
                counter > 0 ?
                <button className="addToCart" onClick={() => addItem(item, counter)}>
                    <FaShoppingCart/> Agregar al carrito
                </button>
                :
                <button className="addToCart disabled">
                    <FaShoppingCart/> Agregar al carrito
                </button>
            }
            
        </div>
    );
};
 
export default ItemCount;
