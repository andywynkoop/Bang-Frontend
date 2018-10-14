import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './actions';
import Profile from './dashboard/Profile';
import Cards from './dashboard/Cards';


class PlayerDashboard extends Component {
  
  render() {
    const { name, bullets, logout } = this.props;
    return (
      <div className="player-dashboard">
        <Profile name={name} bullets={bullets} />
        <Cards />
        <button onClick={logout} className="app-btn logout" >
          Hit the Dusty Trail
        </button>
      </div>
    )
  }
}

const msp = ({ session: { username:name, bullets } }) => ({ name, bullets });

const mdp = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(msp, mdp)(PlayerDashboard);