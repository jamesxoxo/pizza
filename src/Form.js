import React, { Component } from 'react';
import TextInput from './TextInput';
import IsTwo from './IsTwo';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diameter: '',
      price: '',
      isTwo: false
    };

    this.handleDiameterChange = this.handleDiameterChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleIsTwoChange = this.handleIsTwoChange.bind(this);
  }

  handleDiameterChange(diameter) {
    this.setState({
      diameter
    });
  }

  handlePriceChange(price) {
    this.setState({
      price
    });
  }

  handleIsTwoChange(isTwo) {
    this.setState({
      isTwo
    });
  }

  round(num) {
    return Math.round(num * 100) / 100;
  }

  render() {
    const radius = this.state.diameter / 2;
    let area = Math.PI * radius * radius;
    area = this.state.isTwo ? area * 2 : area;
    const areaPerPound = area / this.state.price || 0;

    return (
      <div>
        <h1>Calculator</h1>
        <TextInput
          id="diameter"
          label="Pizza size"
          type="number"
          unit="inch"
          onChange={this.handleDiameterChange}
          value={this.state.diameter}
          placeholder="Please enter the size of the pizza"
        />
        <TextInput
          id="price"
          label="Price"
          type="number"
          unit="£"
          onChange={this.handlePriceChange}
          value={this.state.price}
          placeholder="Please enter the price of the pizza"
        />
        <IsTwo
          onChange={this.handleIsTwoChange}
          value={this.state.isTwo}
        />
        <p>Pizza area: {this.round(area)} in<sup>2</sup></p>
        <p>Pizza area per pound: {this.round(areaPerPound)} in<sup>2</sup>/£ </p>
      </div>
    )
  }
}

export default Input;
