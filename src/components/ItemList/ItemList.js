import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ( {items} ) => {
    return (
        <div className="ItemList">
            {items.map((item) => {
                return <Item item={item} key={item.id} />
            })
            }
        </div>
    )
}

export default ItemList


