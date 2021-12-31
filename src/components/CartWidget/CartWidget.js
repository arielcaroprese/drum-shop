import React, { useContext } from "react";
import "./CartWidget.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {

    const {items} = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => 
        itemsInCart = itemsInCart + item.qty
    )

    return (
        <Link to="/cart" className="cartWidget">
            <FaShoppingCart />
            <span className={ itemsInCart === 0 ? "cartCounterNone" : "cartCounter" }>{itemsInCart}</span>
            </Link>
    )
}

export default CartWidget 

