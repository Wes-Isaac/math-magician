import operate from './operate';

describe('testing operations', () => {
  const previousOperand = '5';
  const currentOperand = '5';

  test('test addition', () => {
    const result = operate(previousOperand, currentOperand, '+');
    expect(result).toBe('10');
  });
  test('test subtraction', () => {
    const result = operate(previousOperand, currentOperand, '-');
    expect(result).toBe('0');
  });
  test('test multiplication', () => {
    const result = operate(previousOperand, currentOperand, 'x');
    expect(result).toBe('25');
  });
  test('test division', () => {
    const result = operate(previousOperand, currentOperand, '÷');
    expect(result).toBe('1');
  });
  test('test Mod', () => {
    const result = operate(previousOperand, currentOperand, '%');
    expect(result).toBe('0');
  });
});
