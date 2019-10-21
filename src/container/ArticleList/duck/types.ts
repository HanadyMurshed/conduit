import { ArticleKistQueryParama } from "../../../api/api.types";
import { IArticle } from "../../../types/conduit.types";

export const GLOBAL_FEED = "GLOBAL_FEED";
export const YOURE_FEED = "YOURE_FEED";
export const USER_FEED = "USER_FEED";
export const USER_FAVORITE = "USER_FAVORITE";
export const FAVORITE_ARTICLE = "FAVORITE_ARTICLE";
export const UN_FAVORITE_ARTICLE = "UN_FAVORITE_ARTICLE";
export const ARTICLES_RECIEVED = "ARTICLES_RECIEVED";
export const FAVORITE_TOGGLE_DONE = "FAVORITE_DONE";

export type ListArticlActionType = {
  type:
    | typeof GLOBAL_FEED
    | typeof YOURE_FEED
    | typeof USER_FEED
    | typeof USER_FAVORITE;
  payload: ArticleKistQueryParama;
};

export type FavoriteAnArticleActionType = {
  type: typeof FAVORITE_ARTICLE;
  payload: { slug: string };
};
export type UnFavoriteAnArticleActionType = {
  type: typeof UN_FAVORITE_ARTICLE;
  payload: { slug: string };
};

export type ArticleState = {
  articles: IArticle[];
  count: number;
  loading: boolean;
};
