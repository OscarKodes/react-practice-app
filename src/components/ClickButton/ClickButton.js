import React from 'react';
import classes from './ClickButton.module.css';

const clickButton = (props) => {

    return (
        <div className={classes.ClickButton}>
            <div 
                className={classes[props.btnType]} 
                onClick={props.clicked}>{props.children}</div>
        </div>            
    )
    
}

export default clickButton;