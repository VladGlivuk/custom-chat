import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// modules
import Home from 'modules/Home';
import RoomPage from 'modules/RoomPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="room/:id" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
