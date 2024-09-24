function caesarCipher(string, factor) {

  const getShiftedString = (string) => {
    let copy = '';

    const checkUpperOrLowerCase = (string, factor) => {
      const characters = string.split('');

      characters.forEach((char, index) => {
        const characterCode = char.charCodeAt(0);
        if (characterCode >= 65 && characterCode <= 90) {

          const convertedChar = String.fromCharCode(characterCode + factor);
          characters[index] = convertedChar;

        } else if (characterCode >= 97 && characterCode <= 122) {

          const convertedChar = String.fromCharCode(characterCode + factor);
          characters[index] = convertedChar;

        }
        
      });


      return characters.join('');
    }

    return checkUpperOrLowerCase(string, factor);
  }

  const shiftedString = getShiftedString(string);

  return shiftedString;
}

module.exports = caesarCipher;