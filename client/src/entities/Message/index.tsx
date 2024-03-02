import { FC } from 'react';
// types
import { Message } from 'types';
// libs
import cn from 'libs';

const MessageItem: FC<Message> = ({ isReceived, message }) => {
  return (
    <div
      className={cn('flex justify-end items-center gap-2 mb-4', {
        'justify-start': isReceived
      })}>
      {isReceived && (
        <img
          src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
          className="object-cover h-8 w-8 rounded-full"
          alt=""
        />
      )}

      <div
        className={cn(
          'mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white',
          { 'bg-gray-400': isReceived }
        )}>
        {message}
      </div>
    </div>
  );
};

export default MessageItem;
