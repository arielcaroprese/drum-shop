// React

import React from 'react'

// Estilos

import './Checkout.css'

// Componentes 

import CheckoutForm from '../CheckoutForm/CheckoutForm'

// Context

import CheckoutDetail from '../CheckoutDetail/CheckoutDetail'

const Checkout = () => {
    return (
        <div className='checkoutContainer'>
            <h1>Checkout</h1>
            <div className='checkoutColumns'>
                <CheckoutForm/>
                <CheckoutDetail/>
            </div>
        </div>
    )
}

export default Checkout
