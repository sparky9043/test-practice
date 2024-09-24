const calculator = require('./calculator');

test('Should return proper calculation', () => {

  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(3, -4)).toBe(-1);
  expect(calculator.subtract(12, 5)).toBe(7);
  expect(calculator.subtract(3, 10)).toBe(-7);
  expect(calculator.divide(12, 3)).toBeCloseTo(4);
  expect(calculator.divide(1, 3)).toBeCloseTo(0.3333333);
  expect(calculator.divide(1, 0)).toBeUndefined();
  expect(calculator.multiply(3, -6)).toBe(-18);
});