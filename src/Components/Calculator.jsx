/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Keypads from './Keypad';
import Outputs from './Output';
import Button from './Buttons';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Outputs />
        <Keypads>
          <Button label="AC" value="Clear" />
          <Button label="+/-" value="+/-" />
          <Button label="%" value="%" />
          <Button label="÷" value="÷" />

          <Button label="7" value="7" />
          <Button label="8" value="8" />
          <Button label="9" value="9" />
          <Button label="X" value="x" />

          <Button label="4" value="4" />
          <Button label="5" value="5" />
          <Button label="6" value="6" />
          <Button label="-" value="-" />

          <Button label="1" value="1" />
          <Button label="2" value="2" />
          <Button label="3" value="3" />
          <Button label="+" value="+" />

          <Button label="0" value="0" className="btn-zero" />
          <Button label="." value="." />
          <Button label="=" value="equal" />
        </Keypads>
      </div>
    );
  }
}
