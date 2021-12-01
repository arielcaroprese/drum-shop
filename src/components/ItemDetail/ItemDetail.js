import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    return (
        <div className="ItemDetailContainer">
            <img src={item.thumbnail} alt={item.title} className="imgItemDetail"></img>
            <div className="ItemDetail">
                <h1>{item.title}</h1>
                <p>ID: {item.id}</p>
                <p>Stock: {item.available_quantity}</p>
                <p>Descripción:</p>
            </div>
        </div>
    )
}

export default ItemDetail

