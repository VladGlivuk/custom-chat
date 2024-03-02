import { Room } from 'types';

export const defaultMessages = [
  { message: 'Sent message', isReceived: false, id: crypto.randomUUID() },
  { message: 'Received message', isReceived: true, id: crypto.randomUUID() }
];

export const rooms: Array<Room> = [
  { title: 'Room 1', description: 'Room 1 description', id: 1 },
  { title: 'Room 2', description: 'Room 2 description', id: 2 },
  { title: 'Room 3', description: 'Room 3 description', id: 3 },
  { title: 'Room 4', description: 'Room 4 description', id: 4 },
  { title: 'Room 5', description: 'Room 5 description', id: 5 }
];
