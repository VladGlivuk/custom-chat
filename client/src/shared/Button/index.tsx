import cn from 'libs';
import { FC } from 'react';

type Props = {
  title: string;
  onClick: () => void;
  className?: string;
};

const Button: FC<Props> = ({ title, onClick, className }) => {
  return (
    <button
      className={cn(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-full text-center cursor-pointer',
        className
      )}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
