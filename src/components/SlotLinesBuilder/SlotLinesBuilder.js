import React from 'react';
import SlotLine from './SlotLine/SlotLine';
// import classes from './SlotLinesBuilder.module.css';

const slotLinesBuilder = (props) => {
    
    let allLines = null;

    if (props.text.length > 0) {
        allLines = props.text.map((line, i) => {
            return (
                <SlotLine
                    key={i} 
                    leftText={line.leftText}
                    blankSlot={line.blankSlot}
                    rightText={line.rightText}
                    show={props.show} />
            )
        });
    }

    return (
        <React.Fragment>
            {allLines}
        </React.Fragment>
    )
}

export default slotLinesBuilder;