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

export const initializeBoard = () => {
  const board = new Array(16).fill(null);
  const middleIndexes = [5, 6, 9, 10];
  const cornerIndexes = [0, 3, 12, 15];
  const firstTurnTiles = [
    'Fabric Warehouse',
    'Spice Warehouse',
    'Fruit Warehouse',
    'Post Office',
    'Police Station',
  ];
  const allTiles = [
    'Wainwright',
    'Fabric Warehouse',
    'Spice Warehouse',
    'Fruit Warehouse',
    'Post Office',
    'Caravansary',
    'Fountain',
    'Black Market',
    'Tea House',
    'Large Market',
    'Small Market',
    'Police Station',
    "Sultan's Palace",
    'Small Mosque',
    'Great Mosque',
    'Gemstone Dealer',
  ];

  // Place Fountain and Caravansary
  if (Array.isArray(middleIndexes)) {
    shuffleArray(middleIndexes);
  } else {
    console.error(
      'Fountain, Caravansary: Expected array, received: ',
      middleIndexes
    );
  }
  console.log('before middleIndexes.pop: ', middleIndexes);

  board[middleIndexes.pop()] = 'Fountain';
  board[middleIndexes.pop()] = 'Caravansary';

  console.log('after middleIndexes.pop: ', middleIndexes);

  // Place Tea House
  if (Array.isArray(cornerIndexes)) {
    shuffleArray(cornerIndexes);
  } else {
    console.error('Tea House: Expected array, received: ', cornerIndexes);
  }
  // shuffleArray(cornerIndexes);
  const teaHouseIndex = cornerIndexes.pop();
  board[teaHouseIndex] = 'Tea House';

  // Assign Black Market and Gemstone Dealer
  const distantIndexes = getDistantIndexes(teaHouseIndex, 3);
  if (Array.isArray(distantIndexes)) {
    shuffleArray(distantIndexes);
  } else {
    console.error(
      'Black Mkt, Gemstone: Expected array, received: ',
      distantIndexes
    );
  }
  // shuffleArray(distantIndexes);
  board[distantIndexes.pop()] = 'Black Market';
  board[distantIndexes.pop()] = 'Gemstone Dealer';

  const fountainIndex = board.indexOf('Fountain');
  if (fountainIndex === -1) {
    console.error('Fountain not found in board: ', board);
    return;
  }

  // ! Brute force of indexes reachable on first turn
  const reachableIndexes = {
    5: [0, 1, 2, 4, 6, 7, 8, 9, 10, 13],
    6: [1, 2, 3, 4, 5, 7, 9, 10, 11, 14],
    9: [1, 4, 5, 6, 8, 10, 11, 12, 13, 14],
    10: [2, 5, 6, 7, 8, 9, 11, 13, 14, 15],
  };
  const firstTurnReachable = reachableIndexes[fountainIndex];
  console.log('firstTurnReachable: ', firstTurnReachable);
  console.log('reachableIndexes: ', reachableIndexes);
  console.log('fountain index: ', fountainIndex);
  // ! -------------------------------------------------------
  if (Array.isArray(firstTurnReachable)) {
    shuffleArray(firstTurnReachable);
  } else {
    console.error(
      'firstTurnReachable: Expected array, received: ',
      firstTurnReachable
    );
  }
  // shuffleArray(firstTurnReachable);
  if (Array.isArray(firstTurnTiles)) {
    shuffleArray(firstTurnTiles);
  } else {
    console.error(
      'First Turn Tiles: Expected array, received: ',
      firstTurnTiles
    );
  }
  // shuffleArray(firstTurnTiles);

  let tilesPlaced = 0;
  for (let i = 0; i < firstTurnReachable.length && tilesPlaced < 4; i++) {
    let position = firstTurnReachable[i];
    if (board[position] === null && position !== middleIndexes[0]) {
      board[position] = firstTurnTiles[tilesPlaced++];
    }
  }

  const tilesRemaining = allTiles.filter((tile) => !board.includes(tile));
  if (Array.isArray(tilesRemaining)) {
    shuffleArray(tilesRemaining);
  } else {
    console.error('tilesRemaining: Expected array, received: ', tilesRemaining);
  }
  // shuffleArray(tilesRemaining);

  let tileIndex = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = tilesRemaining[tileIndex++];
    }
  }

  return board;
};

export const getDistantIndexes = (index, minDistance) => {
  const size = 4;
  let validIndexes = [];
  for (let i = 0; i < 16; i++) {
    const rowDistance = Math.floor(Math.abs(index - i) / size);
    const colDistance = Math.abs((index % size) - (i % size));
    const manhattanDistance = rowDistance + colDistance;
    if (manhattanDistance >= minDistance) validIndexes.push(i);
  }

  return validIndexes;
};
