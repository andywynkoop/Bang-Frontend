import React from 'react';
import PlayerList from './PlayerList';

export default ({ joinGame, _id }) => 
  <div className="game-top-view">
    <PlayerList />
    <div className="game-screen">
      <button 
        className="app-btn game-join-btn" 
        onClick={joinGame.bind(null, _id)}
      >
        Ready to Join?
      </button>
    </div>
  </div>;
