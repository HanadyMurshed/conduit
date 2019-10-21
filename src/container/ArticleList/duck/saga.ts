import { put, takeLatest } from "redux-saga/effects";
import { listArticles, getArticleFeed } from "../../../api/server";
import {
  GLOBAL_FEED,
  ARTICLES_RECIEVED,
  USER_FAVORITE,
  USER_FEED,
  YOURE_FEED
} from "./types";

function* getGlobalFeed(action: any) {
  const payload = yield listArticles(action.payload)
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

export function* articlesActionWatcher() {
  yield takeLatest(GLOBAL_FEED, getGlobalFeed);
  yield takeLatest(YOURE_FEED, getYourFeed);
}
