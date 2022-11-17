const analyzeArray = (array) => {
  if (!Array.isArray(array)) throw 'Argument must be an array of numbers';

  for (const nb of array) {
    if (isNaN(nb)) throw 'Array must contains only numeric values';
  }

  const min = array.reduce((a, b) => (a < b ? a : b));
  const max = array.reduce((a, b) => (a > b ? a : b));
  const length = array.length;
  const average = array.reduce((prev, cur) => prev + cur, 0) / length;

  return {
    min,
    max,
    average,
    length,
  };
};

module.exports = analyzeArray;
