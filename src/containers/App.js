import React, {Component} from 'react';
import classes from './App.module.css';
import StoryLayout from '../hoc/StoryLayout/StoryLayout';
import StoryPicker from '../components/StoryPicker/StoryPicker';

class App extends Component {

  state = {
    story: null
  }

  storyPickHandler = (pickedStory) => {
    this.setState({story: pickedStory});
  }

  render() {

    let storyForm = <p>Choose a story to begin.</p>;

    if (this.state.story) {
      storyForm = (
          <StoryLayout story={this.state.story} />
      );
    }

    return (
      <div className={classes.App}>
        <StoryPicker clicked={this.storyPickHandler} />
        {storyForm}
      </div>
    );
  }

}

export default App;
