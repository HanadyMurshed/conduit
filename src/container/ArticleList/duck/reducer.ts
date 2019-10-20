import {
  GLOBAL_FEED,
  USER_FAVORITE,
  USER_FEED,
  YOURE_FEED,
  ArticleState,
  ARTICLES_RECIEVED
} from "./types";
import {
  UPDATE_PAGE_PARAMS_TAG,
  UPDATE_PAGE_PARAMS_TAP
} from "../../../components/pageParams/duck/types";

const instialState: ArticleState = { articles: [], count: 0, loading: true };

const articleReducer = (state = instialState, action: Action): ArticleState => {
  switch (action.type) {
    case GLOBAL_FEED:
    case USER_FAVORITE:
    case USER_FEED:
    case YOURE_FEED:
      return { ...state, loading: true };
    case ARTICLES_RECIEVED:
      return { ...state, loading: false, ...action.payload };
    case UPDATE_PAGE_PARAMS_TAG:
    case UPDATE_PAGE_PARAMS_TAP:
      return { ...state, articles: [], count: 0 };
    default:
      return state;
  }
};
export default articleReducer;

interface Action {
  type: string;
  payload: any;
}
