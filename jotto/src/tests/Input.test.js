import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';

import Input from '../components/Input';

const setup = () => {
  return shallow(<Input />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});
