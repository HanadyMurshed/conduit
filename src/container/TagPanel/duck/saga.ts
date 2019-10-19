import { put, takeLatest } from "redux-saga/effects";
import { getTags } from "../../../api/server";
import { GET_TAGS, TAGS_RECIEVED } from "./types";

function* fetchTagsFromApi() {
  const tags = yield getTags().then((response: any) => {
    return response.data.tags;
  });
  yield put({ type: TAGS_RECIEVED, payload: tags });
}

export function* tagsWatcher() {
  yield takeLatest(GET_TAGS, fetchTagsFromApi);
}
