import { LoginRequestType } from "../../../api/api.types";
import { LOGGIN_REQUEST, LoginActionType } from "./types";

export const loginAction = (user: LoginRequestType): LoginActionType => ({
  type: LOGGIN_REQUEST,
  payload: user
});
