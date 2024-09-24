const capitalize = require('./capitalize');

test('Function should take an argument', () => {

  expect(capitalize('hello')).toEqual('hello');
});