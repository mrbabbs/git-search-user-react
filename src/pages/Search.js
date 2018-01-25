import React from 'react';
import { connect } from 'react-redux';

import Header from '~/apps/Header/App';
import SearchInput from '~/apps/SearchInput/App';
import UsersList from '~/apps/UsersList/App';
import { searchUsers } from '~/ducks/search';
import classes from './Search.less';

const SearchInputContainer = connect(
  state => ({ value: state.search.term }),
  dispatch => ({ onInput: value => dispatch(searchUsers(value)) }),
)(SearchInput);

const UsersListContainer =
  connect(state => ({ list: state.search.users }))(UsersList);

const SearchPage = () => (
  <div>
    <Header appName="GitHub Search Users" />

    <div className={classes.main}>
      <SearchInputContainer placeholder="Type github username" />

      <div className={classes.main__results}>
        <UsersListContainer />
      </div>
    </div>
  </div>
);

export default SearchPage;
