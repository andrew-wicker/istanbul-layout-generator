import React, { useState } from 'react';
import Board from './components/Board';
import ButtonBar from './components/ButtonBar';
import './App.css';
import BlankBoard from './components/BlankBoard';
import Footer from './components/Footer';

function App() {
  const [boardType, setBoardType] = useState('blank');

  const tournamentLayout = () => {
    setBoardType('tournament');
  };

  const shortPathsLayout = () => {
    setBoardType('shortPaths');
  };

  const longPathsLayout = () => {
    setBoardType('longPaths');
  };

  const renderBoard = () => {
    switch (boardType) {
      case 'tournament':
        return (
          <Board
            key="tournament"
            boardType={'tournament'}
          />
        );
      case 'shortPaths':
        return (
          <Board
            key="shortPaths"
            boardType={'shortPaths'}
          />
        );
      case 'longPaths':
        return (
          <Board
            key="longPaths"
            boardType={'longPaths'}
          />
        );
      default:
        return <BlankBoard />;
    }
  };

  return (
    <div id="istanbul">
      <div
        id="app"
        className="flex bg-gradient-to-br from-slate-700 to-black"
      >
        <div className="left-hand-panel flex flex-col items-center mt-4 w-1/5">
          <img
            className="w-4/5"
            src="/images/istanbulTitle.png"
          />
          <h1 className="text-xxl font-bold text-center mb-8 text-[#ffffff] mt-8">
            Map Generator
          </h1>
          <ButtonBar
            onRegen={tournamentLayout}
            onShortPaths={shortPathsLayout}
            onLongPaths={longPathsLayout}
          />
        </div>
        <div className="board-container flex w-4/5">{renderBoard()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
