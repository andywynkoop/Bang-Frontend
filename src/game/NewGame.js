import React from 'react';

export default ({ createGame }) => 
  <div className="game-message-card">
    <p>It's reeeeeal quiet 'round here.</p>
    <button className="app-btn game-start-btn" onClick={createGame}>
      Start a New Game
    </button>
  </div>