import React from 'react';
import SlotLine from './SlotLine/SlotLine';
// import classes from './SlotLinesBuilder.module.css';

const slotLinesBuilder = (props) => {
    
    let allLines = props.story.storyText.map((line, i) => {
            return (
                <SlotLine
                    key={props.story.title + i} 
                    leftText={line.leftText}
                    blankSlot={line.blankSlot}
                    rightText={line.rightText}
                    show={props.show} />
            )
        });

    return (
        <React.Fragment>
            <h3>{props.story.title}</h3>
            {allLines}
        </React.Fragment>
    )
}

export default slotLinesBuilder;