import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import round from './round';

class List extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = parseInt(e.target.dataset.id, 10);

    e.preventDefault();
    this.props.onClick(id);
  }

  render() {
    return (
      <div>
      {this.props.pizzas.length > 0 &&
        <Table>
          <thead>
            <tr>
              <th>Size (inch)</th>
              <th>Price (£)</th>
              <th>2 for 1</th>
              <th>Area (in<sup>2</sup>)</th>
              <th>Area per pound (in<sup>2</sup>/£)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.pizzas.map((pizza, i) => {
            return (
              <tr key={i}>
                <td>{pizza.diameter}</td>
                <td>{pizza.price}</td>
                <td>{pizza.isTwo.toString()}</td>
                <td>{round(pizza.area)}</td>
                <td>{round(pizza.areaPerPound)}</td>
                <td><a href="#" data-id={i} onClick={this.handleClick}>&times;</a></td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      }
      </div>
    );
  }
}

export default List;
