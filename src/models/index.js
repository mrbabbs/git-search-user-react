import PropTypes from 'prop-types';

// eslint-disable-next-line
export const User = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string,
  imgUrl: PropTypes.string,
  profileUrl: PropTypes.string,
};
