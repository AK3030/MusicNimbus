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
    console.log("handle submit",user);
    this.props.processForm({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
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

    return (
    <div className="session-form-container">
      <form onSubmit={this.handleSubmit} className="session-form-box">
        {this.props.formType} or {this.navLink()}
        {this.renderErrors()}
        <label>Username:
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="session-input"
          />
        </label>

        <label>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="session-input"
          />
        </label>
        <input type="submit" value="Submit" />

      </form>
    </div>
  );
  }
}

export default SessionForm;
