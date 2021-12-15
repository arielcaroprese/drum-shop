import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from "../../context/CartContext"
import './Cart.css'


const Cart = () => {
    const { items, removeItem, clear, totalPrice } = useContext(CartContext)

    return (
        <div className='cartContainer'>
            {items.length === 0 &&
                <>
                    <p>El carrito está vacío</p>
                    <Link to="/"> Volver a la tienda </Link>
                </>
            }            
            {items.length > 0 &&
                items.map((item) => (
                    <div key= {item.id} className='cartItem'>
                        <img src={item.thumbnail} alt={item.name} className="cartItemImg"></img>
                        <div className='cartItemDetail'>
                            <h4>{item.name}</h4>
                            <p>{item.id}</p>
                        </div>
                        <div className='cartItemPrice'>
                            <p>Cantidad: {item.qty}</p>
                            <p>Precio: $ {item.qty * item.price}</p>
                            <button onClick={() => removeItem(item.id)}>Borrar</button>
                        </div>
                    </div>
                ))
            }
            <p className='cartTotalPrice'>Precio total: $ {totalPrice()}</p>
            <button onClick={() => clear()}>Borrar todo</button>
            <button onClick={console.log()}>Continuar compra</button>
        </div>
    )
}

export default Cart
