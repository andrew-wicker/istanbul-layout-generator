// @ Helper functions for tile layout

// * Fisher Yates Shuffle for Randomizing Arrays
export const shuffleArray = (array) => {
  if (!array || !Array.isArray(array)) {
    console.error('Invalid or undefined array passed to shuffleArray: ', array);
    return;
  }

  if (!array.length) {
    console.error('Array with no elements: ', array);
    return;
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
