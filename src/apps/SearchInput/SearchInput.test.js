import test from "ava";
import React from "react";
import { shallow } from "enzyme";

import { configTests } from "../../test-utils";
import SearchInput from "./App";

configTests();

test("renders an input element", t => {
  const wrapper = shallow(<SearchInput onInput={Function.prototype}/>);

  t.is(wrapper.find('input').length, 1);
});

test("calls onInput() on KeyEventUp", t => {
  const onInput = evt => t.is(evt.key, 'a');
  const wrapper = shallow(<SearchInput onInput={onInput}/>);
  const input = wrapper.find('input')

  input.simulate('keyup', { key: 'a' });
});
