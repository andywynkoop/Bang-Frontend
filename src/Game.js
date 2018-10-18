import React from 'react';
import { connect } from 'react-redux';
import { createGame, joinGame } from './actions';
import JoinGame from './game/JoinGame';
import ActiveGame from './game/ActiveGame';
import ClosedGame from './game/ClosedGame';
import NewGame from './game/NewGame';

const Game = ({ game, _id, user, createGame, joinGame }) => {
  if (!user) return <div />;
  if (!game) return <NewGame createGame={createGame} />
  if (game._id === user.game) return <ActiveGame />
  if (!game.started) return <JoinGame joinGame={joinGame} _id={_id} />
  if (game.started) return <ClosedGame />
}

const msp = ({ game, session:_id, players }) => ({ game, _id, user: players[_id] });

const mdp = dispatch => ({
  createGame: () => dispatch(createGame()),
  joinGame: _id => dispatch(joinGame(_id))
});

export default connect(msp, mdp)(Game);