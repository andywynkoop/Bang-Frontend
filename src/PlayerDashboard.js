import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './actions';
import Profile from './dashboard/Profile';
import Cards from './dashboard/Cards';
import DashButtons from './dashboard/DashButtons';


class PlayerDashboard extends Component {
  render() {
    const { user, logout } = this.props;
    return (
      <div className="player-dashboard">
        <Profile user={user} />
        <Cards />
        <DashButtons logout={logout} user={user} />
      </div>
    )
  }
}

const msp = ({ session, players }) => ({
  user: players[session]
});

const mdp = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(msp, mdp)(PlayerDashboard);