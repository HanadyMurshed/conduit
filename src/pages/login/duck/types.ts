import { LoginRequestType } from "../../../api/api.types";

export const LOGGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILED = "LOGIN_FAILED";

export type LoginActionType = {
  type: typeof LOGGIN_REQUEST;
  payload: LoginRequestType;
};

export type LogINFaildType = {
  ErrorMsg: string;
};

export type LoginFailedActionType = {
  type: typeof LOGIN_FAILED;
  payload: LogINFaildType;
};

export type LoginFaildState = LogINFaildType;
export type ActionType = LoginFailedActionType | LoginActionType;
export type LoginSReqtate = { loading: boolean };
export type LoginState = LoginSReqtate & LoginFaildState;
