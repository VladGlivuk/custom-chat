import { IAuth } from "./auth";

export interface IUser extends IAuth {
  avatar: {type: String, required: true},
}