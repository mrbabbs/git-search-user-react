import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchInput from '~/apps/SearchInput/App';
import UsersList from '~/apps/UsersList/App';

const users = [
  {
    username: 'mrbabbs',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'phoenix',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'motzard',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'bitede',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'duck007',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  },
]

class SearchPage extends React.Component {
  static propTypes = {
    search: PropTypes.shape({ term: PropTypes.string }).isRequired,
    result: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { result: props.result };
  }

  handleOnInput(evt) {
    const typed = evt.target.value;

    this.setState({ result : users.filter(u => u.username.includes(typed)) });
  }

  render() {
    return (
      <div>
        <SearchInput onInput={(evt) => this.handleOnInput(evt)}/>
        <UsersList list={this.state.result}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search,
  result: state.users
});

export default connect(mapStateToProps)(SearchPage);

