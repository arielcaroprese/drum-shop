import React , { useEffect, useState } from 'react'
import "./ItemListContainer.css"; 
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ( {categoryId} ) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=6`)
            .then((response) => response.json())
            .then((json) => { console.log(json.results); setItems(json.results)})
            .catch(error => console.log('Error: ', error))
        }, 2000)
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer

//MLA1648