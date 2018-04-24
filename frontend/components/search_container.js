import { connect } from 'react-redux';
import { fetchSearchUsers } from '../actions/search_users_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    searchUsers: state.searchUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchUsers: (query) => dispatch(fetchSearchUsers(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
