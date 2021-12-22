import React, { createContext, useState} from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.find(item => item.id === id)
        return found;
    }

    const addItem = (item, qty) => {
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
                if (prod.id === item.id) {
                    prod.qty += qty
                }
                return prod
            }))
            :
            setItems([...items, {id: item.id, name: item.title, price: item.price, qty: qty, img: item.img}])

    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clear = () => {
        setItems([])   
    }

    const totalPrice = () => {
        return items.reduce ( (acum, value) => (acum + (value.qty * value.price)) , 0)
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clear, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
};