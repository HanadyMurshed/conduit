import { RegisterState, REGISTER_REQUEST, ActionType } from "./types";
import { AUTH_FAILED } from "../../../components/auth/duck/types";

const initialState: RegisterState = {
  loading: false,
  ErrorMsg: ""
};

export function registerReducer(
  state = initialState,
  action: ActionType
): RegisterState {
  switch (action.type) {
    case REGISTER_REQUEST: {
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
