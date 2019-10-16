import { loginRequest } from "../api/api.types";

export const LOGGIN_REQ = "loggin";

export const loginAction = (user: loginRequest) => ({
  type: LOGGIN_REQ,
  payload: user
});

export interface LoginAction {
  type: string;
  payload: loginRequest;
}
