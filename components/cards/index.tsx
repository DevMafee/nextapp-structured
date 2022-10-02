import Image from 'next/image';

export interface IGlobalCard {
  classes?: string;
  title: string;
  image?: string;
  bodyText: string;
  footerText?: string;
  buttons?: [
    {
      label: string;
      classes?: string;
      link?: string;
    }
  ];
}

const GlobalCard: React.FC<IGlobalCard> = ({
  classes,
  title,
  image,
  bodyText,
  footerText,
  buttons,
}) => {
  return (
    <div
      className="flex flex-auto flex-col border-gray-900 shadow-2xl rounded m-2"
      style={{ width: '100%', maxWidth: '250px' }}
    >
      {image && (
        <Image src={image} alt="Sample Image" height="250px" width="100%" />
      )}
      <div className="flex flex-auto flex-col my-1">
        <h4 className={classes + ` px-1 font-bold`}>{title}</h4>
        <p className="flex flex-auto flex-col p-1">{bodyText}</p>
        <div className="border-t-2">
          <p className="flex flex-auto flex-col p-1">{footerText}</p>
          <div className="pt-2">
            {buttons &&
              buttons.length > 0 &&
              buttons.map((button: any, index: number) => (
                <a
                  key={index}
                  className={
                    button?.classes
                      ? `${button?.classes} p-2 m-1 rounded-md`
                      : `p-2 m-1 rounded-md`
                  }
                  style={{
                    padding: '5px',
                    cursor: 'pointer',
                    border: '1px solid #CCC',
                  }}
                >
                  {button.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCard;
