import { LoginState, LOGGIN_REQUEST, ActionType } from "./types";
import { AUTH_FAILED } from "../../../components/auth/duck/types";

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
    case AUTH_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
}
