const capitalize = require('./capitalize');

test('Function should take an argument', () => {
  
  expect(capitalize(123)).toBeUndefined();
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('greeting')).toEqual('Greeting');
  expect(capitalize('cheeseGrater')).toEqual('CheeseGrater');
  expect(capitalize('what is going on')).toEqual('What is going on');
});