import {
  GLOBAL_FEED,
  USER_FAVORITE,
  USER_FEED,
  YOURE_FEED
} from "../actions/artciles";

const articleReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case GLOBAL_FEED:
    case USER_FAVORITE:
    case USER_FEED:
    case YOURE_FEED:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};
export default articleReducer;

interface Action {
  type: string;
  payload: any;
}
