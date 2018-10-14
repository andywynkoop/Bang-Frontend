import React from 'react';
import { connect } from 'react-redux';
import { createGame } from './actions';

const Game = ({ game, createGame }) => 
  <div className="game">
    { game ? <h1>Game</h1>: <h1 onClick={createGame}>No Game</h1>}
  </div>

const msp = ({ game }) => ({ game });

const mdp = dispatch => ({
  createGame: () => dispatch(createGame())
});

export default connect(msp, mdp)(Game);