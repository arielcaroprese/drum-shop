//React

import React , { useEffect, useState } from 'react'

//Styles

import "./ItemListContainer.css"; 

// Components

import ItemList from "../ItemList/ItemList";

// Firebase 

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = ( {categoryId} ) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "productos"), where("category", "==", categoryId));
            const items = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            });
            setItems(items)
        }
        getProducts();
    }, [categoryId]);

    return (
        <div className="ItemListContainer">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer