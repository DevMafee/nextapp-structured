import styles from './BaseComponent.module.css';

export interface IBaseComponent {
  sampleTextProps: string;
}

const BaseComponent: React.FC<IBaseComponent> = ({ sampleTextProps }) => {
  return (
    <div className={styles.container}>
      Enter BaseComponent {sampleTextProps}
    </div>
  );
};

export default BaseComponent;
