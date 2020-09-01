import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { BtnPrimary, IPropsBtnPrimary } from '../components/btn/btn-primary';

export default {
  title: 'Example/Button',
  component: BtnPrimary,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const printMe = () => {
  console.log("successful click event fired.");
}

const Template: Story<IPropsBtnPrimary> = (args) => <BtnPrimary {...args} />;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  text: 'primary small',
  onClick: printMe,
  size: "small"
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  text: 'primary large',
  onClick: printMe,
  size: "large"
};