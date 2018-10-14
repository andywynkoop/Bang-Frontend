import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.join = this.join.bind(this);
  }
  
  join(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  button() {
    return this.state.username ? <button className="app-btn">Saddle Up</button> : null
  }

  render() {
    return(
      <div className="app">
        <form onSubmit={this.join}>
          <h2>Well HOWWWDY, Partner!</h2>
          <h2>What do you call yourself?</h2>
          <input className="app-input" type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
          {this.button()}
        </form>
      </div>
    )
  }
}

const mdp = dispatch => ({ login: user => dispatch(loginUser(user))});

export default connect(null, mdp)(Login);