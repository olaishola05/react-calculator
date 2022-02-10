import React from 'react';
import PropTypes from 'prop-types';
import Button from './Buttons';
import Keypads from './Keypad';

function Pads({ handleClick }) {
  return (
    <Keypads>
      <Button label="AC" value="AC" handleClick={handleClick} />
      <Button label="+/-" value="+/-" handleClick={handleClick} />
      <Button label="%" value="%" handleClick={handleClick} />
      <Button label="÷" value="÷" handleClick={handleClick} />

      <Button label="7" value="7" handleClick={handleClick} />
      <Button label="8" value="8" handleClick={handleClick} />
      <Button label="9" value="9" handleClick={handleClick} />
      <Button label="x" value="x" handleClick={handleClick} />

      <Button label="4" value="4" handleClick={handleClick} />
      <Button label="5" value="5" handleClick={handleClick} />
      <Button label="6" value="6" handleClick={handleClick} />
      <Button label="-" value="-" handleClick={handleClick} />

      <Button label="1" value="1" handleClick={handleClick} />
      <Button label="2" value="2" handleClick={handleClick} />
      <Button label="3" value="3" handleClick={handleClick} />
      <Button label="+" value="+" handleClick={handleClick} />

      <Button label="0" value="0" handleClick={handleClick} />
      <Button label="." value="." handleClick={handleClick} />
      <Button label="=" value="=" handleClick={handleClick} />
    </Keypads>
  );
}

Pads.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Pads;
