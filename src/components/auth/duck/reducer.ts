import { SystemState, SystemActionTypes, UPDATE_SESSION } from "./types";

const initialUser = {
  username: "",
  bio: "",
  email: "",
  token: ""
};
const initialState: SystemState = {
  loggedIn: false,
  user: initialUser
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
