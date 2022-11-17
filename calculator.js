const calculator = {
  add: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw 'Arguments must be numeric values';
    return a + b;
  },
  substract: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw 'Arguments must be numeric values';
    return a - b;
  },
  multiply: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw 'Arguments must be numeric values';
    return a * b;
  },
  divide: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      throw 'Arguments must be numeric values';
    if (b === 0) throw "Can't divide by 0";
    return a / b;
  },
};

module.exports = calculator;
