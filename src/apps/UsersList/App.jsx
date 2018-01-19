import React from 'react';
import PropTypes from 'prop-types';

import UserCardItem from './components/UserCardItem';

const renderUsers = users => users.map((user, idx) => (
  <li key={`${user.username}-${idx}`}>
    <UserCardItem user={user} />
  </li>
));

const UsersList = (props) => {
  const {
    emptyMessage,
    list,
  } = props;

  return list.length
    ? (<ul>{renderUsers(list)} </ul>)
    : (
      <div>
        <span>{emptyMessage}</span>
      </div>
    );
};

UsersList.propTypes = {
  list: PropTypes.array.isRequired,
  emptyMessage: PropTypes.string,
};

export default UsersList;
