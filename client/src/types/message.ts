export type Message = {
  content: string;
  chatId: string;
  userId: string;
  messageId: string;
};

export interface IMessageResponse {
  userId: {
    _id: string;
    userName: string;
  };
  content: string;
  chat: {
    _id: string;
    isGroupChat: false;
    users: Array<string>;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
