import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick();
  }

  render() {
    return (
      <Button onClick={this.handleClick} disabled={this.props.disabled}>Save</Button>
    );
  }
}

export default TextInput;
