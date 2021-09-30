import React from 'react';

import { NewButton } from './NewButton';

export default {
  title: 'Example/NewButton',
  component: NewButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <NewButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'New Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'New Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'New Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'New Button',
};
