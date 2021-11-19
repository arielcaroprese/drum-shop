import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"

const CartWidget = (props) => {
    return (
        <div className="cartWidget">
            <FaShoppingCart/>
        </div>
    )
}

export default CartWidget 

