import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
    const addToCart = (counter) => {
        let prod;
        counter > 1 ? prod = 'productos' : prod = 'producto';
        alert(`Agregaste ${counter} ${prod} al carrito.`)
    }
    return (
        <div className="ItemDetailContainer">
            <img src={item.thumbnail} alt={item.title} className="imgItemDetail"></img>
            <div className="ItemDetail">
                <h1>{item.title}</h1>
                <p>ID: {item.id}</p>
                <p>Stock: {item.available_quantity}</p>
                <ItemCount stock={item.available_quantity} initial={1} onAdd={addToCart}/>
            </div>
        </div>
    )
}

export default ItemDetail

