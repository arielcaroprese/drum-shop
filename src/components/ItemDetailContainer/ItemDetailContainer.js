import React from 'react';
import "./ItemDetailContainer.css"; 
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
    const addToCart = (counter) => {
        let prod;
        counter > 1 ? prod = 'productos' : prod = 'producto';
        alert(`Agregaste ${counter} ${prod} al carrito.`)
    }

    return (
        <div className="ItemListContainer">
            <ItemCount stock={5} initial={1} onAdd={addToCart}/>
        </div>
    )
}

export default ItemListContainer
