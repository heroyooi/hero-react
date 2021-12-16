import React from 'react';
import Radio from '../components/Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: '라디오1',
  id: 'radio-1',
};

export const Checked = Template.bind({});
Checked.args = {
  label: '라디오2',
  id: 'radio-2',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: '라디오3',
  id: 'radio-3',
  disabled: true,
};
