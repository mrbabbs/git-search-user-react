import React from 'react';
import { connect } from 'react-redux';

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
    <div className={classes.main}>
      <SearchInputContainer placehoder="Type github username" />

      <div className={classes.main__results}>
        <UsersListContainer />
      </div>
    </div>
  </div>
);

export default SearchPage;
