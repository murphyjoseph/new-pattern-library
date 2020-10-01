import React from 'react';
import { shallow } from 'enzyme';
import { matchers } from 'jest-emotion'
import renderer from 'react-test-renderer'
import { Button } from '../Button/Button';

expect.extend(matchers);

const setup = (propsOverride?) => {
  const props = Object.assign({
    traits: {
      label: 'button',
      size: 'small',
      variant: 'primary'
    },
  }, propsOverride);

  const wrapper = shallow(<Button {...props} />);
  return {
    props,
    wrapper
  }
};

describe('Button Component', () => {
  it.skip('should display the prop button text', () => {

  });
  // const testSizeProp = (size) => {
  //   it(`should render a ${size} button`, () => {
  //     const comp = renderer
  //     console.log(wrapper.debug())
  //     expect(wrapper).toHaveStyleRule('padding', 0);
  //   });
  // };
  // testSizeProp('small');
})