import React from 'react';
import './button-list.css';

const ButtonList = ({onAddIngredient, darkTheme}) => {

    const arrBtn = [
        {name: 'salad', label: 'Salad'},
        {name: 'bacon', label: 'Bacon'},
        {name: 'cheese', label: 'Cheese'},
        {name: 'meat', label: 'Meat'}
    ]

    const buttons = arrBtn.map(({name, label}) => {
        return (
            <button className={`btn ${name}-btn`}
                key={name}
                onClick={() => onAddIngredient(label)}>{label}</button>
        )
    })

    const clazz = darkTheme ? 'dark-mode' : null;

    return (
        <>
            <div className={`choose-ingredient ${clazz}`}>Create your personal Burger :)</div>
            <div className="button-list">
                {buttons}
            </div>
        </>
    )
}

export default ButtonList;