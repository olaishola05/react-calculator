/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Output extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="output">
        <span className="value">{data}</span>
      </div>
    );
  }
}
Output.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Output;
