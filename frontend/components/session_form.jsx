import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  handleDemo(e) {
    e.preventDefault();
    const user = "hi";
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link className="session-mode-change" to="/signup">sign up instead</Link>;
    } else {
      return <Link className="session-mode-change" to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    console.log("errors", this.props.errors);
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

    let submitValue = (this.props.formType === "login") ? "Sign In" : "Sign Up";

    return (
      <div>
        <div className="session-form-container">
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
                  placeholder="Your Password *"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session-input"
                />
              </label>
            </div>

            <div id="session-errors">{this.renderErrors()}</div>
            <input id="session-form-button" type="submit" value={submitValue} />

          </form>
        </div>
        <div className="modal-background">
        </div>
      </div>
  );
  }
}

export default SessionForm;
