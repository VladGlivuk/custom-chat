import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import RoomPage from './components/Room';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path='room/:id' element={<RoomPage />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
