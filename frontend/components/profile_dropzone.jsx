import React from 'react';
import Dropzone from 'react-dropzone';
import * as APIUtil from '../util/file_upload_api_util';

class ProfileDropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accepted: [],
      rejected: []
    };

  }


  onDrop(accepted, rejected) {
    this.setState({ accepted, rejected });
    if (accepted[0]) {
      var g = accepted[0];
      const reader = new FileReader();

      reader.onload = () => {
        var formData = new FormData();
        formData.append(`user[${this.props.imageType}]`, g);
        this.props.updateUser(this.props.currentUser.id, formData);
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsBinaryString(g);
    }
  }


  render() {
    var profileDropzoneStyle = {
      // border: '2px solid white',
      borderRadius: '50%',
      height: '200px',
      width: '200px',
      color: 'white',
    };

    var profileActiveStyle = {
      border: '2px solid green',
      backgroundColor: 'rgba(0,0,0,.5)',
      borderRadius: '50%',
      height: '200px',
      width: '200px',
    };

    var rejectStyle = {
      border: '2px solid red',
      backgroundColor: 'rgba(0,0,0,.5)',
    };

    if (this.props.imageType == "header_image") {
      profileDropzoneStyle = {
        // border: '2px solid white',
        height: '260px',
        width: '909px',
        marginTop:'-30px',

      };
      profileActiveStyle = {
        backgroundColor: 'rgba(0,0,0,.5)',
        border: '2px solid green',
        height: '260px',
        width: '909px',
        marginTop:'-30px',

      };
    }
    return (
      <section className="profile-image-section">
      <div>
        <Dropzone accept="image/jpeg, image/png" className="profile-image-dropzone"
          multiple={false} style={profileDropzoneStyle} activeStyle={profileActiveStyle} onDrop={this.onDrop.bind(this)}>

          {/* <p className="dropzone-text">Try dropping some files here, or click to select files to upload.</p>*/}
        </Dropzone>
      </div>
      <aside className="aside">
        <h2 className="dropzone-text"></h2>
        <ul>
          {
            this.state.accepted.map(f => <li key={f.name} className="accepted-files">{f.name} - {f.size} bytes</li>)
          }
        </ul>
      </aside>
    </section>
  );
  }
}

export default ProfileDropzone;
