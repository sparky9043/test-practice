const caesarCipher = require('./caesarCipher');

test('Should exist', () => {

  expect(caesarCipher('ABC', 3)).toBe("DEF");
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('ABC', 5)).toBe('FGH');
});