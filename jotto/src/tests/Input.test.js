import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './testUtils';

import Input from '../components/Input';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = null;
  let wrapper = null;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
  });
  test('state updates with value of input box upon change', () => {
    wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    wrapper = setup();
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    submitButton.simulate('click');

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
