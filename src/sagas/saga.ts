import { put, takeLatest, all } from "redux-saga/effects";
import { login } from "../api/server";
import { LOGGIN_REQ, LoginAction } from "../actions/login";

function* performeLogin(action: LoginAction) {
  const user = yield login(action.payload)
    .then((response: any) => {
      sessionStorage.setItem("data", JSON.stringify(response.data.user));
      return response.data.user;
    })
    .catch();
  yield put({ type: "LOGGED", payload: user });
}
function* actionWatcher() {
  yield takeLatest(LOGGIN_REQ, performeLogin);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
