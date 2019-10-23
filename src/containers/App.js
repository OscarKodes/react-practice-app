import React, {Component} from 'react';
import classes from './App.module.css';
import StoryLayout from '../hoc/StoryLayout/StoryLayout';

class App extends Component {

  state = {
    story: [
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
      },
    ]
  }

  render() {
    return (
      <div className={classes.App}>
        <div>Story Selector Button - show, hide</div>
        <StoryLayout story={this.state.story} />
      </div>
    );
  }

}

export default App;
