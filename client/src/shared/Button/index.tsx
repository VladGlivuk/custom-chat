import { FC } from 'react';

type Props = {
  title: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ title, onClick }) => {
  return (
    <div
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-max text-center cursor-pointer"
      onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
