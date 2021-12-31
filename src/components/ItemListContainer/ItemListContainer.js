//React

import React , { useEffect, useState } from 'react'

//Styles

import "./ItemListContainer.css"; 

// Components

import ItemList from "../ItemList/ItemList";
import Spinner from '../Spinner/Spinner';

// Firebase 

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = ( {categoryId} ) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (categoryId === "allCategories") {
            const getProducts = async () => {
                const q = query(collection(db, "productos"));
                const items = [];
                const querySnapshot = await getDocs(q);
                setIsLoading(false);
                querySnapshot.forEach((doc) => {
                    items.push({...doc.data(), id: doc.id})
                });
                setItems(items)
        }
        getProducts();
        }
        else {
            const getProducts = async () => {
            const q = query(collection(db, "productos"), where("category",  "==", categoryId));
            const items = [];
            const querySnapshot = await getDocs(q);
            setIsLoading(false);
            querySnapshot.forEach((doc) => {
                items.push({...doc.data(), id: doc.id})
            });
            setItems(items)
        }
        getProducts();
        }
    }, [categoryId]);

    return (
        isLoading
        ?
            <Spinner/>
        :
        <div className="ItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer