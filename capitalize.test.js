const capitalize = require('./capitalize');

test('Capitalize first character of a string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
  expect(capitalize('abc')).toBe('Abc');
  expect(capitalize('BANG')).toBe('BANG');
});

test('Return empty string if given empty string', () => {
  expect(capitalize('')).toBe('');
});

test('Return undefined if given nothing', () => {
  expect(capitalize()).toBeUndefined();
});
