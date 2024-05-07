import PropTypes from 'prop-types';

export default function ButtonBar({ onRegen, onShortPaths, onLongPaths }) {
  return (
    <div>
      <div className="button-bar flex flex-col justify-around text-lg">
        <button
          onClick={onRegen}
          className="mb-4 px-6 py-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        >
          Regenerate Layout
        </button>
        <button
          onClick={onShortPaths}
          className="mb-4 px-6 py-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        >
          Short Paths Layout
        </button>
        <button
          onClick={onLongPaths}
          className="mb-4 px-6 py-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        >
          Long Paths Layout
        </button>
      </div>
    </div>
  );
}

ButtonBar.propTypes = {
  onRegen: PropTypes.func,
  onShortPaths: PropTypes.func,
  onLongPaths: PropTypes.func,
};
