import { RegisterState, REGISTER_REQUEST, RegisterActionType } from "./types";

const initialState: RegisterState = {
  loading: false
};

export function registerReducer(
  state = initialState,
  action: RegisterActionType
): RegisterState {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}
