import React from 'react';
import PropTypes from 'prop-types';

const UserCardItem = props => (
  <div>
    <img src={props.user.imgUrl} alt="user-image-profile" />
    <span>{props.user.username}</span>
  </div>
);

UserCardItem.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};

export default UserCardItem;
