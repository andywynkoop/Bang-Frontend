import React from 'react';
import { connect } from 'react-redux';
import StartGame from './StartGame';
import { startGame } from '../../actions';

const GameDisplay = ({ game, game: { _id }, players, start }) => 
  <StartGame start={start.bind(null, _id)} players={players.length} />


const msp = ({ game, players }) => ({ game, players: Object.values(players) });

const mdp = dispatch => ({ start: _id => dispatch(startGame(_id))});

export default connect(msp, mdp)(GameDisplay);