const capitalize = require('./capitalize');

test('Capitalizes first letter of a string', () => {
  expect(capitalize('abc')).toBe('Abc');
});

test('Capitalizes first letter of a string', () => {
  expect(capitalize('123 abc')).toBe('123 Abc');
});

test('If first letter already capitalized, changes nothing', () => {
  expect(capitalize('Abc')).toBe('Abc');
});

test('If string all upper case, changes nothing', () => {
  expect(capitalize('ABC')).toBe('ABC');
});

test('Returns undefined if given nothing', () => {
  expect(capitalize()).toBeUndefined();
});

test('Returns empty string if given empty string', () => {
  expect(capitalize('')).toBe('');
});
