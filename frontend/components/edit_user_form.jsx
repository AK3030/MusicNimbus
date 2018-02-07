import React from 'react';
import { Link } from 'react-router-dom';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      name: this.props.currentUser.name,
      location: this.props.currentUser.location,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const reader = new FileReader();
    var formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[name]", this.state.name);
    formData.append("user[location]", this.state.location);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {username: "Demo", password: "demopassword123"};
    this.props.processLogin({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link onClick={this.props.clearErrors} className="session-mode-change" to="/signup">sign up instead</Link>;
    } else {
      return <Link onClick={this.props.clearErrors} className="session-mode-change" to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return (
      // <ul>
      //   {this.props.errors.map((error, i) => (
      //     <li key={`error-${i}`}>
      //       {error}
      //     </li>
      //   ))}
      // </ul>
      <div>hi</div>
    );
  }

  render() {

    var link = `/users/${this.props.currentUser.id}`;
    return (
      <div>

        <div className="session-form-container">
          <Link to={link} id="exit-button">X</Link>
          <form onSubmit={this.handleSubmit} className="session-form-box">
            {this.props.formType} or {this.navLink()}
            <div id="form-input-container">
              <label>
                <input
                  placeholder="Your Username *"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="session-input"
                />
              </label>
              <br></br>
              <label>
                <input
                  placeholder="Your Name *"
                  type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="session-input"
                />
              </label>
              <br></br>
              <label>
                <input
                  placeholder="Your Location *"
                  type="text"
                  value={this.state.location}
                  onChange={this.update('location')}
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

export default EditUserForm;
