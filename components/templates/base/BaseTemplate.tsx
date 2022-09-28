import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProps: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProps }) => {
  return (
    <div className={styles.container}>Enter BaseTemplate {sampleTextProps}</div>
  );
};

export default BaseTemplate;
