import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  const [layoutKey, setLayoutKey] = useState(0);

  const regenLayout = () => {
    setLayoutKey((prevKey) => prevKey + 1);
  };

  return (
    <div id="istanbul">
      <div id="app">
        <div className="p-4">
          <img
            className="mx-auto"
            style={{ width: '25vw', height: 'auto' }}
            src="/images/istanbulTitle.png"
          />
          <h1 className="text-xxl font-bold text-center mb-4 text-[#ac1816]">
            Tournament Layout App
          </h1>
          <button
            onClick={regenLayout}
            className="mb-4 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
          >
            Regenerate Layout
          </button>
          <Board key={layoutKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
