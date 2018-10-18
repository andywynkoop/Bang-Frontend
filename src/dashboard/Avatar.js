import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateAvatar } from '../actions';
const defaultAvatar = "https://s3.amazonaws.com/bang-aa/howard.jpg";


class Avatar extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    let file = e.target.files[0];
    let data = new FormData();
    data.append('image', file);
    this.props.upload(data);
  }

  render() {
    let { avatar } = this.props;
    avatar = avatar || defaultAvatar;
    return(
      <div>
          <label htmlFor="upload">
            <img className="avatar" src={avatar} onClick={this.save} />
          </label>
          <input type="file" id="upload" onChange={this.upload} style={{ display: "none" }} />
      </div>
    )
  }
}

const mdp = dispatch => ({
  upload: data => dispatch(updateAvatar(data))
});

export default connect(null, mdp)(Avatar);