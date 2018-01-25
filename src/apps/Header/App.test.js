import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../test-utils';
import Header from './App';

configTests();

test('renders app name', (t) => {
  const appName = 'GitHub Search Users';
  const wrapper = shallow(<Header appName={appName} />);

  t.is(wrapper.find('[data-test-app-name]').text(), appName);
});
