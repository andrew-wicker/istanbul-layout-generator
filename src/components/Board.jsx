// import React from 'react';
import { initializeBoard } from '../lib/utils/tilePlacementHelpers';

export default function Board() {
  const board = initializeBoard();

  const tileUrls = {
    Wainwright: '/tiles/01-wainwright.jpg',
    'Fabric Warehouse': '/tiles/02-fabric-warehouse.jpg',
    'Spice Warehouse': '/tiles/03-spice-warehouse.jpg',
    'Fruit Warehouse': '/tiles/04-fruit-warehouse.jpg',
    'Post Office': '/tiles/05-post-office.jpg',
    Caravansary: '/tiles/06-caravansary.jpg',
    Fountain: '/tiles/07-fountain.jpg',
    'Black Market': '/tiles/08-black-market.jpg',
    'Tea House': '/tiles/09-tea-house.jpg',
    'Large Market': '/tiles/10-large-market.jpg',
    'Small Market': '/tiles/11-small-market.jpg',
    'Police Station': '/tiles/12-police-station.jpg',
    "Sultan's Palace": '/tiles/13-sultans-palace.jpg',
    'Small Mosque': '/tiles/14-small-mosque.jpg',
    'Great Mosque': '/tiles/15-great-mosque.jpg',
    'Gemstone Dealer': '/tiles/16-gemstone-dealer.jpg',
  };

  return (
    <div className="grid grid-cols-4 border-[#333333] border-4">
      {board.map((tile, index) => (
        <div
          key={index}
          className="bg-[url('tileUrls[tile]')] text-center"
        >
          <img src={tileUrls[tile]} />
        </div>
      ))}
    </div>
  );
}
