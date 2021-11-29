import React from 'react'
import './Item.css'

const Item = ( {item} ) => {
    return (
        <div className="item">
            <img alt={item.title} src={item.thumbnail} className="itemImage"></img>
            <p className="itemTitle">{item.title}</p>
            <p className="itemId">{item.id}</p>
            <p className="itemPrice">$ {item.price}</p>
        </div>
    )
}

export default Item
