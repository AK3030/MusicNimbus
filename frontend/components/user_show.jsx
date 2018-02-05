import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';
import Dropzone from 'react-dropzone';
import Basic from './dropzone_test';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
        this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render () {

    if (!this.props.user) {
      return (<div>loading</div>);
    }

    var image = linkCleaner(this.props.user.image);
    var header_image = linkCleaner(this.props.user.header_image);

    var userHeaderStyle = {
      backgroundImage: 'url(' + header_image+')'
    };

    var userImageStyle = {
      backgroundImage: 'url('+image+')'
    };



    return (
      <div>
        <div style={userHeaderStyle} id="user-header">
          <div style={userImageStyle} id="profile-image-container">
            <Basic/>
          </div>
          <div id="profile-info-container">
            <div id="username">{this.props.user.username}</div>
            <div id="name">{this.props.user.name}</div>
            <div id="location">{this.props.user.location}</div>
          </div>
        </div>

        <div id="user-page">
          <nav id="user-nav"></nav>
        </div>

      </div>

    );
  }
}

export default UserShow;
