import { ArticleKistQueryParama } from "../../../api/api.types";
import { GLOBAL_FEED, YOURE_FEED, USER_FEED, USER_FAVORITE } from "./types";

export const listGlobalFeedAticles = (params: ArticleKistQueryParama) => ({
  type: GLOBAL_FEED,
  payload: params
});
export const lisYouretFeedAticles = (params: ArticleKistQueryParama) => ({
  type: YOURE_FEED,
  payload: params
});
export const listArticleByAuthor = (params: ArticleKistQueryParama) => ({
  type: USER_FEED,
  payload: params
});

export const listUserFavorite = (params: ArticleKistQueryParama) => ({
  type: USER_FAVORITE,
  payload: params
});
