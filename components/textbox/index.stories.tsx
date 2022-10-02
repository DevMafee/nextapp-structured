import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputTextBox from './index';

export default {
  title: 'templates/InputTextBox',
  component: InputTextBox,
  argTypes: {},
} as ComponentMeta<typeof InputTextBox>;

const Template: ComponentStory<typeof InputTextBox> = (args) => (
  <InputTextBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  classes: 'bg-transparent',
  label: 'Example of a Text Input.',
  icon: true,
  placeholder: 'Just a Placeholder',
  name: 'Lizards are a widespread reptiles.',
  type: 'text',
};

export const Primary = Template.bind({});
Primary.args = {
  classes: 'bg-teal-800',
  label: 'Example of a Text Input.',
  icon: false,
  placeholder: 'Just a Placeholder',
  name: 'Lizards are a widespread reptiles.',
  type: 'text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  classes: 'bg-emerald-800',
  label: 'Example of a Text Input.',
  icon: true,
  placeholder: 'Just a Placeholder',
  name: 'Lizards are a widespread reptiles.',
  type: 'text',
};

export const Success = Template.bind({});
Success.args = {
  classes: 'bg-green-800',
  label: 'Example of a Text Input.',
  icon: false,
  placeholder: 'Just a Placeholder',
  name: 'Lizards are a widespread reptiles.',
  type: 'text',
};
