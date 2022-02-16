/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Quote from './Components/pages/Quote';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
