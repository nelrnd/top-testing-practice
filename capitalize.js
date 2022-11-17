const capitalize = (string) => {
  if (string === '') return string;
  if (!string) return undefined;
  if (typeof string !== 'string') throw 'Argument must be a string';

  // first letter index
  const index = string.search(/[a-zA-Z]/);

  if (index === -1) return string;

  return (
    string.slice(0, index) +
    string.slice(index, index + 1).toUpperCase() +
    string.slice(index + 1)
  );
};

module.exports = capitalize;
