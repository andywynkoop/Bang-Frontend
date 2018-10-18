import React from 'react';
import { connect } from 'react-redux';
const defaultAvatar = "https://s3.amazonaws.com/bang-aa/howard.jpg";
import Bullets from '../dashboard/Bullets';

const PlayerList = ({ players }) => 
  <div className="player-index">
    {players.map(player => {
      let { username, avatar, bullets } = player;
      avatar = avatar || defaultAvatar;
      return (
        <div key={player._id} className="player-index-item">
          <img src={avatar} />
          {(player.role === "Sheriff") ? <img className="sheriff" src="https://s3.amazonaws.com/bang-aa/sheriffstar.png" /> : null }
          <h4>
            {username}
            <Bullets number={bullets} style="player-bullets" />
          </h4>
        </div>
      )
    }
    )}
  </div>;

const msp = ({ players }) => ({ players: Object.values(players)});

export default connect(msp)(PlayerList);