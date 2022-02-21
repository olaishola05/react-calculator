import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Components/Buttons';

describe('Use Jest snapshots to test the button component.', () => {
  it('Button component renders properly', () => {
    const props = {
      value: '+',
      label: '+',
      class: 'Button',
    };
    const handleClick = () => {};

    const component = TestRenderer.create(
      <Button
        value={props.value}
        className={props.Button}
        label={props.label}
        handleClick={handleClick}
      />
    );
    expect(component).toMatchSnapshot();
  });
});

describe('Test if button is clicked', () => {
  it('Test if button is clicked once', () => {
    const props = {
      value: '+',
      label: '+',
      class: 'Button',
    };

    const handleClick = jest.fn();

    render(
      <Button
        value={props.value}
        className={props.Button}
        label={props.label}
        handleClick={handleClick}
      />
    );
    userEvent.click(screen.getByText('+'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('Test if button is clicked', () => {
  it('Test if button is clicked is AC', () => {
    const props = {
      value: 'AC',
      label: 'AC',
      class: 'Button',
    };

    const handleClick = jest.fn();

    render(
      <Button
        value={props.value}
        className={props.Button}
        label={props.label}
        handleClick={handleClick}
      />
    );
    userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
