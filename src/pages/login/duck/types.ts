import { LoginRequestType } from "../../../api/api.types";

export const LOGGIN_REQUEST = "LOGIN_REQUEST";

export interface LoginActionType {
  type: typeof LOGGIN_REQUEST;
  payload: LoginRequestType;
}

export type LoginState = { loading: boolean };
