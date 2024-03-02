import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// modules
import Login from 'modules/Login';
import Profile from 'modules/Profile';
import Registration from 'modules/Registration';
import RoomPage from 'modules/RoomPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="room/:roomId" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
