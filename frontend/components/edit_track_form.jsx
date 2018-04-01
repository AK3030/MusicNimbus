import React from 'react';
import {Link} from 'react-router-dom';

class EditTrackForm extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
    track_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("track[track_name]", this.state.track_name);
    this.props.updateTrack(this.props.match.params.trackId,formData);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    var link = `/users/${this.props.match.params.userId}`;

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
                  value={this.state.trackName}
                  onChange={this.update('track_name')}
                  className="session-input"
                />
              </label>
            </div>

            <div id="session-errors">{this.renderErrors()}</div>
            <input className="session-form-button" type="submit" value="Update Info" />

          </form>
        </div>
        <div className="modal-background">
        </div>
      </div>
  );
  }
}

export default EditTrackForm;
