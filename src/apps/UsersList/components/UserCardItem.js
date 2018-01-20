import React from 'react';
import PropTypes from 'prop-types';

const UserCardItem = ({ user: { username, imgUrl } }) => (
  <div>
    <img src={imgUrl} alt={username} />
    <span>{username}</span>
  </div>
);

UserCardItem.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};

export default UserCardItem;
