import React , { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1574&limit=1')
            .then((response) => response.json())
            .then((json) => { console.log(json.results); setItem(json.results[0])})
            .catch(error => console.log('Error: ', error))
        }, 2000)
    }, [])

    return (
        <>
            <ItemDetail  item={item} />
        </>
    )
}

export default ItemDetailContainer
