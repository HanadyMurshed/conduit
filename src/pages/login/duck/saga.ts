import { put, takeLatest } from "redux-saga/effects";
import { login } from "../../../api/server";
import { LOGGIN_REQUEST, LoginActionType } from "./types";
import { UPDATE_SESSION } from "../../../components/auth/duck/types";

function* performeLogin(action: LoginActionType) {
  const user = yield login(action.payload)
    .then((response: any) => {
      sessionStorage.setItem("data", JSON.stringify(response.data.user));
      return response.data.user;
    })
    .catch();
  yield put({ type: UPDATE_SESSION, payload: { user: user, loggedIn: true } });
}

export function* LoginActionWatcher() {
  yield takeLatest(LOGGIN_REQUEST, performeLogin);
}
