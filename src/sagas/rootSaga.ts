import { all } from "redux-saga/effects";
import { LoginActionWatcher } from "../pages/login/duck/saga";
import { actionWatcher } from "./articleSaga";
import { tagsWatcher } from "../container/TagPanel/duck/saga";

export default function* rootSaga() {
  yield all([actionWatcher(), LoginActionWatcher(), tagsWatcher()]);
}
