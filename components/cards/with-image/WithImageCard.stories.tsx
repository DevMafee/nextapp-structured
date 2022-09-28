import { ComponentMeta, ComponentStory } from '@storybook/react';
import WithImageCard, { IWithImageCard } from './WithImageCard';
import { mockWithImageCardProps } from './WithImageCard.mocks';

export default {
  title: 'templates/WithImageCard',
  component: WithImageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof WithImageCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WithImageCard> = (args) => (
  <WithImageCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockWithImageCardProps.cardWithImage,
} as IWithImageCard;
