import React from 'react';
import PlayerList from './PlayerList';
import GameDisplay from './activeGame/GameDisplay';

const ActiveGame = () => 
  <>
    <PlayerList />
    <div className="game-screen">
      <GameDisplay />
    </div>
  </>;

export default ActiveGame;