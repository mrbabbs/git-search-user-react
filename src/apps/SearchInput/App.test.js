import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../test-utils';
import SearchInput from './App';

configTests();

test('renders an input element', (t) => {
  const wrapper = shallow(<SearchInput
    value="mrbabbs"
    onInput={Function.prototype}
    placeholder="type"
  />);

  t.is(wrapper.find('input').length, 1);
  t.is(wrapper.find('input').prop('value'), 'mrbabbs');
  t.is(wrapper.find('input').prop('placeholder'), 'type');
});

test('calls onInput() on typing', (t) => {
  const value = 'mrbabb';
  const onInput = term => t.is(term, value);
  const wrapper = shallow(<SearchInput {...{ value, onInput }} />);
  const input = wrapper.find('input');

  input.simulate('input', { target: { value } });
});
