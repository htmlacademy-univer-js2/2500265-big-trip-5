const getRandomElementOfArray = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomIntValue = (min, max) => {
  const lowerBorder = Math.ceil(Math.min(min, max));
  const upperBorder = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upperBorder - lowerBorder + 1) + lowerBorder);
};

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

export {getRandomElementOfArray, getRandomIntValue, isEscapeKey};
