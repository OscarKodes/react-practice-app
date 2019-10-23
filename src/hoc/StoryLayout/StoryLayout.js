import React, {Component} from 'react';
import SlotLinesBuilder from '../../components/SlotLinesBuilder/SlotLinesBuilder';
import ClickButton from '../../components/ClickButton/ClickButton';
import classes from './StoryLayout.module.css';

class StoryLayout extends Component {

  state = {
    textShow: false
  }

  componentDidUpdate(nextProps) {
      if (this.props !== nextProps) {
          this.setState({textShow: false});
      }
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
          story={this.props.story}
          show={this.state.textShow} />
        <ClickButton 
          btnType="primary"
          clicked={this.showToggleHandler}>Show Story</ClickButton>
      </div>
    );
  }

}

export default StoryLayout;