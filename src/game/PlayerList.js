import React from 'react';

export default ({ players }) => 
  <div>
    {players.map(player => 
      <h4 key={player._id}>
        {player.username}
      </h4>
    )}
  </div>;