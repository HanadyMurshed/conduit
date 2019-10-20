import { LoginRequestType } from "../../../api/api.types";
import {
  AuthFailedActionType,
  AuthFaildType
} from "../../../components/auth/duck/types";

export const LOGGIN_REQUEST = "LOGIN_REQUEST";

export type LoginActionType = {
  type: typeof LOGGIN_REQUEST;
  payload: LoginRequestType;
};

export type LoginFaildState = AuthFaildType;
export type ActionType = AuthFailedActionType | LoginActionType;
export type LoginSReqtate = { loading: boolean };
export type LoginState = LoginSReqtate & LoginFaildState;
