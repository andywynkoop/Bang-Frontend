import React, { Component } from 'react';

class DashButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleText: 'View Role',
      visible: false
    }
    this.toggleRoleText = this.toggleRoleText.bind(this);
  }
  
  toggleRoleText() {
    let { roleText, visible } = this.state;
    if (!visible) {
      roleText = this.props.user.role;
    } else {
      roleText = 'View Role';
    }
    visible = !visible;
    this.setState({ roleText, visible });
  }

  render() {
    const { logout } = this.props;
    return(
      <div>
        <button className="app-btn reveal-role" onClick={this.toggleRoleText}>
          {this.state.roleText}
        </button>
        <button onClick={logout} className="app-btn logout" >
          Hit the Dusty Trail
        </button>
      </div>
    )
  }
}


export default DashButtons;