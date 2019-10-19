import { IUser } from "../../../types/conduit.types";

export interface SystemState {
  loggedIn: boolean;
  user: IUser;
}

// src/store/system/types.ts
export const UPDATE_SESSION = "UPDATE_SESSION";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

export type SystemActionTypes = UpdateSessionAction;
