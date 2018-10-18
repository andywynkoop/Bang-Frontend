import React from 'react';

const StartGame = ({ start, players }) => 
  <div className="game-message-card">
    <p className="start-game-text">Alright partner, you threw your hat into the ring.
      Grab yourself a bottle of corn juice and a can of whistle berries while you wait 
      for the rest of your amigos to join.
      Once everyone appears in the menu to the left (minimum 4 players), grab your barking irons and
      click the button below to play a game of Bang!
    </p>
    {(players >= 4) ? 
        <button className="app-btn start-game-btn" onClick={start} >
          Draw!
        </button> : <div/>
      }
  </div>

export default StartGame;