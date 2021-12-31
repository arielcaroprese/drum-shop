// React

import React, {useContext} from 'react'
import { FaTrash } from 'react-icons/fa'

// Router dom

import { Link } from 'react-router-dom'

// Context

import {CartContext} from "../../context/CartContext"

// Estilos

import './Cart.css'

// Componentes

import Button from '../Button/Button'

const Cart = () => {
    const { items, removeItem, clear, totalPrice } = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <h1>Carrito</h1>
            {items.length === 0 &&
                <>
                    <h2>El carrito está vacío</h2>
                    <Link to="/">
                        <Button buttonTitle="Volver al inicio" buttonClass="btnActive"/>
                    </Link>
                </>
            }            
            {items.length > 0 &&
                <>
                {items.map((item) => (
                        <div key= {item.id} className='cartItem'>
                            <div className='cartItemImgCaontainer'>
                                <img src={item.img} alt={item.name} className="cartItemImg"></img>
                            </div>
                            <div className='cartItemDetail'>
                                <h4>{item.name}</h4>
                                <p>ID: {item.id}</p>
                            </div>
                            <div className='cartItemPrice'>
                                <p>Cantidad: {item.qty}</p>
                                <p>Precio: $ {item.qty * item.price}</p> 
                            </div>
                            <FaTrash className="removeItem" onClick={() => removeItem(item.id)}/>
                        </div>
                ))}
                <span className='cartTotalPrice'>Precio total: $ {totalPrice()}</span> 
                <div className='cartButtons'>
                <div onClick={() => clear()}>
                    <Button buttonTitle="Vaciar Carrito" buttonClass="btnDisabled"/>         
                </div>
                <Link to="/checkout">
                    <Button buttonTitle="Continuar compra" buttonClass="btnActive"/>
                </Link>
                </div>
                </>
            }
        </div>
    )
}

export default Cart
