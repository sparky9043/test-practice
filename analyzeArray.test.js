const analyzeArray = require('./analyzeArray');

test('', () => {

  expect(analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });

  expect(analyzeArray([1, 2, 3, 'hello'])).toBeUndefined();

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([1, 2, 4, 8, 16, 32])).toEqual({
    average: 10.5,
    min: 1,
    max: 32,
    length: 6,
  });

  expect(analyzeArray([4, 7, 8, 9, 12, 11, 10, 3, 7]).average).toBeCloseTo(7.8888889);


});