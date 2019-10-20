import { LoginState, LOGGIN_REQUEST, LOGIN_FAILED, ActionType } from "./types";

const initialState: LoginState = {
  loading: false,
  ErrorMsg: ""
};

export function loginReducer(
  state = initialState,
  action: ActionType
): LoginState {
  switch (action.type) {
    case LOGGIN_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case LOGIN_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
}
