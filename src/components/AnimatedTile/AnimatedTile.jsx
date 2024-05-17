import PropTypes from 'prop-types';
import './AnimatedTile.css';

export default function AnimatedTile({ tile, isFlipped }) {
  const tileUrls = {
    Wainwright: '/tiles/cropped/01-wainwright.jpg',
    'Fabric Warehouse': '/tiles/cropped/02-fabric-warehouse.jpg',
    'Spice Warehouse': '/tiles/cropped/03-spice-warehouse.jpg',
    'Fruit Warehouse': '/tiles/cropped/04-fruit-warehouse.jpg',
    'Post Office': '/tiles/cropped/05-post-office.jpg',
    Caravansary: '/tiles/cropped/06-caravansary.jpg',
    Fountain: '/tiles/cropped/07-fountain.jpg',
    'Black Market': '/tiles/cropped/08-black-market.jpg',
    'Tea House': '/tiles/cropped/09-tea-house.jpg',
    'Large Market': '/tiles/cropped/10-large-market.jpg',
    'Small Market': '/tiles/cropped/11-small-market.jpg',
    'Police Station': '/tiles/cropped/12-police station.jpg',
    "Sultan's Palace": '/tiles/cropped/13-sultans-palace.jpg',
    'Small Mosque': '/tiles/cropped/14-small-mosque.jpg',
    'Great Mosque': '/tiles/cropped/15-great-mosque.jpg',
    'Gemstone Dealer': '/tiles/cropped/16-gemstone-dealer.jpg',
    blank: '/tiles/cropped/00-blank.jpg',
  };

  return (
    <div className={`flip-tile rounded-xl ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-tile-inner rounded-xl">
        <div className="flip-tile-front rounded-xl">
          <img
            // src={tileUrls[tile]}
            src="/tiles/cropped/00-blank.jpg"
            className="rounded-xl"
          />
        </div>
        <div className="flip-tile-back rounded-xl">
          <img
            src={tileUrls[tile]}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

AnimatedTile.propTypes = {
  tile: PropTypes.string,
  isFlipped: PropTypes.bool.isRequired,
};
