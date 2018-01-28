import React from 'react';
import PropTypes from 'prop-types';

import UserList from './components/UserList';
import classes from './App.less';

const SearchUser = ({
  onInput, value, placeholder, users, loading,
}) => (
  <div className={classes.searchUsers}>
    <div className={classes.searchUsers__field}>
      <input
        type="text"
        className={classes.inputField}
        value={value}
        placeholder={placeholder}
        onInput={evt => onInput(evt.target.value)}
      />
    </div>

    <UserList list={users} loading={loading} />
  </div>
);

SearchUser.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    imgUrl: PropTypes.string,
  })),
};

SearchUser.defaultProps = {
  placeholder: '',
  users: [],
  loading: false,
};

export default SearchUser;
