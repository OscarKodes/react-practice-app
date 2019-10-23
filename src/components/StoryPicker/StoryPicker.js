import React from 'react';
import ClickButton from '../ClickButton/ClickButton';
import classes from './StoryPicker.module.css';

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
                rightText: " all over the room? Be sure to clean that up!"
            },
            {
                leftText: "By the way, the weather will be very ",
                blankSlot: "Adjective",
                rightText: " today."
            },
            {
                leftText: "Be sure to bring your ",
                blankSlot: "Noun",
                rightText: "!"
            },
            {
                leftText: "I can't believe your were still ",
                blankSlot: "Verb",
                rightText: "ing at this time!"
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
            },
            {
                leftText: "In any case, someone should really ",
                blankSlot: "Verb",
                rightText: ""
            },
            {
                leftText: " those ",
                blankSlot: "Plural Noun",
                rightText: ". It's getting out of hand."
            },
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
                leftText: "At this event we will ",
                blankSlot: "Verb",
                rightText: ""
            },
            {
                leftText: " ",
                blankSlot: "Name",
                rightText: ""
            },
            {
                leftText: " and ",
                blankSlot: "Name",
                rightText: "."
            },
            {
                leftText: "If you are ",
                blankSlot: "Verb",
                rightText: "ing. Please let us know ASAP."
            },
        ]
    },
    {
        title: "Isekai'd",
        storyText: [
            {
                leftText: "Welcome, to the world of ",
                blankSlot: "Plural Noun",
                rightText: "."
            },
            {
                leftText: "Here you are a ",
                blankSlot: "Noun",
                rightText: "."
            },
            {
                leftText: "And you can ",
                blankSlot: "Verb",
                rightText: " all you want!"
            },
            {
                leftText: "But you must remember that your mission is to ",
                blankSlot: "Verb",
                rightText: ""
            },
            {
                leftText: " ",
                blankSlot: "Plural Noun",
                rightText: ". We hope you enjoy your stay."
            }
        ]
    },
];

const storyPicker = (props) => {

    const storyBtns = ALL_STORIES
        .map((story, i) => {
            return (
                <ClickButton 
                    key={"story" + i} 
                    btnType="secondary"
                    clicked={() => props.clicked(story)}>{story.title}</ClickButton>
            )
        })

    return (
        <div className={classes.StoryPicker}>
            {storyBtns}
        </div>
    )
}

export default storyPicker;