import React from 'react';
// import classes from './ToggleButton.module.css';

const toggleButton = (props) => {

    return (
        <button onClick={props.clicked}>Show Words</button>
    )
    
}

export default toggleButton;