import React from 'react';
import { connect } from 'react-redux';
import { createGame, joinGame } from './actions';
import JoinGame from './game/JoinGame';
import PlayerList from './game/PlayerList';
import ClosedGame from './game/ClosedGame';
import NewGameButton from './game/NewGameButton';

const Game = ({ game, user, user: { _id }, createGame, joinGame, players }) => {
  if (!game) return <NewGameButton createGame={createGame} />
  if (game.started) return <ClosedGame />
  if (game._id === user.game) return <PlayerList players={players} />
  return <JoinGame joinGame={joinGame} _id={_id} />
}

const msp = ({ game, session:user, players }) => ({ game, user, players: Object.values(players) });

const mdp = dispatch => ({
  createGame: () => dispatch(createGame()),
  joinGame: _id => dispatch(joinGame(_id))
});

export default connect(msp, mdp)(Game);