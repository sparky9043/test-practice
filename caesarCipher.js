function caesarCipher(string, factor) {

  const getShiftedString = (string) => {
    let copy = '';
    for (let i = 0; i < string.length; i++) {
      const shiftedString = String.fromCharCode(
        string.charCodeAt(i) + factor
      );
      copy += shiftedString;
    }

    return copy;
  }

  const shiftedString = getShiftedString(string);

  return shiftedString;
}

module.exports = caesarCipher;