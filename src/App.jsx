import React, { useState } from 'react';
import Board from './components/Board';
import ButtonBar from './components/ButtonBar';
import './App.css';
import BlankBoard from './components/BlankBoard';
import Footer from './components/Footer';
import Explainer from './components/Explainer';

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
    <div
      id="app"
      className=" max-w-fit min-w-full min-h-full p-8 m-0 bg-gradient-to-br from-gray-500 to-zinc-300"
    >
      <div
        id="top-bar"
        className="p-2 ml-4"
      >
        <img
          src="/images/istanbulTitle.png"
          className="w-56 ml-6"
        />
      </div>
      <div className="flex">
        <div
          id="left-side-panel"
          className="flex flex-col w-1/5 p-8"
        >
          <ButtonBar
            onRegen={tournamentLayout}
            onShortPaths={shortPathsLayout}
            onLongPaths={longPathsLayout}
          />
          <Explainer />
        </div>
        <div className="board-container flex w-4/5">{renderBoard()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
