import React, {useContext} from 'react'
import {CartContext} from "../../context/CartContext"


const Cart = () => {
    const { items, removeItem, clear  } = useContext(CartContext)

    return (
        <div>
            {
                items.map((item) => (
                    <div key= {item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.id}</p>
                        <p>{item.qty}</p>
                        <button onClick={() => removeItem(item.id)}>Borrar</button>
                    </div>
                ))
            }
            <button onClick={() => clear()}>Borrar todo</button>
        </div>
    )
}

export default Cart
