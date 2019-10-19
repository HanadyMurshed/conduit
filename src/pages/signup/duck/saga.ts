import { put, takeLatest } from "redux-saga/effects";
import { login } from "../../../api/server";
import { REGISTER_REQUEST, RegisterActionType } from "./types";
import { UPDATE_SESSION } from "../../../components/auth/duck/types";

function* performRegister(action: RegisterActionType) {
  const user = yield login(action.payload)
    .then((response: any) => {
      sessionStorage.setItem("data", JSON.stringify(response.data.user));
      return response.data.user;
    })
    .catch();
  yield put({ type: UPDATE_SESSION, payload: { user: user, loggedIn: true } });
}

export function* LoginActionWatcher() {
  yield takeLatest(REGISTER_REQUEST, performRegister);
}
