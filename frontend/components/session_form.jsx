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
    this.handleDemo = this.handleDemo.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    console.log("hey");
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
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
      return <Link className="session-mode-change" to="/signup">sign up instead</Link>;
    } else {
      return <Link className="session-mode-change" to="/login">log in instead</Link>;
    }
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

    let submitValue = (this.props.formType === "login") ? "Sign In" : "Sign Up";

    return (
      <div>

        <div className="session-form-container">
          <Link to="/" id="exit-button">X</Link>
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
            <input className="session-form-button" type="submit" value={submitValue} />

          </form>
          <button className="session-form-button" onClick={this.handleDemo}>Demo Login</button>
        </div>
        <div className="modal-background">
        </div>
      </div>
  );
  }
}

export default SessionForm;
