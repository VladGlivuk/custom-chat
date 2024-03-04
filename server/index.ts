import express from 'express';
import 'dotenv/config';
const app = express();
import { createServer } from 'http';
import { Server } from 'socket.io';
import connectDB from './config/database';
import cors from 'cors';
import authRoutes from './src/routes/auth';
import chatRoutes from './src/routes/chat';
import messageRoutes from './src/routes/message';

app.use(cors());

app.use(express.json());

const server = createServer(app);

connectDB();

app.use(authRoutes, chatRoutes, messageRoutes);

const io = new Server(server, {
  pingTimeout: 60000,
  cors: { origin: 'http://localhost:3000'},
});

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on('setup', (userData) => {
    console.log('userData: ', userData);
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on('join chat', (roomId) => {
    console.log('roomId: ', roomId);
    socket.join(roomId)
  });

  socket.on('send_message', (data) => {
    console.log('data: ', data);
    socket.broadcast.emit('receive_message', data);
  });
});

const port = process.env.PORT || 8000;

server.listen(port);
