import User from '../models/User';

export const createUser = async (req: any, res: any) => {
  const { userName, password } = req.body;

  try {
    const user = await User.create({ userName, password });

    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred!');
    }
  }
};
