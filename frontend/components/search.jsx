import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import linkCleaner from '../util/aws_link_cleaner';

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
    this.setState({listHidden:true});
  }

  makeVisible() {
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
                <Link className="search-users" to={`/users/${userList[key].id}`}>
                  <img className ="search-result-image"src={linkCleaner(userList[key].image)}></img>
                  <div className ="search-result-text">{userList[key].username}</div>
                </Link>

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
