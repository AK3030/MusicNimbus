import React from 'react';
import linkCleaner from '../util/aws_link_cleaner';
import Dropzone from 'react-dropzone';
// import ProfileDropzone from './profile_dropzone';
import ProfileDropzoneContainer from './profile_dropzone_container';


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
    console.log(this.props);

    var image = linkCleaner(this.props.user.image);
    var header_image = linkCleaner(this.props.user.header_image);

    var userHeaderStyle = {
      backgroundImage: 'url(' + header_image+')'
    };

    var userImageStyle = {
      backgroundImage: 'url('+image+')'
    };

    var dropzone = (this.props.currentUser.id == this.props.match.params.userId) ? <ProfileDropzoneContainer imageType={"image"} /> : null;
    var header_dropzone = (this.props.currentUser.id == this.props.match.params.userId) ? <ProfileDropzoneContainer imageType={"header_image"} /> : null;

    var editLink = `#/users/${this.props.match.params.userId}/edit`;
    return (
      <div>
        <div style={userHeaderStyle} id="user-header">
          <div style={userImageStyle} id="profile-image-container">
            {dropzone}
          </div>
          <div id="profile-info-container">
            <div id="username">{this.props.user.username}</div>
            <div id="name">{this.props.user.name}</div>
            <div id="location">{this.props.user.location}</div>
          </div>
          {header_dropzone}
        </div>


        <div id="user-page">
          <nav id="user-nav">
            <ul id="user-nav-left">
              <li id="active">All</li>
              <li>Tracks</li>
              <li>Albums</li>
              <li>Playlists</li>
              <li>Reposts</li>
            </ul>
            <ul id="user-nav-right">
              <a href={editLink}><li className="edit">Edit</li></a>
            </ul>
          </nav>
        </div>

      </div>

    );
  }
}

export default UserShow;
