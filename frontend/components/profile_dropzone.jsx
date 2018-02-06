import React from 'react';
import Dropzone from 'react-dropzone';
import * as APIUtil from '../util/file_upload_api_util';

class ProfileDropzone extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      accepted: [],
      rejected: []
    };
  }


  onDrop(accepted, rejected) {
    this.setState({ accepted, rejected });
    if (accepted[0]) {
      console.log(accepted[0]);
      var g = accepted[0];
      const reader = new FileReader();
      window.g = g;
      reader.onload = () => {
        const fileAsBinaryString = reader.result;
        // console.log(fileAsBinaryString);
        var formData = new FormData();
        formData.append("image[image]", g);
        $.ajax({
          url: 'api/users/',
          method: 'POST',
          data: formData,
          contentType: false,
          processData: false,
        });
      };
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsBinaryString(g);
      // $.ajax({
      //   url: 'api/users/1',
      //   method: 'PATCH',
      //   data: {result},
      //   contentType: false,
      //   processData: false,
      // });
    }


  }

  render() {
    var profileDropzoneStyle = {
      border: '2px solid orange',
    };

    var profileActiveStyle = {
      border: '2px solid green',
      backgroundColor: 'rgba(0,0,0,.5)',
    };

    var rejectStyle = {
      border: '2px solid red',
      backgroundColor: 'rgba(0,0,0,.5)',
    };
    return (
      <section className="profile-image-section">
      <div>
        <Dropzone accept="image/jpeg, image/png" className="profile-image-dropzone"
          multiple={false} style={profileDropzoneStyle} activeStyle={profileActiveStyle} onDrop={this.onDrop.bind(this)}>

          <p>Try dropping some files here, or click to select files to upload.</p>
        </Dropzone>
      </div>
      <aside className="aside">
        <h2>Dropped files</h2>
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
