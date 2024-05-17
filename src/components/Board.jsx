import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initializeBoard } from '../lib/utils/tilePlacementHelpers';
import { shortPaths, longPaths } from '../lib/presetLayout';
import AnimatedTile from './AnimatedTile/AnimatedTile';

export default function Board({ boardType = null }) {
  const [board, setBoard] = useState([]);
  const [flippedTiles, setFlippedTiles] = useState([]);

  useEffect(() => {
    switch (boardType) {
      case 'shortPaths':
        setBoard(shortPaths);
        break;
      case 'longPaths':
        setBoard(longPaths);
        break;
      default:
        setBoard(initializeBoard());
        break;
    }
  }, [boardType]);

  useEffect(() => {
    const flipTiles = () => {
      let tileIndexes = Array.from({ length: board.length }, (_, i) => i);
      tileIndexes = tileIndexes.sort(() => Math.random() - 0.5);

      tileIndexes.forEach((index, i) => {
        setTimeout(() => {
          setFlippedTiles((prev) => [...prev, index]);
        }, i * 100);
      });
    };

    flipTiles();
  }, [board]);

  return (
    <div className="grid grid-cols-4 max-h-full gap-4">
      {board.map((tile, index) => (
        <div key={index}>
          <AnimatedTile
            tile={tile}
            isFlipped={flippedTiles.includes(index)}
          />
        </div>
      ))}
    </div>
  );
}

Board.propTypes = {
  boardType: PropTypes.string,
};
