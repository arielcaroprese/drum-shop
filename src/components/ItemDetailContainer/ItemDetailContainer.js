import React , { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${id}`)
            .then((response) => response.json())
            .then((json) => { console.log(json); setItem(json)})
            .catch(error => console.log('Error: ', error))
        }, 2000)
    }, [id])

    return (
        <>
            <ItemDetail  item={item} />
        </>
    )
}

export default ItemDetailContainer
