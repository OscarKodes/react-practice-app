import React from 'react';
// import classes from './ClickButton.module.css';

const clickButton = (props) => {

    return (
        <button onClick={props.clicked}>{props.children}</button>
    )
    
}

export default clickButton;