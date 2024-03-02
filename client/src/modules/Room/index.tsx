import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import { socket } from '../../socket';

const RoomPage: FC = () => {
  const [message, setMessage] = useState('');

  const { id } = useParams();

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    socket.connect();

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    // function onFooEvent(value) {
    //   setFooEvents(previous => [...previous, value]);
    // }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>RoomPage {id}</h1>

      {isConnected && <div>data</div>}

      <div className="flex gap-3">
        <Input
          changeHandler={(value) => setMessage(value)}
          value={message}
          label={'Your message...'}
        />

        <Button onClick={() => socket.emit('message', message)} title={'Send message'} />
      </div>
    </div>
  );
};

export default RoomPage;
