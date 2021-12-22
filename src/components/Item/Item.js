import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ( {item} ) => {
    return (
        <Link to={`/item/${item.id}`}>
            <div className="item">
                <img src={item.img} alt={item.title} className="itemImage"></img>
                <p className="itemTitle">{item.title}</p>
                <p className="itemId">{item.id}</p>
                <p className="itemPrice">$ {item.price}</p>
            </div>
        </Link>
    )
}

export default Item
