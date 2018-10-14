import React from 'react';
import Bullets from './Bullets';
const defaultAvatar = "https://s3.amazonaws.com/bang-aa/howard.jpg";

export default ({ name, bullets }) => 
  <div className="player">
    <h4>{name}</h4>
    <div>
      <img className="avatar" src={defaultAvatar} />
      <Bullets number={bullets} />
    </div>
  </div>