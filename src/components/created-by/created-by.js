import React from 'react';
import './created-by.css';

const CreatedBy = ({darkTheme}) => {

    const clazz = darkTheme ? 'dark-mode' : null;

    return (
        <div className={`created-by ${clazz}`}>Created with React and CSS by Alex Andro</div>
    )
}

export default CreatedBy;