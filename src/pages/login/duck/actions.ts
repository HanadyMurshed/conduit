import { LoginRequestType } from "../../../api/api.types";
import { LOGGIN_REQUEST } from "./types";

export const loginAction = (user: LoginRequestType) => ({
  type: LOGGIN_REQUEST,
  payload: user
});
