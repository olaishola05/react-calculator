/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Keypads from './Keypad';
import Button from './Buttons';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  handleClick(e) {
    this.setState((operate) => calculate(operate, e.target.value));
  }

  render() {
    const { total, next, operation } = this.state;
    const data = next || operation || total || 0;

    return (
      <div className="calculator">
        <div className="output">
          <span className="value">{data}</span>
        </div>
        <Keypads>
          <Button label="AC" value="AC" handleClick={this.handleClick} />
          <Button label="+/-" value="+/-" handleClick={this.handleClick} />
          <Button label="%" value="%" handleClick={this.handleClick} />
          <Button label="÷" value="÷" handleClick={this.handleClick} />

          <Button label="7" value="7" handleClick={this.handleClick} />
          <Button label="8" value="8" handleClick={this.handleClick} />
          <Button label="9" value="9" handleClick={this.handleClick} />
          <Button label="x" value="x" handleClick={this.handleClick} />

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

export default Calculator;
