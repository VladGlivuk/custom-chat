import Chat from '../models/Chat';

export const createChat = async (req: any, res: any) => {
  const { chatName,
    isGroupChat,
    latestMessage,
    groupAdmin,users } = req.body;

  try {
    const user = await Chat.create({ chatName,
      isGroupChat,
      latestMessage,
      groupAdmin, users });

    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Error creating chat:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const fetchChats = async (req: any, res: any) => {
  console.log('req: ', req);
  try {
    Chat.find({users: {$elemMatch: {$eq: req.user._id}}}).populate("latestMessage").then((results) => {
      res.status(200).send(results)
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400);
      console.error(error.message);
    } else {
      res.status(500);
      console.error('An unknown error occurred!');
    }
  }
};
