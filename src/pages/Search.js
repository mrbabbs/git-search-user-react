import React from 'react';

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
  constructor(props) {
    super(props);
    this.state = {result: []};
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

export default SearchPage;

