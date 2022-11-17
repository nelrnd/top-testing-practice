const reverseString = require('./reverseString');

test('returns given string in reverse order', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('Hello world!')).toBe('!dlrow olleH');
  expect(reverseString('123 abc')).toBe('cba 321');
});

test('returns undefined if given nothing', () => {
  expect(reverseString()).toBeUndefined();
});

test('returns empty string if given empty string', () => {
  expect(reverseString('')).toBe('');
});

test('throw error message if given argument is not a string', () => {
  expect(() => reverseString(123)).toThrow('Argument must be a string');
  expect(() => reverseString(['a', 'b', 'c'])).toThrow(
    'Argument must be a string'
  );
});
