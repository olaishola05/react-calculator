/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Keypad extends Component {
  render() {
    const { children } = this.props;
    return <div className="keypad">{children}</div>;
  }
}

Keypad.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Keypad;
