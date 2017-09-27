import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class IsTwo extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.checked;
    this.props.onChange(value);
  }

  render() {
    return (
      <Checkbox
        onChange={this.handleChange}
        value={this.props.value}
      > 2 for 1
      </Checkbox>
    );
  }
}

export default IsTwo;
