import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchInput from '~/apps/SearchInput/App';
import UsersList from '~/apps/UsersList/App';
import { searchTerm } from '~/ducks/search';

const SearchInputContainer = connect(
  state => ({ value: state.search.term }),
  dispatch => ({ onInput: value => dispatch(searchTerm(value)) })
)(SearchInput);

const UsersListContainer =
  connect(state => ({ list: state.search.users }))(UsersList);

const SearchPage = () => (
  <div>
    <SearchInputContainer/>
    <UsersListContainer/>
  </div>
)

export default SearchPage;
