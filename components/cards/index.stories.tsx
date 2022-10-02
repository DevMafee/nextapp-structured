import { ComponentMeta, ComponentStory } from '@storybook/react';
import GlobalCard from './index';

export default {
  title: 'templates/Card',
  component: GlobalCard,
  argTypes: {},
} as ComponentMeta<typeof GlobalCard>;

const Template: ComponentStory<typeof GlobalCard> = (args) => (
  <GlobalCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  classes: 'bg-transparent border-b-2 uppercase',
  title: 'Example of a card using an image content.',
  image: 'images/salman.jpg',
  bodyText:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  footerText: 'Lizards are a widespread reptiles.',
  buttons: [
    {
      label: 'View Details',
      classes: 'bg-green-800 text-white',
      link: 'http://salmansajib.com',
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  classes: 'bg-teal-800 text-white p-2',
  title: 'Example of a card using an image to reinforce the content.',
  image: 'images/salman.jpg',
  bodyText:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  footerText: 'Lizards are a widespread.',
  buttons: [
    {
      label: 'Go to Google',
      classes: 'bg-teal-800 text-white',
      link: 'http://google.com',
    },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  classes: 'bg-emerald-800 text-white hover:text-blue-400',
  title: 'Example of a card using an image to reinforce the content.',
  image: 'images/salman.jpg',
  bodyText:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  footerText: 'Lizards are a widespread.',
};

export const Success = Template.bind({});
Success.args = {
  classes: 'bg-green-800 text-white border-b-1',
  title: 'Example of a card using an image to reinforce the content.',
  bodyText:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  footerText: 'Lizards are a widespread.',
};
