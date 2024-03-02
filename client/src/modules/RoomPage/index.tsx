import MessageItem from 'entities/Message';
import RoomItem from 'entities/Room';
import { defaultMessages, rooms } from 'mocks';
import { FC, KeyboardEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Input from 'shared/Input';
import { socket } from 'socket';
import { Message } from 'types';
// shared

const RoomPage: FC = () => {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState<Array<Message>>(defaultMessages);

  const { roomId } = useParams();

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((previousMessages) => [
        ...previousMessages,
        { message: data.message, isReceived: true, id: crypto.randomUUID() }
      ]);
    });
  }, [socket]);

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        sendMessage();
        break;

      case 'Escape':
        clearMessageInput();
        break;

      default:
        break;
    }
  };

  const sendMessage = () => {
    socket.emit('send_message', { message });
    clearMessageInput();
  };

  const clearMessageInput = () => setMessage('');

  const userName = 'user';

  return (
    <div className="container mx-auto shadow-lg rounded-lg min-h-dvh">
      <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
        <div className="font-semibold text-2xl">Your Chats</div>
        <div className="w-1/2">
          <input
            type="text"
            name=""
            id=""
            placeholder="search IRL"
            className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
          />
        </div>

        <Link
          to="/profile"
          className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
          {userName}
        </Link>
      </div>

      <div className="flex flex-row justify-between bg-white">
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          {rooms.map(({ title, description, id }) => (
            <RoomItem
              title={title}
              description={description}
              key={id}
              isActive={+(roomId as string) === id}
              id={id}
            />
          ))}
        </div>

        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col gap-2 mt-5">
            {messages.map(({ message, isReceived, id }) => (
              <MessageItem key={id} message={message} isReceived={isReceived} id={id} />
            ))}
          </div>

          <div className="py-5">
            <Input
              value={message}
              changeHandler={(value) => setMessage(value)}
              onKeyDown={onKeyDownHandler}
              className="w-full bg-gray-300 py-2 px-3 rounded-3xl"
              label="type your message here..."
            />
          </div>
        </div>

        <div className="w-2/5 border-l-2 px-5">
          <div className="flex flex-col">
            <h1>RoomPage {roomId}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
