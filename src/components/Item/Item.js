import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ( {item} ) => {
    return (
        <Link to={`/item/${item.id}`}>
            <div className="item">
                <div className="itemImageContainer">
                    <img src={item.img} alt={item.title} className="itemImage"></img>
                </div>
                <p className="itemTitle">{item.title}</p>
                <p className="itemPrice">$ {item.price}</p>
            </div>
        </Link>
    )
}

export default Item
