const calculator = require('./calculator');

// test adding

test('adding 1 and 1 to be 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('adding 6 and 4 to be 10', () => {
  expect(calculator.add(6, 4)).toBe(10);
});

test('adding -5 and 10 to be 5', () => {
  expect(calculator.add(-5, 10)).toBe(5);
});

test('adding 0.1 and 0.2 to be close to 0.3', () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('returns error when giving non-numeric arguments', () => {
  expect(() => calculator.add(2, 'b')).toThrow(
    'Arguments must be numeric values'
  );
});

// test substracting

test('substract 5 and 3 to be 2', () => {
  expect(calculator.substract(5, 3)).toBe(2);
});

test('substract 10 and 5 to be 5', () => {
  expect(calculator.substract(10, 5)).toBe(5);
});

test('substract 5 and 5 to be 0', () => {
  expect(calculator.substract(5, 5)).toBe(0);
});

test('substract 3 and 0 to be 3', () => {
  expect(calculator.substract(3, 0)).toBe(3);
});

test('returns error when giving non-numeric arguments', () => {
  expect(() => calculator.substract(2, 'b')).toThrow(
    'Arguments must be numeric values'
  );
});

// test multiplying

test('multiply 3 and 2 to be 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test('multiply 4 and 1 to be 4', () => {
  expect(calculator.multiply(4, 1)).toBe(4);
});

test('multiply 4 and 0 to be 0', () => {
  expect(calculator.multiply(4, 0)).toBe(0);
});

test('returns error when giving non-numeric arguments', () => {
  expect(() => calculator.multiply(2, 'b')).toThrow(
    'Arguments must be numeric values'
  );
});

// test divising

test('divide 4 and 2 to be 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('divide 10 and 2 to be 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide 4 and 4 to be 1', () => {
  expect(calculator.divide(4, 4)).toBe(1);
});

test('divide 4 and 1 to be 4', () => {
  expect(calculator.divide(4, 1)).toBe(4);
});

test('returns error when giving non-numeric arguments', () => {
  expect(() => calculator.divide(2, 'b')).toThrow(
    'Arguments must be numeric values'
  );
});

test('returns error when trying to divide by 0', () => {
  expect(() => calculator.divide(3, 0)).toThrow("Can't divide by 0");
});
