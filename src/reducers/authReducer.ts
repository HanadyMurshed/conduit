import { LOGGIN_REQ } from "../actions/login";
import { SET_USER_INFO } from "../actions/setUserInfo";

const AuthReducer = (state = {}, action: Action) => {
  console.log(action);
  switch (action.type) {
    case LOGGIN_REQ:
      return Object.assign({}, state, { loading: true });
    case "LOGGED":
      return Object.assign({}, state, { user: action.payload });
    case SET_USER_INFO:
      return Object.assign({}, state, { user: action.payload });
    default:
      return state;
  }
};
export default AuthReducer;

interface Action {
  type: string;
  payload: any;
}
