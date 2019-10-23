import React from 'react';
import ClickButton from '../ClickButton/ClickButton';

const ALL_STORIES = [
    {
        title: "Good Morning",
        storyText: [
            {
                leftText: "Good Morning, ",
                blankSlot: "Name",
                rightText: "."
            },
            {
                leftText: "Why are your ",
                blankSlot: "Plural Noun",
                rightText: " all over the room?"
            },
            {
                leftText: "Whatever, just get ready for the ",
                blankSlot: "Noun",
                rightText: ". We have to hurry. We don't want to be late."
            }
        ]
    },
    {
        title: "Meeting",
        storyText: [
            {
                leftText: "Thanks for coming to the ",
                blankSlot: "Place",
                rightText: "."
            },
            {
                leftText: "We are here to discuss the dire matter of ",
                blankSlot: "Plural Noun",
                rightText: "."
            },
            {
                leftText: "Does anyone have any thoughts about how to ",
                blankSlot: "Verb",
                rightText: ""
            },
            {
                leftText: " the ",
                blankSlot: "Plural Noun",
                rightText: "?"
            }
        ]
    },
    {
        title: "Invitation",
        storyText: [
            {
                leftText: "You have been invited to the ",
                blankSlot: "Noun",
                rightText: "."
            },
            {
                leftText: "If you are ",
                blankSlot: "Verb",
                rightText: "ing. Please let us know ASAP."
            },
        ]
    }
];

const storyPicker = (props) => {

    const storyBtns = ALL_STORIES
        .map((story, i) => {
            return (
                <ClickButton 
                    key={"story" + i} 
                    clicked={() => props.clicked(story)}>{story.title}</ClickButton>
            )
        })

    return (
        <React.Fragment>
            <h1>Story Picker</h1>
            {storyBtns}
        </React.Fragment>
    )
}

export default storyPicker;