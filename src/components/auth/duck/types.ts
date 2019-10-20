import { IUser } from "../../../types/conduit.types";

export interface SystemState {
  loggedIn: boolean;
  user: IUser;
}

// src/store/system/types.ts
export const UPDATE_SESSION = "UPDATE_SESSION";
export const AUTH_FAILED = "AUTH_FAILED";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

export type AuthFaildType = {
  ErrorMsg: string;
};

export type AuthFailedActionType = {
  type: typeof AUTH_FAILED;
  payload: AuthFaildType;
};

export type SystemActionTypes = UpdateSessionAction;
