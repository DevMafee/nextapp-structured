import { IWithImageCard } from './WithImageCard';

const cardWithImage: IWithImageCard = {
  title: 'Hello world!',
  image: 'images/salman.jpg',
  bodyText: `You probably want to use our icons in more than one component in your project, right? Importing icons into each of your project's components can be really tedious and prone to display errors - especially over time.`,
  footerText: `Our application also has React components`,
};

export const mockWithImageCardProps = {
  cardWithImage,
};
