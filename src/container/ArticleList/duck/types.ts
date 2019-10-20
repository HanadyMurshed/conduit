import { ArticleKistQueryParama } from "../../../api/api.types";
import { IArticle } from "../../../types/conduit.types";

export const GLOBAL_FEED = "GLOBAL_FEED";
export const YOURE_FEED = "YOURE_FEED";
export const USER_FEED = "USER_FEED";
export const USER_FAVORITE = "USER_FAVORITE";
export const ARTICLES_RECIEVED = "ARTICLES_RECIEVED";

export type ListArticlActionType = {
  type:
    | typeof GLOBAL_FEED
    | typeof YOURE_FEED
    | typeof USER_FEED
    | typeof USER_FAVORITE;
  payload: ArticleKistQueryParama;
};

export type ArticleState = {
  articles: IArticle[];
  count: number;
  loading: boolean;
};
