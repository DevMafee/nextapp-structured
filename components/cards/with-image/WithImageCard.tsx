import Image from 'next/image';
import styles from './WithImageCard.module.css';

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
    <div className={styles.card}>
      <Image
        src={image}
        className={styles.image}
        alt="Sample Image"
        height="250px"
        width="250px"
      />
      <div className={styles.container}>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{bodyText}</p>
      </div>
      <div className={styles.footer}>
        <p>{footerText}</p>
      </div>
    </div>
  );
};

export default WithImageCard;
