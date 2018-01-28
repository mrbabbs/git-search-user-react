import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../../test-utils';
import UsersList from './UserList';

configTests();

const users = [{
  id: 1,
  username: 'mrbabbs',
  imgUrl: 'cdn.fake.url/mrbabbs.png',
}, {
  id: 2,
  username: 'bodge',
  imgUrl: 'cdn.fake.url/bodge.png',
}, {
  id: 3,
  username: 'hercules',
  imgUrl: 'cdn.fake.url/hercules.png',
}];

test('renders an message if the list is empty', (t) => {
  const emptyMessage = 'No users found';
  const wrapper = shallow(<UsersList list={[]} emptyMessage={emptyMessage} />);

  t.is(wrapper.find('span').text(), 'No users found');
  t.is(wrapper.find('UserItem').length, 0);
});

test('renders no empty message if the list is not empty', (t) => {
  const emptyMessage = 'No users found';
  const wrapper =
    shallow(<UsersList list={users} emptyMessage={emptyMessage} />);

  t.is(wrapper.find('div span').length, 0);
});

test('renders userCardItems', (t) => {
  const wrapper = shallow(<UsersList list={users} />);

  t.is(wrapper.find('li').length, users.length);
});

test('renders empty UserCardItems', (t) => {
  const emptyUsers = [{ id: 10 }, { id: 11 }];
  const wrapper = shallow(<UsersList list={emptyUsers} />);

  t.is(wrapper.find('li').length, emptyUsers.length);
});
