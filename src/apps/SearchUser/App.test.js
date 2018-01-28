import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../test-utils';
import SearchUser from './App';

configTests();

test('renders an input element', (t) => {
  const wrapper = shallow(<SearchUser
    value="mrbabbs"
    onInput={Function.prototype}
    placeholder="type"
  />);

  t.is(wrapper.find('input').length, 1);
  t.is(wrapper.find('input').prop('value'), 'mrbabbs');
});

test('calls onInput() on typing', (t) => {
  const value = 'mrbabb';
  const onInput = term => t.is(term, value);
  const wrapper = shallow(<SearchUser {...{ value, onInput }} />);
  const input = wrapper.find('input');

  input.simulate('input', { target: { value } });
});

test('renders users results', (t) => {
  const value = 'mrbabb';
  const users = [{
    username: 'mrbabbs',
    imgUrl: 'image/fake',
  }];
  const onInput = Function.prototype;
  const wrapper = shallow(<SearchUser {...{ value, onInput, users }} />);
  const list = wrapper.find('UsersList');

  t.is(list.length, 1);
  t.deepEqual(list.prop('list'), users);
});
