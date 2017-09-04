import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <FormGroup controlId={this.props.id}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <InputGroup>
          <FormControl
            type={this.props.type}
            onChange={this.handleChange}
            value={this.props.value}
            placeholder={this.props.placeholder}
          />
          <InputGroup.Addon>{this.props.unit}</InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default TextInput;
