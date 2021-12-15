import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ item }) => {

    const [add, setAdd] = useState(false)

    const { addItem } = useContext(CartContext)

    //este renderizado condicional lo voy a usar después pero haciendo un find del id
    const addToCart = () => {
        setAdd(!add)
    }

    return (
        <div className="ItemDetailContainer">
            <img src={item.thumbnail} alt={item.title} className="imgItemDetail"></img>
            <div className="ItemDetail">
                <h1>{item.title}</h1>
                <p>ID: {item.id}</p>
                <p>Stock: {item.available_quantity}</p>
                {
                    add ?
                    <div>
                        <p>`¡Agregaste tus productos al carrito!`</p>
                        <Link to='/cart'>Ir al carrito</Link>
                    </div>
                    :
                    <ItemCount onClick={(add) => {setAdd(!add)}} item={item} stock={item.available_quantity} initial={1} addItem={addItem}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail

