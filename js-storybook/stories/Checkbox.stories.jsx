import React from 'react';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: '체크박스1',
  id: 'checkbox-1',
};

export const Checked = Template.bind({});
Checked.args = {
  label: '체크박스2',
  id: 'checkbox-2',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '체크박스3',
  id: 'checkbox-3',
  disabled: true,
};
