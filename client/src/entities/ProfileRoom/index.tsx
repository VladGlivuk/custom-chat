import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Room } from 'types';

const ProfileRoom: FC<Room> = ({ title, description, isActive, id }) => {
  return (
    <Link
      to={`/room/${id}`}
      className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
      <img
        src="https://avatars0.githubusercontent.com/u/35900628?v=4"
        alt=""
        className="rounded-full h-6 shadow-md inline-block mr-2"
      />
      {title}

      <span className="text-gray-500 text-xs pl-3">{description}</span>
    </Link>
  );
};

export default ProfileRoom;
