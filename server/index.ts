import express from 'express';
const app = express();
import { createServer } from 'http';
const server = createServer(app);
import { Server } from "socket.io";

const io = new Server(server, {cors: {
  origin: '*'
}});

const port = 8080;

app.get('/', (req, res) => {
res.send('<h1>Hello</h1>')});

io.on('connection', (socket) => {
  console.log('socket:', socket);
  console.log('a user connected');

  socket.on('message', (message) => {
    io.emit('message', message);
    console.log('message: ', message);
  })

  socket.on('disconnect', () => {
    console.log('disconnect')
  })
});

server.listen(port);