import React from 'react';
import classes from './SlotLine.module.css';

const slotLine = (props) => {

    let spanClass = classes.invis;

    if (props.show) {
        spanClass = classes.show;
    }

    return (
        <p className={classes.SlotLine}>
            <span className={spanClass}>{props.leftText}</span>
            <input type="text" placeholder={props.blankSlot}/>
            <span className={spanClass}>{props.rightText}</span>
        </p>
    )
    
}

export default slotLine;