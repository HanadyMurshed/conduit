import { ArticleKistQueryParama } from "../api/api.types";

export const GLOBAL_FEED = "GLOABEL_FEED";
export const YOURE_FEED = "YOURE_FEED";
export const USER_FEED = "USER_FEED";
export const USER_FAVORITE = "USER_FAVORITE";

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
