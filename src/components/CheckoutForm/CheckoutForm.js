import React , {useState, useContext} from 'react'
import "./CheckoutForm.css"

// Context

import {CartContext} from "../../context/CartContext"

// Firebase

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// Componentes
import Button from '../Button/Button'

let orderId = ""

const initialState = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
};

const CheckoutForm = () => {

    const { items, totalPrice } = useContext(CartContext)

    const [orderSubmit, setOrderSubmit] = useState(false)
    const [buyer, setBuyer] = useState(initialState)

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setBuyer({...buyer, [name]: value})
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "orders"), {
            buyer: buyer,
            items: items,
            date: Timestamp.fromDate(new Date()),
            total: totalPrice(),
        });
        orderId = docRef.id;
        setOrderSubmit(true);
    }

    return (
        !orderSubmit
        ?
        <div className='formContainer'>
            <form onSubmit={onSubmitHandler}>
                <input 
                    id="name" 
                    name="name" 
                    value={buyer.name} 
                    placeholder="Nombre" 
                    onChange={onChangeHandler}
                ></input>
                <input 
                    id="lastname" 
                    name="lastname" 
                    value={buyer.lastname} 
                    placeholder="Apellido" 
                    onChange={onChangeHandler}
                ></input>
                <input 
                    id="email" 
                    name="email" 
                    value={buyer.email} 
                    placeholder="Email" 
                    onChange={onChangeHandler}
                ></input>
                <input 
                    id="phone" 
                    name="phone" 
                    value={buyer.phone} 
                    placeholder="Teléfono" 
                    onChange={onChangeHandler}
                ></input>
                <Button buttonClass="btnActive" buttonTitle="Confirmar pedido" />
            </form>
        </div>
        :
        <div className='successfulOrder'>
            <h2>Tu pedido ha sido completado.</h2>
            <p>Número de pedido: {orderId}</p>
        </div>
    )
}

export default CheckoutForm
