import React from 'react';
import './reset-button.css';

const ResetButton = ({onDelAllIngredients, burgerFromChief}) => {

    const arrBtn = [
        {name: 'clear', label: 'Clear All', func: onDelAllIngredients},
        {name: 'chief', label: 'Burger from Chief', func: burgerFromChief}
    ]

    const buttons = arrBtn.map(({name, label, func}) => {

        return (
            <button className={`btn ${name}-btn`}
            key={name}
            onClick={() => `${func()}`}>{label}</button>
        )
    })

    return (
        <div className='button-list reset-buttons'>
            {buttons}
        </div>
    )
}

export default ResetButton;