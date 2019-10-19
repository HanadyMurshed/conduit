import { LoginState, LOGGIN_REQUEST, LoginActionType } from "./types";

const initialState: LoginState = {
  loading: false
};

export function loginReducer(
  state = initialState,
  action: LoginActionType
): LoginState {
  switch (action.type) {
    case LOGGIN_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}
