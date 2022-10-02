import Image from 'next/image';

export interface IWithImageCard {
  title: string;
  image: string;
  bodyText: string;
  footerText: string;
}

const WithImageCard: React.FC<IWithImageCard> = ({
  title,
  image,
  bodyText,
  footerText,
}) => {
  return (
    <div>
      <Image src={image} alt="Sample Image" height="250px" width="250px" />
      <div>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{bodyText}</p>
      </div>
      <div>
        <p>{footerText}</p>
      </div>
    </div>
  );
};

export default WithImageCard;
