import React, { Component } from 'react';
import TextInput from './TextInput';
import IsTwo from './IsTwo';
import Button from './Button';
import List from './List';
import round from './round';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diameter: '',
      price: '',
      isTwo: false,
      area: 0,
      areaPerPound: 0,
      validPizza: false,
      savedPizzas: [],
    };

    this.handleDiameterChange = this.handleDiameterChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleIsTwoChange = this.handleIsTwoChange.bind(this);
    this.handleSavePizza = this.handleSavePizza.bind(this);
    this.handleRemoveSavedPizza = this.handleRemoveSavedPizza.bind(this);
  }

  handleDiameterChange(diameter) {
    this.setState({
      diameter
    }, () => {
      this.calculate();
    });
  }

  handlePriceChange(price) {
    this.setState({
      price
    }, () => {
      this.calculate();
    });
  }

  handleIsTwoChange(isTwo) {
    this.setState({
      isTwo
    }, () => {
      this.calculate();
    });
  }

  handleSavePizza() {
    this.setState({
      savedPizzas: [...this.state.savedPizzas, {
        diameter: this.state.diameter,
        price: this.state.price,
        isTwo: this.state.isTwo,
        area: this.state.area,
        areaPerPound: this.state.areaPerPound,
      }]
    });

    this.setState({
      diameter: '',
      price: '',
      isTwo: false,
    }, () => {
      this.calculate();
    });
  }

  handleRemoveSavedPizza(id) {
    this.setState(prevState => ({ savedPizzas: prevState.savedPizzas.filter((pizza, i) => i !== id) }));
  }

  calculate() {
    const radius = this.state.diameter / 2;
    let area = Math.PI * radius * radius;
    area = this.state.isTwo ? area * 2 : area;
    let areaPerPound = area / this.state.price || 0;
    areaPerPound = Number.isFinite(areaPerPound) ? areaPerPound : 0;
    const validPizza = !!area && !!areaPerPound;

    this.setState({
      area,
      areaPerPound,
      validPizza,
    });
  }

  render() {
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
          min="0"
        />
        <TextInput
          id="price"
          label="Price"
          type="number"
          unit="£"
          onChange={this.handlePriceChange}
          value={this.state.price}
          placeholder="Please enter the price of the pizza"
          min="0"
        />
        <IsTwo
          onChange={this.handleIsTwoChange}
          value={this.state.isTwo}
        />
        <p>Pizza area: {round(this.state.area)} in<sup>2</sup></p>
        <p>Pizza area per pound: {round(this.state.areaPerPound)} in<sup>2</sup>/£ </p>
        <Button
          onClick={this.handleSavePizza}
          disabled={!this.state.validPizza}
        />
        <List
          pizzas={this.state.savedPizzas}
          onClick={this.handleRemoveSavedPizza}
        />
      </div>
    )
  }
}

export default Form;
