import React, {useState} from "react";
import "./ItemCount.css";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

const ItemCount = ({item, stock, initial, addItem}) => {

    const [counter, setCounter] = useState(initial);
    const [addStatus, setAddStatus] = useState(false);

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
        <div className="itemCountContainer">
            {!addStatus
            ?
            <>
                <div className="ItemCount">
                <button onClick={handleCounterDown} className="counterButton"><FaMinus/></button>
                <span className="counter">{counter}</span>
                <button onClick={handleCounterUp} className="counterButton"><FaPlus/></button>
                </div>
                {counter > 0 ?
                <div onClick={() => {
                    addItem(item, counter);
                    setAddStatus(true);
                }}>
                    <Button buttonTitle="Agregar al carrito" buttonClass="btnActive" />
                </div>
                                :
                <Button buttonTitle="Agregar al carrito" buttonClass="btnDisabled"/>
                }
            </>
            :
            <>
                <p><FaCheck/> Agregaste {counter}{counter > 1 ? " productos" : " producto"} al carrito</p>
                <Link to="/cart">
                    <Button buttonTitle="Ir al carrito" buttonClass="btnActive"/>
                </Link>

            </>
            }      
        </div>
    );
};
 
export default ItemCount;
