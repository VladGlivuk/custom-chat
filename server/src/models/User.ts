import { Document, model, Schema } from 'mongoose';

export interface IUser extends Document {
  login: string;
  password: string;
}

const userSchema: Schema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model<IUser>('User', userSchema);

export default User;
