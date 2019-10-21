import { put, takeLatest } from "redux-saga/effects";
import {
  listArticles,
  getArticleFeed,
  FavoriteArticle,
  unFavoriteArticle
} from "../../../api/server";
import {
  GLOBAL_FEED,
  ARTICLES_RECIEVED,
  USER_FAVORITE,
  USER_FEED,
  YOURE_FEED,
  FAVORITE_ARTICLE,
  UN_FAVORITE_ARTICLE,
  ListArticlActionType,
  FavoriteAnArticleActionType,
  FAVORITE_TOGGLE_DONE,
  UnFavoriteAnArticleActionType
} from "./types";

function* getGlobalFeed(action: ListArticlActionType) {
  const payload = yield listArticles(action.payload)
    .then((response: any) => {
      console.log(response.data.articles);
      return {
        articles: response.data.articles,
        count: response.data.articlesCount
      };
    })
    .catch((err: ListArticlActionType) => []);
  yield put({ type: ARTICLES_RECIEVED, payload: payload });
}

function* getYourFeed(action: any) {
  const payload = yield getArticleFeed(action.payload)
    .then((response: any) => {
      console.log(response.data.articles);
      return {
        articles: response.data.articles,
        count: response.data.articlesCount
      };
    })
    .catch((err: any) => []);
  yield put({ type: ARTICLES_RECIEVED, payload: payload });
}

function* favoriteAnArticle(action: FavoriteAnArticleActionType) {
  const article = yield FavoriteArticle(action.payload.slug)
    .then((res: any) => res.data.article)
    .catch();
  yield put({ type: FAVORITE_TOGGLE_DONE, payload: article });
}

function* unfavoriteAnArticle(action: UnFavoriteAnArticleActionType) {
  const article = yield unFavoriteArticle(action.payload.slug)
    .then((res: any) => res.data.article)
    .catch();
  yield put({ type: FAVORITE_TOGGLE_DONE, payload: article });
}

export function* articlesActionWatcher() {
  yield takeLatest(GLOBAL_FEED, getGlobalFeed);
  yield takeLatest(YOURE_FEED, getYourFeed);
  yield takeLatest(FAVORITE_ARTICLE, favoriteAnArticle);
  yield takeLatest(UN_FAVORITE_ARTICLE, unfavoriteAnArticle);
}
