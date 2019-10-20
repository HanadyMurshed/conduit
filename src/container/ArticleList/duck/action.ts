import { ArticleKistQueryParama } from "../../../api/api.types";
import {
  GLOBAL_FEED,
  YOURE_FEED,
  USER_FEED,
  USER_FAVORITE,
  ListArticlActionType
} from "./types";

export const listGlobalFeedAticles = (
  params: ArticleKistQueryParama
): ListArticlActionType => ({
  type: GLOBAL_FEED,
  payload: { ...params, limit: 10 }
});
export const lisYouretFeedAticles = (
  params: ArticleKistQueryParama
): ListArticlActionType => ({
  type: YOURE_FEED,
  payload: params
});
export const listArticleByAuthor = (
  params: ArticleKistQueryParama
): ListArticlActionType => ({
  type: USER_FEED,
  payload: params
});

export const listUserFavorite = (
  params: ArticleKistQueryParama
): ListArticlActionType => ({
  type: USER_FAVORITE,
  payload: params
});
