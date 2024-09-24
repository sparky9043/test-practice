const calculator = require('./calculator');

test('Should return proper calculation', () => {

  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(3, -4)).toBe(-1);
});