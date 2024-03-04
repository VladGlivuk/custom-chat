import Message from '../models/Message';
import Chat from "../models/Chat";
import User from "../models/User";

export const getAllMessages = async (req: any, res: any) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
    .populate("userId", "userName")

    res.status(200).json(messages);
  } catch (error: any) {
    res.status(400);
    console.error(error.message);
  }
}

export const sendMessage = async (req: any, res: any) => {
  const { content, chatId, userId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  const newMessage = {
    userId,
    content,
    chat: chatId,
  };

  try {
    let message: any = await Message.create(newMessage);

    message = await message.populate("userId", "userName");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "userName",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error: any) {
    res.status(400);
    console.error(error.message);
  }
};