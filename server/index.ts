import express from 'express';
import 'dotenv/config';
const app = express();
import { createServer } from 'http';
const server = createServer(app);
import { Server } from 'socket.io';
import connectDB from './config/database';
import cors from 'cors';
import authRoutes from './src/routes/auth';

connectDB();

app.use(authRoutes);

app.use(express.json());

app.use(cors());

const io = new Server(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

const port = process.env.PORT || 8000;

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data);
  });
});

server.listen(port);
