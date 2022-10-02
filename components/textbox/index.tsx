import { AiOutlineSearch } from 'react-icons/ai';
export interface IInputTextBox {
  classes?: string;
  label?: string;
  icon?: boolean;
  placeholder?: string;
  name: string;
  type?: string;
}

const InputTextBox: React.FC<IInputTextBox> = ({
  classes,
  label,
  icon,
  placeholder,
  name,
  type = 'string',
}) => {
  return (
    <div
      className="flex flex-auto flex-col border-gray-900 rounded-2xl m-2 border-2"
      style={{ width: '100%', maxWidth: '250px' }}
    >
      <div className={`${classes} flex flex-col relative rounded-2xl`}>
        {label && (
          <span
            className="flex bg-transparent bg-origin-content"
            style={{
              marginTop: '-8px',
              width: '80%',
              maxWidth: '200px',
              marginLeft: '10px',
            }}
          >
            {label}
          </span>
        )}
        <div className={`flex flex-row my-1 align-middle`}>
          <input
            type={type}
            className={`bg-transparent outline-none border-none p-2`}
            name={name}
            placeholder={placeholder}
            style={{ width: '90%', maxWidth: '235px', height: '20px' }}
          />
          {icon && <AiOutlineSearch className="text-4xl self-center" />}
        </div>
      </div>
    </div>
  );
};

export default InputTextBox;
