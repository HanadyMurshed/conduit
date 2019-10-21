import {
  GLOBAL_FEED,
  USER_FAVORITE,
  USER_FEED,
  YOURE_FEED,
  ArticleState,
  ARTICLES_RECIEVED,
  FAVORITE_TOGGLE_DONE,
  UN_FAVORITE_ARTICLE,
  FAVORITE_ARTICLE
} from "./types";
import {
  UPDATE_PAGE_PARAMS_TAG,
  UPDATE_PAGE_PARAMS_TAP,
  UPDATE_PAGE_PARAMS
} from "../../../components/pageParams/duck/types";
import { IArticle } from "../../../types/conduit.types";

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
    case UPDATE_PAGE_PARAMS:
      return { ...state, articles: [], count: 0 };
    case FAVORITE_TOGGLE_DONE:
      return {
        ...state,
        articles: state.articles.map((e: IArticle) => {
          if (e.slug === action.payload.slug) {
            return action.payload;
          } else return e;
        })
      };
    case UN_FAVORITE_ARTICLE:
    case FAVORITE_ARTICLE:
    default:
      return state;
  }
};
export default articleReducer;

interface Action {
  type: string;
  payload: any;
}
