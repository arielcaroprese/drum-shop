import React , { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ( ) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1574&limit=12')
            .then((response) => response.json())
            .then((json) => { console.log(json.results); setItems(json.results)})
            .catch(error => console.log('Error: ', error))
        }, 2000)
    }, [])

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


