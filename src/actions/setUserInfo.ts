import { IUser } from "../types/conduit.types";

export const SET_USER_INFO = "SET_USER_INFO";

export const setUserInfo = (user: IUser) => ({
  type: SET_USER_INFO,
  payload: user
});
