import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      listHidden: false
    };
    this.update = this.update.bind(this);
    this.makeVisible = this.makeVisible.bind(this);
  }

  handleClickOutside() {
    console.log('onClickOutside() method called');
    this.setState({listHidden:true});
  }

  makeVisible() {
    console.log('clicked inside');
    this.setState({listHidden:false});
  }


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

    console.log(React.version);
    var hiddenStyle = null;

    if (this.state.listHidden === true) {
      hiddenStyle = {display:"none"};
    }
    else {
      hiddenStyle = null;
    }

    return (
      <div className="all-search" onClick={this.makeVisible}>
        <form id="search-form">
          <input

            id="search-box"
            placeholder="User Search"
            onChange={this.update('query')}
            autoComplete="off"
          />
        </form>
        <div>

          <ul className = "search-list" style={hiddenStyle}>
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

export default onClickOutside(Search);

// export default Search;
