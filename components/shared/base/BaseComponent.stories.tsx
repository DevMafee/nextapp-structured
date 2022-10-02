import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseComponent, { IBaseComponent } from './BaseComponent';

export default {
  title: 'templates/BaseComponent',
  component: BaseComponent,
  argTypes: {},
} as ComponentMeta<typeof BaseComponent>;

const Template: ComponentStory<typeof BaseComponent> = (args) => (
  <BaseComponent {...args} />
);

export const Base = Template.bind({});
Base.args = {
  sampleTextProps: 'Base Component for Storybook',
} as IBaseComponent;
