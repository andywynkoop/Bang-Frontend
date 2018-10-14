import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { GAME } from './actions';
import PlayerDashboard from './PlayerDashboard';
import Game from './Game';

class App extends Component {
  componentDidMount() {
    this.socket = io.connect('http://localhost:3001');
    this.socket.on("newGame", game => this.props.newGame(game));
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
  newGame: game => dispatch({ type: GAME, game })
});

export default connect(null, mdp)(App);