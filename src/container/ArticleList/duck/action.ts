import { ArticleKistQueryParama } from "../../../api/api.types";
import {
  GLOBAL_FEED,
  YOURE_FEED,
  USER_FEED,
  USER_FAVORITE,
  FAVORITE_ARTICLE,
  UN_FAVORITE_ARTICLE,
  ListArticlActionType,
  FavoriteAnArticleActionType,
  UnFavoriteAnArticleActionType
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
  payload: { ...params, limit: 10 }
});

export const listArticleByAuthor = (
  params: ArticleKistQueryParama
): ListArticlActionType => ({
  type: USER_FEED,
  payload: { ...params, limit: 10 }
});

export const listUserFavorite = (
  params: ArticleKistQueryParama
): ListArticlActionType => ({
  type: USER_FAVORITE,
  payload: { ...params, limit: 10 }
});

export const favoriteANnArticle = (
  slug: string
): FavoriteAnArticleActionType => {
  return {
    type: FAVORITE_ARTICLE,
    payload: { slug }
  };
};

export const unFavoriteANnArticle = (
  slug: string
): UnFavoriteAnArticleActionType => {
  return {
    type: UN_FAVORITE_ARTICLE,
    payload: {
      slug
    }
  };
};
