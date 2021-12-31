import React , { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Componentes

import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'

// Estilos

import './ItemDetailContainer.css'

// Firebase

import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import RelatedProducts from '../RelatedProducts/RelatedProducts'
import Button from '../Button/Button'

const ItemDetailContainer = () => {
    const params = useParams();

    const [item, setItem] = useState({});
    const [itemExists, setItemsExists] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getItem = async () => {
            const q = query(collection(db, "productos"), where(documentId(), "==", params.id));
            const querySnapshot = await getDocs(q);
            setIsLoading(false);
            querySnapshot.forEach((doc) => {
                setItem({...doc.data(), id: params.id});
            }) 
            querySnapshot.empty 
                ?
                setItemsExists(false)
                :
                setItemsExists(true);
        }
        getItem();
    }, [params.id])

    return (
        isLoading
        ?
            <Spinner/>
        :
            itemExists
            ?
                <>
                    <ItemDetail  item={item} />
                    <RelatedProducts itemId={item.id} categoryId={item.category} />
                </>
            :
            <div className='errorContainer'>
                <h1>El producto no existe</h1>
                <Link to="/">
                    <Button buttonTitle="Volver al inicio" buttonClass="btnActive"/>
                </Link>
            </div>
    )
}

export default ItemDetailContainer
