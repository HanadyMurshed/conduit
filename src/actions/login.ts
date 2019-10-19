import { LoginRequestType } from "../api/api.types";

export const LOGGIN_REQUEST = "LOGIN_REQUEST";

export const loginAction = (user: LoginRequestType) => ({
  type: LOGGIN_REQUEST,
  payload: user
});

export interface LoginAction {
  type: string;
  payload: LoginRequestType;
}
