import React from 'react';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }
  render () {
    if (!this.props.user) {
      return null;
    }
    // var tempimage = "https://s3-us-west-1.amazonaws.com/musicnimbus/users/images/000/000/002/original/30_owsla_live.jpg";
    var image = this.props.user.image;
    var image = image.replace(/\d+$/, "");
    image = image.slice(4, image.length-1);

    var userHeaderStyle = {
      backgroundImage: 'url(https://s3-us-west-1'+ image +')',
    };



    return (
      <div>
        <div style={userHeaderStyle} id="user-header">
          <div id="profile-image-container"></div>
          <div id="profile-info-container">
            <div id="username">Skrillex</div>
            <div id="name">Sonny Moore</div>
            <div id="location">Los Angeles, United States</div>
          </div>

        </div>


      </div>

    );
  }
}

export default UserShow;
