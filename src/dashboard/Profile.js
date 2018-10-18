import React from 'react';
import Bullets from './Bullets';
import Avatar from './Avatar.js';

export default ({ user: { username, bullets, avatar } }) => 
  <div className="player">
    <h4>{username}</h4>
    <div>
      <Avatar avatar={avatar} />
      <Bullets number={bullets} style="bullets" />
    </div>
  </div>