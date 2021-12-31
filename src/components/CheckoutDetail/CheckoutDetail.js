//React

import React, {useContext} from 'react'

// Context

import {CartContext} from "../../context/CartContext"

// Estilos

import './CheckoutDetail.css'

const CheckoutDetail = () => {

    const { items, totalPrice } = useContext(CartContext)

    return (
        <div className="checkoutDetail">
            {items.map((item) => (
                        <div key= {item.id} className='checkoutItem'>
                            <div className='checkoutItemImgContainer'>
                                <img src={item.img} alt={item.name} className="checkoutItemImg"></img>
                            </div>
                            <div className='checkoutItemDetail'>
                                <h4>{item.name}</h4>
                                <p>Cantidad: {item.qty}</p>
                                <p>Precio: $ {item.qty * item.price}</p>
                            </div>
                        </div>
                ))}
            <p className='checkoutTotalPrice'>Precio total: $ {totalPrice()}</p>
        </div>
    )
}

export default CheckoutDetail
