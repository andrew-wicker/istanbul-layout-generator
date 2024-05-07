import React from 'react';

export default function Explainer() {
  return (
    <div>
      <ul className="text-white text-left list-disc">
        <li>
          The Caravansery (6) and the Fountain (7) have to be on one of the four
          places in the middle of the grid.
        </li>
        <li>
          The Tee House (9) has to be on one of the four corners of the grid.
        </li>
        <li>
          The Black Market (8) as well as the Gemstone Dealer (16) have a
          distance from the Tea House (9) of at least 3 places.
        </li>
        <li>
          At least 5 of the following places have to be reachable from the
          Fountain (7) with a single turn (distance is 2 places at a maximum):
          <ul className="list-decimal text-start ml-8">
            <li>Fabric Warehouse</li>
            <li>Spice Warehouse</li>
            <li>Fruit Warehouse</li>
            <li>Post Office</li>
            <li>Caravansary</li>
            <li>Black Market</li>
            <li>Tea House</li>
            <li>Police Station</li>
          </ul>
        </li>
        <li>
          Governor and Smuggler do not start on the Post Office or on the Black
          Market
        </li>
      </ul>
    </div>
  );
}

// 1) The Caravansery _6_ and the Fountain _7_ have to be on one of the 4 Places in the middle of the grid.
// 2) The Tee House _9_ has to be on one of the 4 corners of the grid.
// 3) The Black Market _8_ as well as the Gemstone Dealer _16_ have a distance from the Tea House _9_ of at least 3 places.
// 4) At least 5 of the following places have to be reachable from the Fountain _7_ with a single turn (distance is 2 places at a maximum): Fabric/Spice/Fruit Warehouse _2-4_, Post Office _5_, Caravansery _6_, Black Market _8_, Tee House _9_, Police Station _12_.
// 5) Governor and Smuggler do not start on the Post Office _5_ or on the Black Market _8_
