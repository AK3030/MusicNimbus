import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.update = this.update.bind(this);
  }

  // componentDidMount() {
  //   console.log("asldkfjasldfj");
  //   this.props.fetchSearchUsers(this.state.query);
  // }

  update(field) {
    return e => {
      if (e.currentTarget.value !== "") {
        this.props.fetchSearchUsers(e.currentTarget.value);
      }

      this.setState({[field]: e.currentTarget.value});
    };

  }

  render() {
    var arr = [];
    var userList = this.state.query ? this.props.searchUsers: {};

    return (
      <div className="all-search">
        <form id="search-form">
          <input

            id="search-box"
            placeholder="Search (not yet implemented)"
            onChange={this.update('query')}
            autoComplete="off"
          />
        </form>
        <div>

          <ul className = "search-list">
            {
            Object.keys(userList).map(key => {
              return <li  key= {userList[key].id}>
                <Link className="search-users" to={`/users/${userList[key].id}`}>{userList[key].username}</Link>

              </li>;
            })
            }
          </ul>

        </div>
      </div>
    );
  }
}

export default Search;
