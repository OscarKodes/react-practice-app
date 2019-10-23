import React, {Component} from 'react';
import SlotLinesBuilder from '../../components/SlotLinesBuilder/SlotLinesBuilder';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import classes from './StoryLayout.module.css';

class StoryLayout extends Component {

  state = {
    textShow: false
  }

  showToggleHandler = () => {
    this.setState(prevState => {
      return {textShow: !prevState.textShow}
    });
  }

  render() {
    return (
      <div className={classes.StoryLayout}>
        <SlotLinesBuilder 
          text={this.props.story}
          show={this.state.textShow} />
        <ToggleButton clicked={this.showToggleHandler} />
      </div>
    );
  }

}

export default StoryLayout;