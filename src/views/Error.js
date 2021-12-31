import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button/Button'

const Error = () => {
    return (
        <div className='errorContainer'>
            <h1>El producto no existe</h1>
            <Link to="/">
                <Button buttonTitle="Volver al inicio" buttonClass="btnActive"/>
            </Link>
        </div>
    )
}

export default Error
