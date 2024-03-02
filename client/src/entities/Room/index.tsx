import cn from 'libs';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Room } from 'types';

const RoomItem: FC<Room> = ({ title, description, isActive, id }) => {
  return (
    <Link
      to={`/room/${id}`}
      className={cn('flex flex-row py-4 px-2 items-center border-b-2 cursor-pointer', {
        'border-l-4 border-blue-400 cursor-default': isActive
      })}>
      <div className="w-1/4">
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-12 w-12 rounded-full"
          alt="User Image"
        />
      </div>

      <div className="w-full">
        <div className="text-lg font-semibold">{title}</div>
        <span className="text-gray-500">{description}</span>
      </div>
    </Link>
  );
};

export default RoomItem;
