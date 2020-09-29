import React from 'react';
import { shallow } from 'enzyme';
import { matchers } from 'jest-emotion'
import { TextEmotion } from '../Text-emotion';

expect.extend(matchers);

const setup = (propOverrides?) => {
  const props = Object.assign({
    traits: {
      text: 'this is title',
      variant: 'titleOne',
      jssObj: false,
    }
  }, propOverrides);
  const wrapper = shallow(<TextEmotion {...props} />);

  return {
    props,
    wrapper,
  }
};

describe('Base Text with Emotion', () => {
  it('should default to a span if no tag is given', () => {
    const { wrapper } = setup();
    expect(wrapper.is('span'))
  });
  it('should use a tag given by props', () => {
    const tag = 'h1';
    const { wrapper } = setup({ tag });
    expect(wrapper.is(tag));
  });
  it('should display text', () => {
    const { wrapper } = setup();
    expect(wrapper.text()).toEqual('this is title');
  });
  it('styles', () => {
    const { wrapper } = setup();
    console.log(wrapper);
    expect(wrapper.render()).toHaveStyleRule('color', 'firebrick');
    expect(wrapper.render()).toHaveStyleRule('font-size', '2.5rem');
  });
});