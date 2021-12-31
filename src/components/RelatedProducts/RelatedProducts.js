//React

import React , { useEffect, useState } from 'react'

//Styles

import "./RelatedProducts.css"; 

// Components

import ItemList from "../ItemList/ItemList";
import Spinner from '../Spinner/Spinner';

// Firebase 

import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const RelatedProducts = ({itemId , categoryId}) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "productos"), where(documentId(),  "!=", itemId));
            const items = [];
            const querySnapshot = await getDocs(q);
            setIsLoading(false);
            querySnapshot.forEach((doc) => {
                items.push({...doc.data(), id: doc.id})
            });
            setItems(items)
        }
        getProducts();
    }, [itemId, categoryId]);

    return (
        isLoading
        ?
            <Spinner/>
        :
        <div className="RelatedProducts">
            <h2>Productos relacionados</h2>
            <ItemList items={items} />
        </div>
    )
}

export default RelatedProducts