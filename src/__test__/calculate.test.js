import calculate from '../logic/calculate';

let item = {
  total: null,
  next: null,
  operation: null,
};

describe('Test Calculate function', () => {
  test('Test the sum of two numbers', () => {
    item = {
      total: '2',
      next: '4',
      operation: '+',
    };
    const { total } = calculate(item, '=');
    expect(total).toBe('6');
  });

  test('Test the difference of two numbers', () => {
    item = {
      total: '2',
      next: '4',
      operation: '-',
    };
    const { total } = calculate(item, '=');
    expect(total).toBe('-2');
  });

  test('Test the difference of two numbers', () => {
    item = {
      total: '8',
      next: '4',
      operation: '-',
    };
    const { total } = calculate(item, '=');
    expect(total).toBe('4');
  });

  test('Test the product of two numbers', () => {
    item = {
      total: '2',
      next: '4',
      operation: 'x',
    };
    const { total } = calculate(item, '=');
    expect(total).toBe('8');
  });

  test('Test the division of two numbers', () => {
    item = {
      total: '9',
      next: '3',
      operation: '÷',
    };
    const { total } = calculate(item, '=');
    expect(total).toBe('3');
  });

  test('Test the division of two numbers', () => {
    item = {
      total: '9',
      next: '0',
      operation: '÷',
    };
    const { total } = calculate(item, '=');
    expect(total).toString('Cannot divide by zero');
  });

  test('Test the Modulos of two numbers', () => {
    item = {
      total: '10',
      next: '3',
      operation: '%',
    };
    const { total } = calculate(item, '=');
    expect(total).toBe('1');
  });

  test('Test the +/- operator on next numbers', () => {
    item = {
      total: '10',
      next: '3',
      operation: '-',
    };
    const { next } = calculate(item, '+/-');
    expect(next).toBe('-3');
  });

  test('Test AC button', () => {
    item = {
      total: '10',
      next: '3',
      operation: 'x',
    };
    expect(calculate(item, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
