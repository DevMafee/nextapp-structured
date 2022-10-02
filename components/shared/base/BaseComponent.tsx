export interface IBaseComponent {
  sampleTextProps: string;
}

const BaseComponent: React.FC<IBaseComponent> = ({ sampleTextProps }) => {
  return <div>Enter BaseComponent {sampleTextProps}</div>;
};

export default BaseComponent;
