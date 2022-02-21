import operate from '../logic/operate';

const num1 = '5';
const num2 = '10';
let ops;

describe('Test operators sign', () => {
  test('Test "+" operator', () => {
    ops = '+';
    expect(operate(num1, num2, ops)).toBe('15');
  });

  test('Test "-" operator', () => {
    ops = '-';
    expect(operate(num2, num1, ops)).toBe('5');
  });

  test('Test "-" operator', () => {
    ops = '-';
    expect(operate(num1, num2, ops)).toBe('-5');
  });

  it('should return 50 when multiply', () => {
    ops = 'x';
    expect(operate(num1, num2, ops)).toEqual('50');
  });

  it('Test "/" operator', () => {
    ops = '÷';
    expect(operate(num1, num2, ops)).toBe('0.5');
  });

  it('Test "/" operator with zero', () => {
    ops = '÷';
    expect(operate(num1, '0', ops)).toString("Can't divide by 0.");
  });

  it('Test "%" operator', () => {
    ops = '%';
    const value = '21';
    expect(operate(value, num2, ops)).toBe('1');
  });

  it('Test "%" operator, should return error', () => {
    ops = '%';
    const value = '21';
    expect(operate(value, '0', ops)).toString(
      "Can't find modulo as can't divide by 0",
    );
  });
});
