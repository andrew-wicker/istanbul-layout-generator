import React, { useState } from 'react';
import { initializeBoard } from '../lib/utils/tilePlacementHelpers';
import Tile from './Tile';

export default function Board() {
  const [board, setBoard] = useState(() => initializeBoard());

  const [hoveredTile, setHoveredTile] = useState(null);

  return (
    <div className="grid grid-cols-4">
      {board.map((tile) => (
        <div
          key={tile}
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
