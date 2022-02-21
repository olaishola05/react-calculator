import renderer from 'react-test-renderer';
import { getByTestId, render, screen } from '@testing-library/react';
import Quote from '../Components/pages/Quote';

describe('Test component using Jest', () => {
  it('Test Quote component if it matches render', () => {
    const component = renderer.create(<Quote />).toTree();

    expect(component).toMatchSnapshot();
  });
});
