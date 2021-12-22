import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

// Firebase

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const params = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        const getItem = async () => {
            const q = query(collection(db, "productos"), where("id", "==", params.id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setItem(doc.data())
            });
        }
        getItem();
    }, [params.id])

    return (
        <>
            <ItemDetail  item={item} />
        </>
    )
}

export default ItemDetailContainer
