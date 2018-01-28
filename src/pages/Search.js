import React from 'react';
import { connect } from 'react-redux';

import Header from '~/apps/Header/App';
import SearchUsers from '~/apps/SearchUser/App';
import { searchUsers } from '~/ducks/search';
import classes from './Search.less';

const SearchUsersContainer = connect(
  state => ({
    value: state.search.term,
    users: state.search.users,
    loading: state.search.loading,
    placeholder: 'Type github username',
    emptyMessage: 'No results! Try again.',
  }),
  dispatch => ({ onInput: value => dispatch(searchUsers(value)) }),
)(SearchUsers);

const SearchPage = () => (
  <div>
    <Header appName="GitHub Search Users" />

    <div className={classes.main}>
      <SearchUsersContainer />
    </div>
  </div>
);

export default SearchPage;
