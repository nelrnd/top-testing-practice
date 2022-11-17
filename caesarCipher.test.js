const caesarCipher = require('./caesarCipher');

test('a => b', () => {
  expect(caesarCipher('a')).toBe('b');
});

test('ab => bc', () => {
  expect(caesarCipher('ab')).toBe('bc');
});

test('z => a', () => {
  expect(caesarCipher('z')).toBe('a');
});

test('AbCdE => BcDeF', () => {
  expect(caesarCipher('AbCdE')).toBe('BcDeF');
});

test('hello! => immp!', () => {
  expect(caesarCipher('hello!')).toBe('immp!');
});

test('abc123 => bcd123', () => {
  expect(caesarCipher('abc123')).toBe('bcd123');
});

test('throw error when not given string argument', () => {
  expect(() => caesarCipher(123)).toThrow('Argument must be a string');
});
