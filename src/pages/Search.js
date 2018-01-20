import React from 'react';
import { connect } from 'react-redux';

import SearchInput from '~/apps/SearchInput/App';
import UsersList from '~/apps/UsersList/App';
import { searchUsers } from '~/ducks/search';

const SearchInputContainer = connect(
  state => ({ value: state.search.term }),
  dispatch => ({ onInput: value => dispatch(searchUsers(value)) }),
)(SearchInput);

const UsersListContainer =
  connect(state => ({ list: state.search.users }))(UsersList);

const SearchPage = () => (
  <div>
    <SearchInputContainer />
    <UsersListContainer />
  </div>
);

export default SearchPage;
