const reverseString = (string) => {
  if (string === '') return '';
  if (!string) return undefined;
  if (typeof string !== 'string') throw 'Argument must be a string';

  return string.split('').reverse().join('');
};

module.exports = reverseString;
