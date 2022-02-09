/* eslint-disable comma-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Keypads from './Keypad';
import Outputs from './Output';
import Button from './Buttons';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor() {
    super();
    // eslint-disable-next-line react/no-unused-state
    this.state = {
      total: null,
      next: null,
      operation: null,
      value: '',
    };
  }

  handleClick = (e) => {
    const btnValue = e.target.getAttribute('value');
    const result = calculate(
      this.setState((prevState) => prevState === btnValue),
      btnValue
    );

    console.log(result);
  };

  render() {
    return (
      <div className="calculator">
        <Outputs data={this.state.value || this.state.next || this.state.operation || this.state.total} />
        <Keypads>
          <Button label="AC" value="Clear" handleClick={this.handleClick} />
          <Button label="+/-" value="+/-" handleClick={this.handleClick} />
          <Button label="%" value="%" handleClick={this.handleClick} />
          <Button label="÷" value="÷" handleClick={this.handleClick} />

          <Button label="7" value="7" handleClick={this.handleClick} />
          <Button label="8" value="8" handleClick={this.handleClick} />
          <Button label="9" value="9" handleClick={this.handleClick} />
          <Button label="X" value="x" handleClick={this.handleClick} />

          <Button label="4" value="4" handleClick={this.handleClick} />
          <Button label="5" value="5" handleClick={this.handleClick} />
          <Button label="6" value="6" handleClick={this.handleClick} />
          <Button label="-" value="-" handleClick={this.handleClick} />

          <Button label="1" value="1" handleClick={this.handleClick} />
          <Button label="2" value="2" handleClick={this.handleClick} />
          <Button label="3" value="3" handleClick={this.handleClick} />
          <Button label="+" value="+" handleClick={this.handleClick} />

          <Button label="0" value="0" handleClick={this.handleClick} />
          <Button label="." value="." handleClick={this.handleClick} />
          <Button label="=" value="=" handleClick={this.handleClick} />
        </Keypads>
      </div>
    );
  }
}
