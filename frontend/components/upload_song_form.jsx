import React from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class UploadSongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track_name: "",
      preview: null,
      acceptedTrack: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  imageOnDrop(accepted, rejected) {
    this.setState({acceptedImage: accepted[0], rejectedImage:rejected});
    this.setState({preview: accepted[0].preview});
  }

  trackOnDrop(accepted, rejected) {
    this.setState({acceptedTrack:accepted[0], rejectedTrack:rejected});
    console.log(accepted);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append("track[track_name]", this.state.track_name);
    formData.append("track[image]", this.state.acceptedImage);
    formData.append("track[audio]", this.state.acceptedTrack);
    formData.append("track[user_id]", this.props.currentUser.id);
    this.props.uploadTrack(formData);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return null;
    // return (
    //   <ul>
    //     {this.props.errors.map((error, i) => (
    //       <li key={`error-${i}`}>
    //         {error}
    //       </li>
    //     ))}
    //   </ul>
    // );
  }

  render() {
    var previewUrl = "";
    if (this.state.preview){
      var previewUrl = this.state.preview;
    }

    var trackImageDropZone = {
      border: '2px solid black',
      margin: '0 auto',
      height: '160px',
      width: '160px',
      color: 'white',
      backgroundImage: 'url('+ previewUrl + ')',
      backgroundSize: '100%',
    };

    var trackAudioDropZone = {
      margin: '0 auto',
      height: '50px',
      width: '325px',
      border: '2px solid black',
    };

    var accepted = this.state.acceptedTrack ? this.state.acceptedTrack.name: "";
    var link = `/users/${this.props.currentUser.id}`;
    return (
      <div>

        <div className="session-form-container">
          <Link to={link} id="exit-button">X</Link>
          <form onSubmit={this.handleSubmit} className="session-form-box">
            <div id="form-input-container">
              <label>
                <input
                  placeholder="Track Name *"
                  type="text"
                  value={this.state.track_name}
                  onChange={this.update('track_name')}
                  className="session-input"
                />
              </label>
              <br></br>
              <br></br>
              <p className="upload-input-titles">Upload Track Image:</p>
              <Dropzone style={trackImageDropZone} multiple={false} onDrop={this.imageOnDrop.bind(this)}></Dropzone>
                <br></br>
                <p className="upload-input-titles">Upload Track Audio: </p>
              <Dropzone style={trackAudioDropZone} multiple={false} onDrop={this.trackOnDrop.bind(this)}/>
              <div className="accepted-track">{accepted}</div>
            </div>
            <div id="session-errors">{this.renderErrors()}</div>
            <input className="session-form-button" type="submit" value="Upload Track" />

          </form>
        </div>
        <div className="modal-background"></div>
      </div>
  );
  }
}

export default UploadSongForm;
