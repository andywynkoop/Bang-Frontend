import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from './actions';
import Bullets from './dashboard/Bullets';
import Cards from './dashboard/Cards';

class PlayerDashboard extends Component {
  
  render() {
    const { name, bullets, logout } = this.props;
    return (
      <div className="player-dashboard">
        <div className="player">
          <h4>{name}</h4>
          <div>
            <img className="avatar" src="https://s3.amazonaws.com/bang-aa/howard.jpg" />
            <Bullets number={bullets}/>
          </div>
        </div>
        <Cards />
        <button onClick={logout} className="app-btn logout" >Hit the Dusty Trail</button>
      </div>
    )
  }
}

const msp = ({ session: { username:name, bullets } }) => ({ name, bullets });

const mdp = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(msp, mdp)(PlayerDashboard);