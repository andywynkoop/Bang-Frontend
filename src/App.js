import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { GAME, PLAYERS, REMOVE_PLAYER } from './actions';
import PlayerDashboard from './PlayerDashboard';
import Game from './Game';

class App extends Component {
  componentDidMount() {
    const { getGame, getPlayers, removePlayer } = this.props;
    this.socket = io.connect('http://localhost:3001');
    this.socket.on("newGame", game => getGame(game));
    this.socket.on("newPlayer", game => getGame(game));
    this.socket.on("currentPlayers", players => getPlayers(players));
    this.socket.on("playerLeft", _id => removePlayer(_id));
  }
  render() {
    return(
      <div>
        <Game />
        <PlayerDashboard />
      </div>
    )
  }
}

const mdp = dispatch => ({
  getGame: game => dispatch({ type: GAME, game }),
  getPlayers: players => dispatch({ type: PLAYERS, players }),
  removePlayer: _id => dispatch({ type: REMOVE_PLAYER, _id })
});

export default connect(null, mdp)(App);