const analyzeArray = require('./analyzeArray');

test('Analyzes given array of numbers (1)', () => {
  const expected = {
    min: 0,
    max: 2,
    average: 1,
    length: 3,
  };
  expect(analyzeArray([0, 1, 2])).toEqual(expected);
});

test('Analyzes given array of numbers (2)', () => {
  const expected = {
    min: 1,
    max: 1000,
    average: 277.75,
    length: 4,
  };
  expect(analyzeArray([1, 10, 100, 1000])).toEqual(expected);
});

test('Analyzes given array of numbers (3)', () => {
  const expected = {
    min: 1,
    max: 8,
    average: 4.5,
    length: 8,
  };
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual(expected);
});

test('Throws error if given argument is not an array', () => {
  expect(() => analyzeArray('test')).toThrow(
    'Argument must be an array of numbers'
  );
});

test('Throws error if given array contains non-numeric values', () => {
  expect(() => analyzeArray([1, 'a', 'c', true])).toThrow(
    'Array must contains only numeric values'
  );
});
