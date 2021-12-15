import React, { useContext } from "react";
import "./CartWidget.css"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {items} = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => 
        itemsInCart = itemsInCart + item.qty
    )

    return (
        <Link to="/cart" className="cartWidget">
            <p>{itemsInCart}</p>
            <FaShoppingCart/>
        </Link>
    )
}

export default CartWidget 

