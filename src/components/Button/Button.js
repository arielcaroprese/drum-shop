import React from 'react'
import "./Button.css"

const Button = ( {buttonTitle, buttonClass} ) => {
    return (
        <button className={`button ${buttonClass}`}>
            {buttonTitle}
        </button>
    )
}

export default Button
