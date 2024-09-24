function caesarCipher(string, factor) {

  const lowerCaseMin = 97;
  const lowerCaseMax = 122;

  const upperCaseMin = 65;
  const upperCaseMax = 90;

  const getShiftedString = (string) => {

    const checkUpperOrLowerCase = (string, factor) => {
      const characters = string.split('');

      const convertLowerCase = (lowerCaseCharCode, factor) => {

        if (lowerCaseCharCode < lowerCaseMin || lowerCaseCharCode > lowerCaseMax) return;

        if (lowerCaseCharCode + factor > lowerCaseMax) {
          const convertedCharCode = lowerCaseMin + lowerCaseCharCode + factor - lowerCaseMax - 1;
          return String.fromCharCode(convertedCharCode);
        }

        return String.fromCharCode(lowerCaseCharCode + factor);
      }

      const convertUpperCase = (upperCaseCharCode, factor) => {
        
        if (upperCaseCharCode < upperCaseMin || upperCaseCharCode > upperCaseMax) return;

        if (upperCaseCharCode + factor > upperCaseMax) {
          const convertedCharCode = upperCaseMin + upperCaseCharCode + factor - upperCaseMax - 1;
          return String.fromCharCode(convertedCharCode);
        }

        return String.fromCharCode(upperCaseCharCode + factor);
      }

      characters.forEach((char, index) => {
        const characterCode = char.charCodeAt(0);
        if (characterCode >= upperCaseMin && characterCode <= upperCaseMax) {

          const convertedChar = convertUpperCase(characterCode, factor);
          characters[index] = convertedChar;

        } else if (characterCode >= lowerCaseMin && characterCode <= lowerCaseMax) {

          const convertedChar = convertLowerCase(characterCode, factor);
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