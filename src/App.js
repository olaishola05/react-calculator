/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
