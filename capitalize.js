function capitalize(string) {
  if (typeof string !== 'string') return undefined;

  return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;