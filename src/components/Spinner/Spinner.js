import React from 'react'

// Fa Icons

import { FaSpinner } from 'react-icons/fa';

// Estilos

import "./Spinner.css"

const Spinner = () => {
    return (
        <div className="spinnerContainer">
            <FaSpinner className='spinner' size="32px"/>
        </div>
    )
}

export default Spinner
