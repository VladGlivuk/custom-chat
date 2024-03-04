export interface IAuthorizationRequest {
  userName: string;
  password: string;
}

export interface IUserResponse {
  userName: string;
  __v: number;
  _id: string;
}
