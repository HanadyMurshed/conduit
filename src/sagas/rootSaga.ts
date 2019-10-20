import { all } from "redux-saga/effects";
import { LoginActionWatcher } from "../pages/login/duck/saga";
import { tagsWatcher } from "../container/TagPanel/duck/saga";
import { articlesActionWatcher } from "../container/ArticleList/duck/saga";

export default function* rootSaga() {
  yield all([articlesActionWatcher(), LoginActionWatcher(), tagsWatcher()]);
}
