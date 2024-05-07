import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initializeBoard } from '../lib/utils/tilePlacementHelpers';
import { shortPaths, longPaths } from '../lib/presetLayout';
import Tile from './Tile';

export default function Board({ boardType = null }) {
  const [board, setBoard] = useState([]);

  const [hoveredTile, setHoveredTile] = useState(null);

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

  return (
    <div className="grid grid-cols-4 max-h-full">
      {board.map((tile, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredTile(tile)}
          onMouseLeave={() => setHoveredTile(null)}
          className={`transition-all duration-300 ease-in-out ${
            hoveredTile && hoveredTile !== tile
              ? 'opacity-50 blur-sm'
              : 'opacity-100 blur-none'
          }`}
        >
          <Tile tile={tile} />
        </div>
      ))}
    </div>
  );
}

Board.propTypes = {
  boardType: PropTypes.string,
};
