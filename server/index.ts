import express from 'express';
import 'dotenv/config';
const app = express();
import { createServer } from 'http';
const server = createServer(app);
import { Server } from 'socket.io';

const io = new Server(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data);
  });
});

server.listen(port);
