import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { BtnUtility, IPropsBtnUtility } from './../components/btn/btn-utility';

export default {
  title: 'Example/Button',
  component: BtnUtility,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<IPropsBtnUtility> = (args) => <BtnUtility {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  text: 'primary',
  href: "https://www.google.com",
  size: "default"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  text: 'secondary',
  href: "https://www.google.com",
  size: "default"
};

export const Large = Template.bind({});
Large.args = {
  variant: "Large Btn",
  text: 'primary',
  href: "https://www.google.com",
  size: "large"
};

export const Small = Template.bind({});
Small.args = {
  variant: "Small Btn",
  text: 'primary',
  href: "https://www.google.com",
  size: "small"
};
