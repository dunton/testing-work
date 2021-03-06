import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';
import App from '../components/App';

const setup = () => {
  return shallow(<App />);
};

test('app renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
