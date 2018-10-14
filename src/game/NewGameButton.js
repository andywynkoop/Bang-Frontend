import React from 'react';

export default ({ createGame }) => 
  <button className="app-btn game-start-btn" onClick={createGame}>
    New Game
  </button>;