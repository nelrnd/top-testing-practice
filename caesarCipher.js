const caesarCipher = (string) => {
  if (typeof string !== 'string') throw 'Argument must be a string';

  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let cipher = string.split('');

  cipher.forEach((char, index) => {
    if (lowercaseLetters.indexOf(char) !== -1) {
      let position = lowercaseLetters.indexOf(char);
      cipher[index] = lowercaseLetters.charAt((position + 1) % 26);
    } else if (uppercaseLetters.indexOf(char) !== -1) {
      let position = uppercaseLetters.indexOf(char);
      cipher[index] = uppercaseLetters.charAt((position + 1) % 26);
    }
  });

  return cipher.join('');
};

module.exports = caesarCipher;
