import User, { IUser } from '../models/User';

export const createUser = async (req: IUser, res: any) => {
  const { login, password } = req;

  try {
    const user = await User.create({ login, password });

    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred!');
    }
  }
};
