import Message from '../models/Message';

export const createMessage = async (req: any, res: any) => {
  const { userName, password } = req.body;

  try {
    const user = await Message.create({ userName, password });

    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred!');
    }
  }
};

export const fetchMessages = async (req: any, res: any) => {
  console.log('req: ', req);
  try {
    Message.find({users: {$elemMatch: {$eq: req.user._id}}}).populate("latestMessage").then((results) => {
      res.status(200).send(results)
    });
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