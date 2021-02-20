import React from 'react';
import './theme-button.css';

const ThemeButton = ({onToggleTheme, darkTheme}) => {

    const clazz = darkTheme ? 'dark-btn-mode' : null;
    const label = darkTheme ? 'Light' : 'Dark';

    return (
        <button className={`darkmode-btn ${clazz}`}
        onClick={() => onToggleTheme()}>{label} Mode</button>
    )
}

export default ThemeButton;