import { put, takeLatest } from "redux-saga/effects";
import { listArticles } from "../api/server";
import { GLOBAL_FEED } from "../actions/artciles";

function* getGlobalFeed(action: any) {
  const user = yield listArticles(action.payload)
    .then((response: any) => {
      return response.data.articles;
    })
    .catch();
  yield put({ type: "ARTICES", payload: user });
}

export function* actionWatcher() {
  yield takeLatest(GLOBAL_FEED, getGlobalFeed);
}
