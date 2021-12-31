import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item }) => {

    const [add, setAdd] = useState(false)

    const { addItem } = useContext(CartContext)
    
    return (
        <div className="ItemDetailContainer">
            <div className='imgItemDetailContainer'>
                <img src={item.img} alt={item.title} className="imgItemDetail"></img>
            </div>
            <div className="ItemDetail">
                <h1>{item.title}</h1>
                <p>ID: {item.id}</p>
                <p>{item.description}</p>
                <p>Stock: {item.stock}</p>
                {
                    !add ?
                     <ItemCount onClick={() => {setAdd(true)}} item={item} stock={item.stock} initial={1} addItem={addItem}/>
                    :
                    <div>
                        <span>`¡Agregaste tus productos al carrito!`</span>
                        <Link to='/cart'>Ir al carrito</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail

