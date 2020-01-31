import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from '../components/GuessedWords';
import { findByTestAttr } from './testUtils';

const defaultProps = {
  guessedWords: { guessedWord: ['ryan'], letterMatchCount: 3 }
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('if there are no words guessed', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {});
