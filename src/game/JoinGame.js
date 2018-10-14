import React from 'react';

export default ({ joinGame, _id }) => 
  <button 
    className="app-btn game-join-btn" 
    onClick={joinGame.bind(null, _id)}
  >
    Ready to Join?
  </button>;
