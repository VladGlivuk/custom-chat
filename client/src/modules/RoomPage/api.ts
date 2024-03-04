import API from 'API';
import { IAuthorizationRequest, IMessageResponse } from 'types';

export const registerUser = async (registerValues: IAuthorizationRequest) => {
  const userResponse = await API.post(`register`, registerValues);
  return userResponse.data;
};

export const fetchMessages = async (roomId: string) => {
  const roomMessages = await API.get(`messages/${roomId}`);
  return roomMessages.data;
};

export const createMessage = async (message: string, chatId: string, userId: string) => {
  const response = await API.post<IMessageResponse>('message', {
    content: message,
    chatId,
    userId
  });

  return response.data;
};

export const createChat = async (userId: string) => {
  const chatData = JSON.stringify({
    chatName: 'sender',
    isGroupChat: false,
    users: [crypto.randomUUID(), userId]
  });

  const response = await API.post('chat', chatData);
  return response.data;
};
