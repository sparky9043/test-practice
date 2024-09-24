const reverseString = require('./reverseString');

test('Should return a reversed string', () => {

  expect(reverseString(1234)).toBeUndefined();
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('monkey')).toBe('yeknom');
});