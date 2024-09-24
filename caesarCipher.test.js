const caesarCipher = require('./caesarCipher');

test('Should exist', () => {

  expect(caesarCipher('ABC', 3)).toBe("DEF");
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('wxyz', 3)).toBe('zabc');
  expect(caesarCipher('wxyz', 4)).toBe('abcd');
  expect(caesarCipher('WXYZ', 3)).toBe('ZABC');
  expect(caesarCipher('abcd', -3)).toBe('xyza');
  expect(caesarCipher('ABCD', -3)).toBe('XYZA');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});