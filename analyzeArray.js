function analyzeArray(arr) {
  if (arr.length === 0) return {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  }

  const averageOfArray = arr.reduce((prev, current) => prev + current / arr.length, 0);
  const minOfArray = Math.min(...arr);
  const maxOfArray = Math.max(...arr);
  const lengthOfArray = arr.length;

  return {
    average: averageOfArray,
    min: minOfArray,
    max: maxOfArray,
    length: lengthOfArray,
  };
}

module.exports = analyzeArray;