import React from 'react';
import './theme-button.css';

const ThemeButton = ({onToggleTheme}) => {

    return (
        <label className='switch'>
            <input type='checkbox' 
            onChange={onToggleTheme}/>
            <span className='slider round'></span>
        </label>
    )
}

export default ThemeButton;